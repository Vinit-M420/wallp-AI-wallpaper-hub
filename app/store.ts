import { create } from 'zustand';

interface imagePopupProps { 
    isOpen: boolean;    
    imageSrc: string;
    imageTitle: string;
    setIsOpen: (state: boolean) => void;
    setImageSrc: (state: string) => void;
    setImageTitle: (state: string) => void;
}

export const useImagePopupStore = create<imagePopupProps>((set) => ({
    isOpen: false,
    imageSrc: '',
    imageTitle: '',
    setIsOpen: (state: boolean) => set({ isOpen: state }),
    setImageSrc: (state: string) => set({ imageSrc: state }),
    setImageTitle: (state: string) => set({ imageTitle: state }),
}));   


