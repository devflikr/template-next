import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Toaster } from 'react-hot-toast'

import './globals.css'

// prefix urls with deployed website

export const metadata: Metadata = {
    title: "", // app title
    description: "", // app description

    /*
    !don't set before deploying app

    metadataBase: new URL(""), // base url of app
    openGraph: {
        type: "website",
        url: "", // app deployed website
        title: "", // can be same as app title
        description: "", // can be same as app description
        siteName: "", // can be same as app title
        images: [
            {
                url: "", // meta image for og
            }
        ]
    },
    icons: [
        {
            rel: "icon",
            url: "/assets/favicon.png",
        },
        {
            rel: "apple-touch-icon",
            url: "/assets/favicon.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "72x72",
            url: "/assets/favicon.png",
        },
        {
            rel: "apple-touch-icon",
            url: "/assets/favicon.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "144x144",
            url: "/assets/favicon.png",
        }
    ]

    */
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
                <Toaster position="bottom-center" />
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    )
}