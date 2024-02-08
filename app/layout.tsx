import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Toaster } from 'react-hot-toast'

import './globals.css'

// prefix urls with deployed website

export const metadata: Metadata = {
    applicationName: "", // app name
    description: "", // app description
    keywords: "", // app keywords for robots
    title: "", // app title

    /*
    ? Only if required */
    // manifest: "", // app manifest json url


    /*
    ! Only when deployed */
    // assets: "", // app assets path
    // metadataBase: new URL(""), // base url of app
    // openGraph: {
    //     type: "website",
    //     url: "", // app deployed website
    //     title: "", // can be same as app title
    //     description: "", // can be same as app description
    //     siteName: "", // can be same as app title
    //     images: [
    //         { url: "", alt: "", height: 0, width: 0 }
    //     ]
    // },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "",
    //     description: "",
    //     site: "@site",
    //     siteId: "",
    //     creator: "@handle",
    //     creatorId: "",
    //     images: [
    //         { url: "", alt: "", height: 0, width: 0 }
    //     ]
    // },

    // icons: [
    //     { rel: "icon", url: "/assets/favicon.png", type: "" }
    // ],

    /*
    ? Prefilled fields */
    authors: [
        {
            name: "DevFlikr",
            url: "https://devflikr.com"
        }

        /*
        ? Add other authors here */
    ],
    creator: "DevFlikr Team",
    generator: "DevFlikr NextJS Template",
    publisher: "DevFlikr Organization",
    referrer: "origin",
    robots: "index, follow"
}

export default function RootLayout({
    children
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