import React from 'react';
import CalendarIcon from "../../../Assets/calendar-icon.png";
import "../ButtonCSS.css";
import GalleryButton from "../GalleryButton/GalleryButton";
import DiaryButton from "../DiaryButton/DiaryButton";
import {useToggle} from "../../../Features/Toggle/Toggle";
import {useLocation} from "react-router-dom";

interface MenuButtonProps {
    toggleCalendar: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ toggleCalendar }) => {
    const { isMenuOpen, toggleMenu } = useToggle();

    const location = useLocation();

    return (
        <button className={`open-menu-btn ${isMenuOpen ? 'expanded' : ''}`} >
            <i className="fa-solid fa-chevron-left toggle-icon" onClick={toggleMenu}></i>
            <img
                src={CalendarIcon}
                alt=""
                className="calendar-img toggle-icon calendar-icon"
                onClick={toggleCalendar}
            />
            {location.pathname === '/gallery' ? (
                <DiaryButton />
            ) : location.pathname === '/diary' ? (
                <GalleryButton />
            ) : (
                <GalleryButton />
            )}
        </button>
    );
};

export default MenuButton;
