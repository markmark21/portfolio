import React from "react";
import s from "./Main.module.css";
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1>I am Mark Khramov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>

        </div>
    );
};

