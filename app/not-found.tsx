import React from 'react'
import Nfcontent from './nf-content'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'HappyFound | 404'
}

function notfound() {

    return (
        <>
            <Nfcontent />
        </>
    )
}

export default notfound