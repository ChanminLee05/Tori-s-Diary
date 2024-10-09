import React, {useEffect} from 'react';
import "./CoverPage.css";
import Dog from "../Assets/dog1.png";
import Cover from "../Assets/tori-cover.png";
const CoverPage: React.FC = () => {

    useEffect(() => {
        const springContainer = document.getElementById('spring-container');
        const numCircles = 8;
        if (springContainer) {
            for (let i = 0; i < numCircles; i++) {
                const topLeft = document.createElement('div');
                const bottomLeft = document.createElement('div');
                topLeft.className = 'quarter-circle top-left';
                bottomLeft.className = 'quarter-circle bottom-left';
                springContainer.appendChild(topLeft);
                springContainer.appendChild(bottomLeft);
            }
        }
    }, []);
    return (
        <section className="cover-page" >
            <div className="diary-container">
                <div className="diary diary-cover">
                    <div id="spring-container" className="spring-container"></div>
                    <h1>Tori's Diary</h1>
                    <div className="heart-container">
                        <i className="fa-solid fa-heart heart-img1"></i>
                        <i className="fa-solid fa-heart heart-img2"></i>
                    </div>
                    <i className="fa-solid fa-paw paw-img1"></i>
                    <i className="fa-solid fa-paw paw-img2"></i>
                    <i className="fa-solid fa-paw paw-img3"></i>
                    <div className="tori-img">
                        <img src={Cover} alt="dog"/>
                    </div>
                    <div className="diary-footer">
                        <p><b>School</b></p>
                        <p><b>Grade</b></p>
                        <p><b>Class</b></p>
                    </div>
                </div>
                <div className="diary diary-page"></div>
                <div className="diary diary-back"></div>
            </div>
        </section>
    );
};

export default CoverPage;
