import React, {RefObject} from 'react';
import s from './card.module.css';
import CardFront from "./card-front/card-front";
import {CardBack} from "../../containers/card/card-back";
import {PropsCard} from "../../containers/main/main";

const Card = (props: PropsCard & { checkBoxRef: RefObject<HTMLInputElement> }) => {

    return (
        <label>
            <input type="checkbox" ref={props.checkBoxRef}/>
            <div className={s["card"]}>
                <CardFront {...props}/>
                <CardBack {...props}/>
            </div>
        </label>
    )
}

export default Card;