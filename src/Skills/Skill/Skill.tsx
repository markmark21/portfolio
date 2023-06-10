import React from "react";
import s from './Skill.module.css'

type SkillsType = {
    title: string
    description: string
}
export const Skill: React.FC<SkillsType> = (props) => {
    const {title, description} = props
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <div className={s.iconSpace}></div>
                <h3>{title}</h3>
                <span className={s.description}>
                    {description}
                </span>
            </div>
        </div>
    );
};

;