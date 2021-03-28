import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

export const DownloadScreen = () => {
    return (
        <>
            <button className="btn btn-back">Back</button>

            <h1
                className=""
            > Click the button below to download your files</h1>
            <button
                className="btn btn-download"
            >Download Files</button>
        </>
    )
}
