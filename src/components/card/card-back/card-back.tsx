import React, {useEffect, useRef} from "react";
import s from "../card.module.css";
import {PropsFont} from "../../../containers/card/card-back";
import {PropsCard} from "../../../containers/main/main";
import Tense from "../tense/tense";

const CardBack = (props: PropsCard & PropsFont) => {

    const cardBackRef = useRef<HTMLDivElement>(null);
    const refVerbCont = useRef<HTMLDivElement>(null);
    const refVerb = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        props.backToFullSize();
        props.setFontSize(refVerbCont, refVerb);
    }, [props.cardBack.conjugation]);

    useEffect(() => {
        if (!props.isCardChecked) {
            cardBackRef.current!.style.visibility = 'hidden';
            const nextCardIndex = props.cardsRead;
            props.setCardData(nextCardIndex, props.testData);
            cardBackRef.current!.style.visibility = 'visible';
            setTimeout(() => {
                props.setCardBackData(nextCardIndex, props.testData);
                props.incCardsRead();
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
                   style={{fontSize: props.fontSize}}>{props.cardBack.conjugation}</p>
            </div>
            <Tense tense={props.cardBack.tense}/>
        </div>
    );
}

export default CardBack;