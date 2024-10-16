import React, {useState} from 'react';
import "./DiaryPage.css";
import Sample from "../../Assets/sample.webp";
import Calendar from "../../Assets/calendar-icon.png";
const DiaryPage:React.FC = () => {
    const [toggleWeather, setToggleWeather] = useState("");
    const [isToggleCalendar, setToggleCalendar] = useState(false);
    function clickWeather(weatherType: string) {
        setToggleWeather(weatherType);
    }

    function toggleCalendar() {
        setToggleCalendar(!isToggleCalendar);
        console.log(isToggleCalendar)
    }

        return (
        <section className="diary-page-open">
            <button className="open-calendar-btn" onClick={toggleCalendar}>
                <i className="fa-solid fa-chevron-left calendar-icon"></i>
                <img src={Calendar} alt="" className="calendar-img calendar-icon"/>
            </button>
            <div className={`calendar ${isToggleCalendar ? 'active' : 'close'}`}></div>
            <div className={`diary-paper ${isToggleCalendar ? 'blur' : ''}`}>
                <div className="page-opened">
                    <div className="diary-header">
                        <div className="date-text"><p>Date</p></div>
                        <div className="date-section"><input type="date" className="date"/></div>
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
                    <div className="diary-img">
                        <img className="diary-img" src={Sample} alt="tori's first grooming"/>
                    </div>
                    <div className="title-text">
                        <p>Title</p>
                        <textarea className="title-textarea"></textarea>
                    </div>
                    <textarea className="text-grid"></textarea>
                </div>
            </div>
        </section>
    );
};

export default DiaryPage;
