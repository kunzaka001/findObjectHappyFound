"use client";

import React from 'react'
import TOK from "@/assets/animated/gridtokjai.webp";
import WALL from "@/assets/animated/wallet.webp";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { App, Block, Button } from 'konsta/react'

function Nfcontent() {
    const router = useRouter();

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.to('.dwn', {
            keyframes: {
                y: [-90, -65, -30, 10],
                rotate: [90, 20, -45, 0],
                opacity: [0, 1, 1, 0]
            }, repeat: -1, duration: 1.5
        });
    });

    return (
        <>
            <App theme='ios' className='flex items-center justify-center flex-col max-w-7xl mx-auto'>
                <Block className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-22 w-full'>
                    <Block className='order-last mx-auto flex flex-col items-center justify-center'>
                        <img src={TOK.src} alt="Char" className='w-38 md:w-44 -mr-10' />
                        <img src={WALL.src} alt="Wallet" className='absolute bottom-0 -left-8 w-11 md:w-13 dwn' />
                    </Block>
                    <div className='order-first flex items-center justify-center flex-col w-full'>
                        <Block strong className='rounded-xl text-center space-y-4 flex flex-col justify-center items-center h-fit w-full'>
                            <svg width="42px" height="42px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M19.5 16L17.0248 12.6038" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17.5V14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.5 16L6.96895 12.6124" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 8C6.6 16 17.4 16 21 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <div className='space-y-1'>
                                <h1 className='font-semibold text-2xl'>ค้นหาไม่พบ {"(Lost & Not Found)"}</h1>
                                <p>น่าเสียดายที่หน้านี้ไม่มีใครเก็บมาคืนเราเลย ลองมาค้นหาสิ่งที่เจอแน่นอนที่ <Link href="/">หน้าหลัก</Link> กันดีกว่า!</p>
                            </div>
                            <Button onClick={() => router.back()}>กลับไปหน้าหลัก</Button>
                        </Block>
                    </div>
                </Block>
                <p className='text-white font-semibold'>เวอร์ชั่น 1.0.0</p>
            </App>

        </>
    )
}

export default Nfcontent