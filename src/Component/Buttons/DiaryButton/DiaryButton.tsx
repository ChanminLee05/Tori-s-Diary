import React from 'react';
import Diary from "../../../Assets/diary.png";
import {useToggle} from "../../../Features/Toggle/Toggle";

const DiaryButton:React.FC = () => {
    const { toggleDiary } = useToggle();
    return (
        <div>
            <img src={Diary} alt="" className="calendar-img toggle-icon diary-icon" onClick={toggleDiary}/>
        </div>
    );
};

export default DiaryButton;
