import React, {useEffect, useRef, useState} from 'react';
import "./DiaryPage.css";
import CalendarComponent from "../../Component/Calendar/Calendar";
import {Value} from "react-calendar/dist/cjs/shared/types";
import CalendarButton from "../../Component/Buttons/CalendarButton/CalendarButton";
import {saveDiaryData, loadDiaryData} from "../../Component/FireBase/FireBase";
import Save from "../../Assets/dog-save.png";

const DiaryPage:React.FC = () => {
    const [isToggleMenu, setToggleMenu] = useState(false);
    const [isToggleCalendar, setIsToggleCalendar] = useState(false);
    const [toggleWeather, setToggleWeather] = useState("");
    const [isDataSaved, setIsDataSaved] = useState<boolean | null>(null);
    const [showSaveMessage, setShowSaveMessage] = useState<boolean>(false);

    const [value, onChange] = useState<Value>(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [weather, setWeather] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    function clickWeather(weatherType: string) {
        setToggleWeather(weatherType);
        if (weatherType === 'sun') {
            setWeather('sun')
        } else if (weatherType === 'cloud') {
            setWeather('cloud')
        } else if (weatherType === 'umbrella') {
            setWeather('umbrella')
        } else if (weatherType === 'snow') {
            setWeather('snow')
        } else {
            setWeather('')
            console.log("There is some error")
        }
        // console.log(weatherType)
    }

    function toggleMenu() {
        setToggleMenu(!isToggleMenu);
        console.log("Menu",isToggleMenu)
    }

    function toggleCalendar() {
        setIsToggleCalendar(!isToggleCalendar);
        setToggleMenu(!isToggleMenu);
        console.log("Calendar",isToggleCalendar)
    }

    function goToDay(day: Date) {
        setSelectedDate(day)
        setIsToggleCalendar(!isToggleCalendar);
        setToggleMenu(false);
        // console.log('today is ', day)
    }

    const day = selectedDate.toLocaleDateString('en-CA');

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    function handleImageClick() {
        if (fileInputRef.current) {
            fileInputRef.current.click();
            console.log("Image clicked!");
        }
    }

    function handleSave(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        saveDiaryData(selectedImage, title, content, weather, day)
            .then(() => {
                setIsDataSaved(true);
                setShowSaveMessage(true);

                setTimeout(() => {
                    setShowSaveMessage(false);
                    setIsDataSaved(null);
                }, 5000)
            })
            .catch((error) => {
                setIsDataSaved(false);
                setShowSaveMessage(true);
                console.error("Error saving diary:", error);

                setTimeout(() => {
                    setShowSaveMessage(false);
                    setIsDataSaved(null);
                }, 5000)
            });
    }

    useEffect(() => {
        async function fetchDiaryData() {
            const data = await loadDiaryData(day);
            if (data) {
                setSelectedImage(data.image || null);
                setTitle(data.title || '');
                setContent(data.content || '');
                setWeather(data.weather || '');
                setToggleWeather(data.weather || '');
            } else {
                setSelectedImage(null);
                setTitle('');
                setContent('');
                setWeather('');
                setToggleWeather('');
            }
        }
        fetchDiaryData();
    }, [day]);

    return (
        <section className="diary-page-open">
            <CalendarButton
                isToggleMenu={isToggleMenu}
                toggleMenu={toggleMenu}
                toggleCalendar={toggleCalendar}
            />
            <CalendarComponent
                value={value}
                onChange={onChange}
                onClickDay={goToDay}
                isToggleCalendar={isToggleCalendar}
            />
            <div className={`diary-paper ${isToggleCalendar ? 'blur' : ''}`}>
                <div className="page-opened">
                    <div className="diary-header">
                        <div className="date-text"><p>Date</p></div>
                        <div className="date-section">{day}</div>
                        <div className="weather-text"><p>Weather</p></div>
                        <div className="weather">
                            <button
                                className={`weather-btn ${toggleWeather === 'sun' ? 'active' : ''}`}
                                onClick={() => clickWeather('sun')}>
                                <i className="bi bi-sun"></i>
                            </button>
                            <button
                                className={`weather-btn ${toggleWeather === 'cloud' ? 'active' : ''}`}
                                onClick={() => clickWeather('cloud')}>
                                <i className="bi bi-cloud"></i>
                            </button>
                            <button
                                className={`weather-btn ${toggleWeather === 'umbrella' ? 'active' : ''}`}
                                onClick={() => clickWeather('umbrella')}>
                                <i className="bi bi-umbrella"></i>
                            </button>
                            <button
                                className={`weather-btn ${toggleWeather === 'snow' ? 'active' : ''}`}
                                onClick={() => clickWeather('snow')}>
                                <i className="bi bi-cloud-snow"></i>
                            </button>
                        </div>
                    </div>
                    <div className="diary-img-container">
                        {selectedImage ? (
                            <img
                                className="diary-img"
                                src={selectedImage as string} // Display selected image
                                alt="uploaded preview"
                                onClick={handleImageClick} // Properly assign handleImageClick here
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
