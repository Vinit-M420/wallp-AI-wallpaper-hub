
import TiltedCard from './TiltedCard';
import { useImagePopupStore } from "@/app/store";
import { useRef, useEffect } from "react";
  

export const ImgPopUp = () => {
    const { imageSrc, imageTitle, setIsOpen } = useImagePopupStore();
    const imgRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                imgRef.current && 
                cardRef.current &&
                imgRef.current.contains(event.target as Node) &&
                !cardRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]);
   

    return (
        <div ref={imgRef} className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-[100]">
            <div ref={cardRef}>
            <TiltedCard 
                imageSrc={imageSrc}
                altText={imageTitle}
                captionText={imageTitle}
                containerHeight="480px"
                containerWidth="300px"
                imageHeight="480px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <div className="relative w-full h-full">
                        <div className="absolute top-5 left-5 bg-black/30 rounded-lg p-2 w-fit">
                            <p className="tilted-card-demo-text whitespace-nowrap font-semibold">{imageTitle}</p>
                        </div>
                    </div>
                }
                
            />
            </div>
    </div>
    )
}