import React from "react";
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2>My Skills</h2>
            </div>
        </div>
    );
};

