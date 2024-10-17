import React, {useState} from 'react';
import "./DiaryPage.css";
import Sample from "../../Assets/sample.webp";
import CalendarIcon from "../../Assets/calendar-icon.png";
import CalendarComponent from "../../Component/Calendar/Calendar";
import {Value} from "react-calendar/dist/cjs/shared/types";

const DiaryPage:React.FC = () => {
    const [toggleWeather, setToggleWeather] = useState("");
    const [isToggleCalendar, setToggleCalendar] = useState(false);
    const [value, onChange] = useState<Value>(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    function clickWeather(weatherType: string) {
        setToggleWeather(weatherType);
    }

    function toggleCalendar() {
        setToggleCalendar(!isToggleCalendar);
        // console.log(isToggleCalendar)
    }

    function goToDay(day: Date) {
        setSelectedDate(day)
        setToggleCalendar(!isToggleCalendar);
        // console.log('today is ', day)
    }

    const day = selectedDate.toLocaleDateString('en-CA');

        return (
        <section className="diary-page-open">
            <button className="open-calendar-btn" onClick={toggleCalendar}>
                <i className="fa-solid fa-chevron-left calendar-icon"></i>
                <img src={CalendarIcon} alt="" className="calendar-img calendar-icon"/>
            </button>
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
