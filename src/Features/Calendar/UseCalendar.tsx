import {useState} from "react";
import {Value} from "react-calendar/dist/cjs/shared/types";

function useCalendar() {
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [value, onChange] = useState<Value>(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    function toggleCalendar() {
        setCalendarOpen(prev => !prev);
    }

    function goToDay(day: Date) {
        setSelectedDate(day)
        toggleCalendar();
        // console.log('today is ', day)
    }

    return { isCalendarOpen, toggleCalendar, value, onChange, selectedDate, goToDay };
};

export default useCalendar;