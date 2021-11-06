import React from 'react';
import s from './card.module.css';
import {ITestDataCard} from "../../interfaces/interfaces";
import CardFront from "./card-front/card-front";
import {CardBack} from "../../containers/card/card-back";

const Card = (props: ITestDataCard & { setData: () => void; }) => {

    return (
        <label>
            <input type="checkbox"/>
            <div className={s["card"]}>
                <CardFront tense={props.tense} pronoun={props.pronoun} verbConjugation={props.verbConjugation}/>
                <CardBack tense={props.tense} pronoun={props.pronoun} verbConjugation={props.verbConjugation}
                          setData={props.setData}
                />
            </div>
        </label>
    )
}

export default Card;