import React, {useEffect, useRef} from "react";
import s from "../card.module.css";
import {PropsFont} from "../../../containers/card/card-back";
import TestData from "../../../data/test_data";
import {PropsCard} from "../../../containers/main/main";

const CardBack = (props: PropsCard & PropsFont) => {

    const cardBackRef = useRef<HTMLDivElement>(null);
    const refVerbCont = useRef<HTMLDivElement>(null);
    const refVerb = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        props.backToFullSize();
        props.setFontSize(refVerbCont, refVerb);
    }, [props.cardBack.verbConjugation]);

    useEffect(() => {
        if (!props.isCardChecked) {
            cardBackRef.current!.style.visibility = 'hidden';
            const nextCardIndex = Math.floor(Math.random() * TestData.length);
            props.setCardData(nextCardIndex);
            cardBackRef.current!.style.visibility = 'visible';
            setTimeout(() => {
                props.setCardBackData(nextCardIndex);
            }, 500);
        }
    }, [props.isCardChecked])

    const handleCardBackClick = () => {
        props.changeIsChecked();
    }

    return (
        <div ref={cardBackRef} className={s["card-back"]} onClick={handleCardBackClick}>
            <p className={s["card-pronoun"]}>{props.cardBack.pronoun}</p>
            <div className={s["card-verb-container"]} ref={refVerbCont}>
                <p ref={refVerb} className={s["card-verb"]}
                   style={{fontSize: props.fontSize}}>{props.cardBack.verbConjugation}</p>
            </div>
            <p className={s["card-conjugation"]}>{props.cardBack.tense}</p>
        </div>
    );
}

export default CardBack;