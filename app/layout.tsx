import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import Script from "next/script";

export const metadata: Metadata = {
  title: 'TokHop USA - TikTok USA Access Platform',
  description: 'TokHop USA enables creators outside the US to post directly to TikTok USA, opening the door to 100M+ American viewers.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-Z0W4EG1CVG`}
          strategy='afterInteractive'
        />
        <Script
          id="google-analytics" strategy='afterInteractive'>
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Z0W4EG1CVG');`
          }
        </Script>
        <Script id="chatbase-widget" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return(...args)=>target(prop,...args)
                  }
                });
                window.chatbase("init", {
                  embedId: "n8EMDPD0LnIHsYK09McuM",
                  hideBranding: true
                });
              }
            })();
          `}
        </Script>
        <Script id="remove-branding" strategy="afterInteractive">
          {`
            // Function to remove branding elements
            const removeChatbaseBranding = () => {
              // Target all potential branding elements in main document
              const possibleBrandingElements = document.querySelectorAll('div[class*="powered"], div[style*="text-align: center"], div[style*="justify-content: center"][style*="align-items: center"][style*="gap: 2px"]');
              
              possibleBrandingElements.forEach(elem => {
                if (elem.textContent.includes('Chatbase') || elem.innerHTML.includes('chatbase.co')) {
                  const parentDiv = elem.closest('div[class*="flex"]') || elem;
                  parentDiv.remove();
                }
              });

              // Check inside iframes
              const chatIframes = document.querySelectorAll('iframe[src*="chatbase"], #chatbase-bubble-window iframe');
              chatIframes.forEach(iframe => {
                try {
                  if (iframe.contentDocument) {
                    // Target footer elements
                    const footerElements = iframe.contentDocument.querySelectorAll('footer, div[class*="powered"], div[style*="text-align: center"]');
                    footerElements.forEach(elem => {
                      if (elem.textContent.includes('Chatbase') || elem.innerHTML.includes('chatbase.co')) {
                        elem.remove();
                      }
                    });

                    // Target specific footer class from minified code
                    const specificFooter = iframe.contentDocument.querySelector('footer.flex.min-h-10.w-full.max-w-full.shrink-0.items-center.justify-center.gap-2');
                    if (specificFooter) {
                      specificFooter.remove();
                    }

                    // Target chatbase links
                    const chatbaseLinks = iframe.contentDocument.querySelectorAll('a[href*="chatbase.co"], a[href*="chatbase.fyi"]');
                    chatbaseLinks.forEach(el => {
                      const parentDiv = el.closest('div');
                      if (parentDiv) {
                        parentDiv.remove();
                      } else {
                        el.remove();
                      }
                    });
                  }
                } catch(e) {
                  // Cross-origin restrictions may prevent access
                  console.debug('Could not access iframe content:', e);
                }
              });
            };

            // Set up mutation observer to watch for new elements
            const observer = new MutationObserver((mutations) => {
              removeChatbaseBranding();
            });

            // Function to set up observers
            const setupObservers = () => {
              // Observe the main document
              observer.observe(document.body, {
                childList: true,
                subtree: true
              });

              // Try to observe the chat iframe
              const chatFrame = document.querySelector('#chatbase-bubble-window iframe');
              if (chatFrame && chatFrame.contentDocument) {
                observer.observe(chatFrame.contentDocument.body, {
                  childList: true,
                  subtree: true
                });
              } else {
                // If iframe not ready, retry after a short delay
                setTimeout(setupObservers, 500);
              }
            };

            // Run on DOMContentLoaded and window load to ensure we catch everything
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', () => {
                removeChatbaseBranding();
                setupObservers();
              });
            } else {
              removeChatbaseBranding();
              setupObservers();
            }

            // Also run on window load
            window.addEventListener('load', () => {
              removeChatbaseBranding();
              setupObservers();
            });

            // Run immediately
            removeChatbaseBranding();
            setupObservers();

            // Set up periodic check as a fallback
            setInterval(removeChatbaseBranding, 1000);
          `}
        </Script>
        <Script
          src="https://www.chatbase.co/embed.min.js"
          id="n8EMDPD0LnIHsYK09McuM"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  )
}
