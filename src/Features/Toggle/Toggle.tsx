import {useState} from "react";

interface ToggleFunctions {
    isMenuOpen: boolean;
    isCalendarOpen: boolean;
    isGalleryOpen: boolean;
    toggleMenu: () => void;
    toggleCalendar: () => void;
    toggleGallery: () => void;
}

export function useToggle(): ToggleFunctions {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [isGalleryOpen, setGalleryOpen] = useState(false);
    function toggleMenu() {
        setMenuOpen((prev) => !prev);
        // console.log("Menu",isMenuOpen)
    }

    function toggleCalendar() {
        setCalendarOpen((prev) => !prev);
        setMenuOpen(false);
        // console.log("Calendar",isCalendarOpen)
    }

    function toggleGallery() {
        setGalleryOpen(prev => !prev);
        setMenuOpen(false); // Close menu when opening gallery, if necessary
    }

    return {
        isMenuOpen,
        isCalendarOpen,
        isGalleryOpen,
        toggleMenu,
        toggleCalendar,
        toggleGallery,
    };
}
