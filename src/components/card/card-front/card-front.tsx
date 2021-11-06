import React from "react";
import s from "../card.module.css";
import {PropsCard} from "../../../containers/main/main";

const CardFront = (props: PropsCard) => {

    const handleCardFrontClick = () => {
        props.changeIsChecked();
    }

    return (
        <div className={s["card-front"]} onClick={handleCardFrontClick}>
            <p className={s["card-pronoun"]}>{props.card.pronoun}</p>
            <div className={s["card-verb-container"]}/>
            <p className={s["card-conjugation"]}>{props.card.tense}</p>
        </div>
    );
};

export default CardFront;