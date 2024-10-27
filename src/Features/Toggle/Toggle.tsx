import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface ToggleFunctions {
    isMenuOpen: boolean;
    isGalleryOpen: boolean;
    isDiaryOpen: boolean;
    toggleMenu: () => void;
    toggleGallery: () => void;
    toggleDiary: () => void;
}

export function useToggle(): ToggleFunctions {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isGalleryOpen, setGalleryOpen] = useState(false);
    const [isDiaryOpen, setDiaryOpen] = useState(false);
    const navigate = useNavigate();

    function toggleMenu() {
        setMenuOpen((prev) => !prev);
        // console.log("Menu",isMenuOpen)
    }

    function toggleGallery() {
        setMenuOpen(false);
        setGalleryOpen(true);
        navigate('/gallery');
        // console.log("Gallery", isGalleryOpen)
    }

    function toggleDiary() {
        setDiaryOpen(prev => !prev);
        setMenuOpen(false);
        navigate('/diary');
        // console.log("Diary", isDiaryOpen)
    }

    return {
        isMenuOpen,
        isGalleryOpen,
        isDiaryOpen,
        toggleMenu,
        toggleGallery,
        toggleDiary,
    };
}
