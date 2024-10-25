import React from 'react';
import GalleryIcon from "../../../Assets/gallery.png";
import "../ButtonCSS.css";

type GalleryButtonProps = {
    toggleGallery: () => void;
}
const GalleryButton:React.FC<GalleryButtonProps> = ({toggleGallery}) => {
    return (
        <img src={GalleryIcon} alt="" className="calendar-img toggle-icon gallery-icon" onClick={toggleGallery}/>
    );
};

export default GalleryButton;
