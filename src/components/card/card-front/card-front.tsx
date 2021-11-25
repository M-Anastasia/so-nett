import React from "react";
import s from "../card.module.css";
import {PropsCard} from "../../../containers/main/main";
import Tense from "../tense/tense";

const CardFront = (props: PropsCard) => {

    const handleCardFrontClick = () => {
        props.changeIsChecked();
    }

    return (
        <div className={s["card-front"]} onClick={handleCardFrontClick}>
            <p className={s["card-pronoun"]}>{props.card.pronoun}</p>
            <div className={s["card-verb-container"]}/>
            <Tense tense={props.card.tense}/>
        </div>
    );
};

export default CardFront;