import React from 'react';
import "./LineWithImg.css";
import ImageCard from "../ImageCard/ImageCard";


const LineWithImg:React.FC<{ selectedDate: Date }> = ({ selectedDate }) => {
    const cards = [1, 2, 3, 4, 5, 6, 7];

    const formattedDate = selectedDate.toLocaleDateString('en-CA');

    return (
        <>
            <div className="photo-container">
                <svg className="sagging-line first-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,1 Q50,13 100,1" stroke="#93442b" strokeWidth="2" fill="transparent" />
                </svg>
                <div className="image-card-container">
                    {cards.map((_, i) => (
                        <ImageCard key={i} day={formattedDate} imageId={`image-${i + 1}`} />
                    ))}
                </div>
            </div>

            <div className="photo-container">
                <svg className="sagging-line first-line additional-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,1 Q50,13 100,1" stroke="#93442b" strokeWidth="2" fill="transparent" />
                </svg>
                <div className="image-card-container">
                    {cards.map((_, i) => (
                        <ImageCard key={i + 7} day={formattedDate} imageId={`image-${i + 8}`} />
                    ))}
                </div>
            </div>

            <div className="photo-container">
                <svg className="sagging-line first-line additional-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,1 Q50,13 100,1" stroke="#93442b" strokeWidth="2" fill="transparent" />
                </svg>
                <div className="image-card-container">
                    {cards.map((_, i) => (
                        <ImageCard key={i + 14} day={formattedDate} imageId={`image-${i + 15}`} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default LineWithImg;
