import React, {useEffect, useState} from 'react';
import "./GalleryPage.css";
import LineWithImg from "./SaggingLineWithImg/LineWithImg";
import CalendarButton from "../../Component/Buttons/CalendarButton/CalendarButton";
import {useToggle} from "../../Features/Toggle/Toggle";
import CalendarComponent from "../../Component/Calendar/Calendar";
import {Value} from "react-calendar/dist/cjs/shared/types";

const GalleryPage:React.FC = () => {
    const { isMenuOpen, isCalendarOpen, toggleMenu, toggleCalendar } = useToggle();
    const [value, onChange] = useState<Value>(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    function goToDay(day: Date) {
        setSelectedDate(day)
        toggleCalendar();
        // console.log('today is ', day)
    }

    return (
        <div className="gallery-page">
            <LineWithImg selectedDate={selectedDate}/>
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
        </div>
    );
};

export default GalleryPage;
