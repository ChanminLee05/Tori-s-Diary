import React from 'react';
import "./LineWithImg.css";
import Dog from "../../../Assets/dog1.png";
import ImageCard from "../ImageCard/ImageCard";


const LineWithImg:React.FC = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7];
    return (
        <>
            <div className="photo-container">
                <svg className="sagging-line first-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,1 Q50,13 100,1" stroke="#93442b" strokeWidth="2" fill="transparent"/>
                </svg>
                <div className="image-card-container">
                    {cards.map((card, index) => (
                        <ImageCard
                            key={index}
                            cardTitle={`Card ${card}`}
                        />
                    ))}
                </div>
            </div>
            <div className="photo-container">
                <svg className="sagging-line additional-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,1 Q50,13 100,1" stroke="#93442b" strokeWidth="2" fill="transparent"/>
                </svg>
                <div className="image-card-container">
                    {cards.map((card, index) => (
                        <ImageCard
                            key={index}
                            cardTitle={`Card ${card}`}
                        />
                    ))}
                </div>
            </div>
            <div className="photo-container">
                <svg className="sagging-line additional-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,1 Q50,13 100,1" stroke="#93442b" strokeWidth="2" fill="transparent"/>
                </svg>
                <div className="image-card-container">
                    {cards.map((card, index) => (
                        <ImageCard
                            key={index}
                            cardTitle={`Card ${card}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default LineWithImg;
