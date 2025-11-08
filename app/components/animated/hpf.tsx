"use client";

import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BOY from "@/assets/animated/boy.webp";
import GIRL from "@/assets/animated/girl.webp";
import EXL from "@/assets/animated/el.webp";
import WOW from "@/assets/animated/yay.webp";


function Hpf() {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.to('.upp', { keyframes: { y: [0, -10, 0] }, repeat: -1, duration: 1 });
        gsap.to('.uppsw', { keyframes: { y: [0, -10, 0] }, repeat: -1, duration: 1.5 });
    });

    return (
        <>
            <div className='z-1 flex items-end relative gap-8 md:gap-16'>
                <img src={BOY.src} alt="ICON" className='w-42 md:w-50' />
                <img src={EXL.src} alt="ICON" className='w-16 md:w-18 absolute top-0 left-30 md:left-36 upp' />
                <img src={GIRL.src} alt="ICON" className='w-38 md:w-48' />
                <img src={WOW.src} alt="ICON" className='w-18 md:w-20 absolute -top-12 right-26 md:right-36 uppsw' />
            </div>
        </>
    )
}

export default Hpf