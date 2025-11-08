"use client";

import { App, Block, Button, Preloader, Notification } from 'konsta/react';
import React, { useEffect, useState } from 'react';
import Hpf from './components/animated/hpf';
import YW from '@/assets/Yorwor.webp';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import ICON from "@/assets/Icon.png";

function Content() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<any | boolean>(false);
    const [notificationFull, setNotificationFull] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState({
        title: "",
        subtitle: "",
        text: ""
    })

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
    });

    function Login() {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            hd: 'hatyaiwit.ac.th',
        });
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (credential) {
                    const user = result.user;
                    setNotificationFull(true);
                    setNotificationMessage({
                        title: "เข้าสู่ระบบสำเร็จ",
                        text: `ยินดีต้อนรับคุณ ${user.displayName}`,
                        subtitle: ""
                    })
                }
            }).catch((error) => {
                const errorMessage = error.message;
                setNotificationFull(true);
                setNotificationMessage({
                    title: "ไม่สามารถเข้าสู่ระบบได้",
                    text: errorMessage,
                    subtitle: "โปรดลองอีกครั้งในภายหลัง"
                })
            }).finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (notificationFull) {
            timer = setTimeout(() => {
                setNotificationFull(false);
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [notificationFull]);

    return (
        <>
            <App theme='ios' className='flex items-center justify-center flex-col max-w-7xl mx-auto'>
                <Notification
                    opened={notificationFull}
                    icon={<img src={ICON.src} alt='icon' className='w-10' />}
                    title={notificationMessage.title}
                    subtitle={notificationMessage.subtitle}
                    titleRightText="ตอนนี้"
                    text={notificationMessage.text}
                />
                <Block className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-22 w-full'>
                    <Block className='mx-auto flex flex-col items-center justify-center'>
                        <Hpf />
                    </Block>
                    <div className='order-first md:order-last flex items-center justify-center flex-col w-full'>
                        <Block strong className='rounded-xl space-y-5 h-fit w-full'>
                            <div className='text-center space-y-2 flex items-center justify-center flex-col'>
                                <img src={YW.src} alt="Icon" className='w-18' />
                                <h1 className='font-semibold text-3xl'>เข้าสู่ระบบ</h1>
                                <p>ระบบของหายได้คืนที่จะคืนความสุขให้คุณ</p>
                            </div>
                            <div className='space-y-1'>
                                <Button disabled={user} onClick={Login} className='flex items-center gap-2'>
                                    {loading && <Preloader className='text-white w-4' />}
                                    <p>{user ? 'คุณเข้าสู่ระบบแล้ว' : 'เข้าสู่ระบบ'}</p>
                                </Button>
                                <h2 className='text-center text-gray-500'>ล็อกอินด้วยบัญชี @hatyaiwit.ac.th</h2>
                            </div>
                        </Block>
                    </div>
                </Block>
                <p className='text-white font-semibold'>เวอร์ชั่น 1.0.0</p>
            </App>
        </>
    )
}

export default Content