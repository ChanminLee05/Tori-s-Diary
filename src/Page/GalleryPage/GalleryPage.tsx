import React from 'react';
import "./GalleryPage.css";
import LineWithImg from "./SaggingLineWithImg/LineWithImg";
import MenuButton from "../../Component/Buttons/MenuButton/MenuButton";
import CalendarComponent from "../../Component/Calendar/Calendar";
import useCalendar from "../../Features/Calendar/UseCalendar";

const GalleryPage:React.FC = () => {
    const { isCalendarOpen, toggleCalendar, value, onChange, selectedDate, goToDay } = useCalendar();

    return (
        <div className="gallery-page">
            <LineWithImg selectedDate={selectedDate}/>
            <MenuButton toggleCalendar={toggleCalendar}/>
            <CalendarComponent
                isCalendarOpen={isCalendarOpen}
                value={value}
                onChange={onChange}
                onClickDay={goToDay}
            />
        </div>
    );
};

export default GalleryPage;
