import React, {useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Dog from "../../Assets/dog1.png";
import "./Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type CalendarProps = {
    value: Value;
    onChange: (date: Value) => void;
    onClickDay: (day: Date) => void;
    isToggleCalendar: boolean;
};

const CalendarComponent:React.FC<CalendarProps> = ({ value, onChange, onClickDay, isToggleCalendar}) => {

    useEffect(() => {
        const abbrElements = document.querySelectorAll('.react-calendar__month-view__weekdays abbr');

        abbrElements.forEach((abbr) => {
            const span = document.createElement('span');
            span.textContent = abbr.textContent;
            abbr.replaceWith(span);
        });
    }, []);

    return (
        <div className={`calendar ${isToggleCalendar ? 'active' : 'close'}`}>
            <Calendar
                onChange={onChange}
                value={value}
                onClickDay={onClickDay}
                tileContent={({ date, view }) =>
                    view === 'month' && (
                        <div style={{ position: 'relative' }}>
                            <img
                                src={Dog}
                                alt="Dog"
                                style={{
                                    width: '3.5vw',
                                    position: 'absolute',
                                    bottom: '-3px',
                                    left: '28px',
                                    opacity: '0.5',
                                }}
                            />
                        </div>
                    )
                }
            />
        </div>
    );
};

export default CalendarComponent;
