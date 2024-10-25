import React, {useState} from 'react';
import CalendarIcon from "../../../Assets/calendar-icon.png";
import "../ButtonCSS.css";
import GalleryButton from "../GalleryButton/GalleryButton";
import {useNavigate} from "react-router-dom";

type CalendarButtonProps = {
    isToggleMenu: boolean;
    toggleMenu: () => void;
    toggleCalendar: () => void;
}
const CalendarButton: React.FC<CalendarButtonProps> = ({isToggleMenu, toggleMenu, toggleCalendar}) => {
    const [isToggleGallery, setIsToggleGallery] = useState(false);
    const navigate = useNavigate();
    function toggleGallery() {
        setIsToggleGallery(!isToggleGallery)
        navigate('/gallery')
        // console.log("Gallery",isToggleGallery)
    }

    return (
        <button className={`open-menu-btn ${isToggleMenu ? 'expanded' : ''}`} >
            <i className="fa-solid fa-chevron-left toggle-icon" onClick={toggleMenu}></i>
            <img
                src={CalendarIcon}
                alt=""
                className="calendar-img toggle-icon calendar-icon"
                onClick={toggleCalendar}
            />
            <GalleryButton toggleGallery={toggleGallery} />
        </button>
    );
};

export default CalendarButton;
