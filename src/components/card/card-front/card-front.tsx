import React from "react";
import s from "../card.module.css";
import {ITestDataCard} from "../../../interfaces/interfaces";

const CardFront = (props: ITestDataCard) => {

    return (
        <div className={s["card-front"]}>
            <p className={s["card-pronoun"]}>{props.pronoun}</p>
            <div className={s["card-verb-container"]}/>
            <p className={s["card-conjugation"]}>{props.tense}</p>
        </div>
    );
};

export default CardFront;