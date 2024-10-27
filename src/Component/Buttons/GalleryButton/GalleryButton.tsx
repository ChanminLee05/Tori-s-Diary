import React from 'react';
import GalleryIcon from "../../../Assets/gallery.png";
import "../ButtonCSS.css";
import {useToggle} from "../../../Features/Toggle/Toggle";

const GalleryButton:React.FC = () => {
    const { toggleGallery } = useToggle()
    return (
        <img src={GalleryIcon} alt="" className="calendar-img toggle-icon gallery-icon" onClick={toggleGallery}/>
    );
};

export default GalleryButton;
