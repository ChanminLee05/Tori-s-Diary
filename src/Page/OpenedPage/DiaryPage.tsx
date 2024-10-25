import React, {useEffect, useRef, useState} from 'react';
import "./DiaryPage.css";
import CalendarComponent from "../../Component/Calendar/Calendar";
import {Value} from "react-calendar/dist/cjs/shared/types";
import CalendarButton from "../../Component/Buttons/CalendarButton/CalendarButton";
import {saveDiaryData, loadDiaryData} from "../../Component/FireBase/FireBase";
import Save from "../../Assets/dog-save.png";
import {useHandleImage} from "../../Features/HandleImage/HandleImage";
import {useToggle} from "../../Features/Toggle/Toggle";

const DiaryPage:React.FC = () => {
    const [isDataSaved, setDataSaved] = useState<boolean | null>(null);
    const [showSaveMessage, setShowSaveMessage] = useState<boolean>(false);

    const [value, onChange] = useState<Value>(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [weather, setWeather] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { selectedImage, setSelectedImage, fileInputRef, handleImageChange, handleImageClick } = useHandleImage();
    const { isMenuOpen, isCalendarOpen, toggleMenu, toggleCalendar } = useToggle();

    const day = selectedDate.toLocaleDateString('en-CA');

    function handleWeatherSelection(weatherType: string) {
        setWeather(weatherType);
    }

    function goToDay(day: Date) {
        setSelectedDate(day)
        toggleCalendar();
        // console.log('today is ', day)
    }

    async function handleSave(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        await saveDiaryData(selectedImage, title, content, weather, day)
        try {
            await saveDiaryData(selectedImage, title, content, weather, day);
            setDataSaved(true);
        } catch (error) {
            setDataSaved(false);
            console.error("Error saving diary:", error);
        } finally {
            setShowSaveMessage(true);
            setTimeout(() => setShowSaveMessage(false), 5000);
        }
    }

    useEffect(() => {
        async function fetchDiaryData() {
            const data = await loadDiaryData(day);
            if (data) {
                setSelectedImage(data.image || null);
                setTitle(data.title || '');
                setContent(data.content || '');
                setWeather(data.weather || '');
            } else {
                setSelectedImage(null);
                setTitle('');
                setContent('');
                setWeather('');
            }
        }
        fetchDiaryData();
    }, [day]);

    return (
        <section className="diary-page-open">
            <CalendarButton
                isToggleMenu={isMenuOpen}
                toggleMenu={toggleMenu}
                toggleCalendar={toggleCalendar}
            />
            <CalendarComponent
                value={value}
                onChange={onChange}
                onClickDay={goToDay}
                isToggleCalendar={isCalendarOpen}
            />
            <div className={`diary-paper ${isCalendarOpen ? 'blur' : ''}`}>
                <div className="page-opened">
                    <div className="diary-header">
                        <div className="date-text"><p>Date</p></div>
                        <div className="date-section">{day}</div>
                        <div className="weather-text"><p>Weather</p></div>
                        <div className="weather">
                            {['sun', 'cloud', 'umbrella', 'snow'].map((type) => (
                                <button
                                    key={type}
                                    className={`weather-btn ${weather === type ? 'active' : ''}`}
                                    onClick={() => handleWeatherSelection(type)}>
                                    <i className={`bi bi-${type}`}></i>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="diary-img-container">
                        {selectedImage ? (
                            <img
                                className="diary-img"
                                src={selectedImage as string}
                                alt="uploaded preview"
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
                    <div className="title-text">
                        <p>Title</p>
                        <textarea
                            className="title-textarea"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <textarea
                        className="text-grid"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button className="save-btn" onClick={handleSave}>
                        <img src={Save} alt="" className="save-img"/>
                    </button>
                    <div className={`save-txt ${isDataSaved ? 'success' : 'fail'}`}>
                        {showSaveMessage ? (isDataSaved ? "Saved!" : "Fail!") : ""}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiaryPage;
