import React, { useRef, useState } from 'react';

export function useHandleImage() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            if (file.size > 1048487) {
                alert("Image size exceeds 1 MB. Please choose a smaller file.");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            }
            reader.readAsDataURL(file);
        }
    }

    function handleImageClick() {
        fileInputRef.current?.click();
    }

    return { selectedImage, setSelectedImage, fileInputRef, handleImageChange, handleImageClick };
}