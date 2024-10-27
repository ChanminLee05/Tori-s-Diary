import React, {useEffect, useState} from 'react';
import "./ImageCard.css";
import {useHandleImage} from "../../../Features/HandleImage/HandleImage";
import {loadGalleryData, saveGalleryData} from "../../../Component/FireBase/FireBase";
import Upload from "../../../Assets/upload.png";

interface ImageCardProps {
    day: string;
    imageId: string;
}

const ImageCard:React.FC<ImageCardProps> = ({ day, imageId }) => {
    const { fileInputRef, handleImageChange, handleImageClick } = useHandleImage();
    const [imageURL, setImageURL] = useState<string | null>(null);

    const handleImageChangeAndSave = async (event: React.ChangeEvent<HTMLInputElement>) => {
        handleImageChange(event);
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = async () => {
                const imageData = reader.result as string;
                await saveGalleryData(imageData, day, imageId);
                setImageURL(imageData);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    useEffect(() => {
        const fetchImageData = async () => {
            const data = await loadGalleryData(day, imageId);
            setImageURL(data);
        };

        fetchImageData();
    }, [day, imageId]);

    return (
        <div className="card line-card">
            <div className="card-inside">
                {imageURL ? (
                    <img
                        className="card-img-top"
                        src={imageURL}
                        alt="Gallery Image"
                        onClick={handleImageClick}
                    />
                ) : (
                    <>
                        <label className="custom-file-upload">
                            <img src={Upload} alt="" className="upload-img"/>
                            <p>Upload</p>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChangeAndSave}
                            />
                        </label>
                    </>
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChangeAndSave}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
            </div>
        </div>
    );
};

export default ImageCard;
