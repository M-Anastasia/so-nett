import React from 'react';
import s from './card.module.css';

const Card = () => {
    return (
        <label>
            <input type="checkbox"/>
            <div className={s["card"]}>
                <div className={s["card-front"]}>
                    <p className={s["card-pronoun"]}>ich</p>
                    <div className={s["card-verb-container"]}></div>
                    <p className={s["card-conjugation"]}>Präsens</p>
                </div>
                <div className={s["card-back"]}>
                    <p className={s["card-pronoun"]}>ich</p>
                    <div className={s["card-verb-container"]}>
                        <p className={s["card-verb"]}>bin</p>
                    </div>
                    <p className={s["card-conjugation"]}>Präsens</p>
                </div>
            </div>
        </label>
    )
}

export default Card;