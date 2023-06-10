import React from "react";
import s from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={"React"} description={'text text text text text text text text text '}/>
                    <Skill title={"TypeScrypt"} description={'text text text text text text text text text'}/>
                    <Skill title={"Redux"} description={'text text text text text text text text text'}/>
                </div>
            </div>
        </div>
    );
};

