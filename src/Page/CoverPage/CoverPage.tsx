import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./CoverPage.css";
import Dog from "../../Assets/dog1.png";
import Cover from "../../Assets/tori-cover.png";
import Family from "../../Assets/family.jpg";
const CoverPage: React.FC = () => {
    const navigate = useNavigate();
    const [isOpenDiary, setOpenDiary] = useState(false);

    useEffect(() => {
        const springContainer = document.getElementById('spring-container');
        const numCircles = 15;
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
    }, [isOpenDiary]);

    function openDiary() {
        setOpenDiary(!isOpenDiary)

        const timeOutId = setTimeout(() => {
            navigate('/diary');
        }, 3000);
        console.log(isOpenDiary)
        return () => clearTimeout(timeOutId);
    }

    useEffect(() => {
        const pages = document.querySelectorAll(".diary-page");
        pages.forEach((page, index) => {
            const diaryPage = page as HTMLElement;
            const dataType = diaryPage.getAttribute('dataType');

            diaryPage.style.zIndex = isOpenDiary ? '50' : '-6';

            if (!isOpenDiary) {
                setTimeout(() => {
                    if (dataType === 'diary-page1') {
                        diaryPage.style.transform = 'translate(-49%, -49%)';
                        diaryPage.style.zIndex = '-2';
                    } else if (dataType === 'diary-page2') {
                        diaryPage.style.transform = 'translate(-48%, -48%)';
                        diaryPage.style.zIndex = '-3';
                    } else if (dataType === 'diary-page3') {
                        diaryPage.style.transform = 'translate(-47%, -47%)';
                        diaryPage.style.zIndex = '-4';
                    } else if (dataType === 'diary-page4') {
                        diaryPage.style.transform = 'translate(-46%, -46%)';
                        diaryPage.style.zIndex = '-5';
                    }
                }, index * 200);
            } else {
                setTimeout(() => {
                    if (dataType === 'diary-page1') {
                        diaryPage.style.transform = 'translate(-46%, -46%) rotateY(-160deg)';
                    } else if (dataType === 'diary-page2') {
                        diaryPage.style.transform = 'translate(-46%, -46%) rotateY(-160deg)';
                    } else if (dataType === 'diary-page3') {
                        diaryPage.style.transform = 'translate(-46%, -46%) rotateY(-160deg)';
                    } else if (dataType === 'diary-page4') {
                        diaryPage.style.fontSize = '2vw'
                        diaryPage.style.padding = '2vw'
                        const text = document.createElement('p');
                        text.innerText = "By Chanmin & Eunji";
                        text.className = "page-text";
                        diaryPage.appendChild(text);
                        const img = document.createElement('img');
                        img.src = Family;
                        img.alt = "";
                        img.className = "page-img"
                        diaryPage.appendChild(img)
                    }
                }, index * 200);
            }
        });

        return () => {};
    }, [isOpenDiary]);

    return (
        <section className="cover-page">
            <div className="diary-container">
                <div className={`diary diary-cover ${isOpenDiary ? 'diary-open cover-open' : ''}`} onClick={openDiary}>
                    {!isOpenDiary && (
                        <>
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
                        </>
                    )}
                </div>
                <div className={`diary diary-page ${isOpenDiary ? 'diary-open' : ''}`} datatype={'diary-page1'}></div>
                <div className={`diary diary-page ${isOpenDiary ? 'diary-open' : ''}`} datatype={'diary-page2'}></div>
                <div className={`diary diary-page ${isOpenDiary ? 'diary-open' : ''}`} datatype={'diary-page3'}></div>
                <div className={`diary diary-page ${isOpenDiary ? 'diary-open' : ''}`} datatype={'diary-page4'}></div>
                <div className="diary diary-back"></div>
            </div>
        </section>
    );
};

export default CoverPage;
