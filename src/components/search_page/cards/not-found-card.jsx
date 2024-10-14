import React from 'react'
import { Image } from '@nextui-org/react'
import FooterLogo from '@/components/ui/icons/footer-logo'

// /* Ellipse 10 */

// position: absolute;
// left: 0.67%;
// right: -92.04%;
// top: -90.07%;
// bottom: 36.54%;

// background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(115, 115, 115, 0) 100%);


function NotFoundCard({blackText=false}) {
  return (
    <div className={`inset-0 rounded absolute flex items-center justify-around gap-2 p-2 z-20 size-full text-black dark:text-white`}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <Image removeWrapper src={Logo.src} alt="arabhardware" className="object-contain size-3/5 !opacity-30" /> */}
            <div className="size-32 flex items-center justify-center">
              <FooterLogo />
            </div>
          </div>
          <div className="space-y-6 relative z-10">
            <p className="text-large -mt-2">
              عذراً...
            </p>
            <p className="text-small">
              لم نتمكن من العثور على اي نتائج تتوافق مع عملية البحث.
            </p>
          </div>
        </div>
  )
}

export default NotFoundCard