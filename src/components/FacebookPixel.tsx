'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function FacebookPixel() {
  const pathname = usePathname()
  const initializedRef = useRef(false)

  // Track PageView on client-side route changes (App Router SPA)
  useEffect(() => {
    if (!initializedRef.current) {
      // First load already triggers PageView from the base snippet
      initializedRef.current = true
      return
    }
    // @ts-ignore
    window.fbq?.('track', 'PageView')
  }, [pathname])

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2081938345668852');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=2081938345668852&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
} 