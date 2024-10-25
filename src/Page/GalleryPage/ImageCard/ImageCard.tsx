import React from 'react';
import "./ImageCard.css";
import {useHandleImage} from "../../../Features/HandleImage/HandleImage";

interface ImageCardProps {
    cardTitle: string;
}

const ImageCard:React.FC<ImageCardProps> = ({ cardTitle }) => {
    const { selectedImage, fileInputRef, handleImageChange, handleImageClick } = useHandleImage();

    return (
        <div className="card line-card">
            <div className="card-inside">
                {selectedImage ? (
                    <img
                        className="card-img-top"
                        src={selectedImage as string}
                        alt={cardTitle}
                        onClick={handleImageClick}
                    />
                ) : (
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
            </div>
        </div>
    );
};

export default ImageCard;
