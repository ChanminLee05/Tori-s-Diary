import React from 'react';
import "./ImageCard.css";

interface ImageCardProps {
    cardTitle: string;
    imageSrc: string;
}

const ImageCard:React.FC<ImageCardProps> = ({ cardTitle, imageSrc }) => {
    return (
        <div className="card line-card">
            <div className="card-inside">
                <img src={imageSrc} className="card-img-top" alt={cardTitle} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
            </div>
        </div>
    );
};

export default ImageCard;
