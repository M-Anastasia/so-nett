import React, {useEffect, useRef} from "react";
import s from "../card.module.css";
import {ITestDataCard} from "../../../interfaces/interfaces";
import {PropsFromRedux} from "../../../containers/card/card-back";

const CardBack = (props: ITestDataCard & { setData: () => void; } & PropsFromRedux) => {

    const cardBackRef = useRef<HTMLDivElement>(null);
    const refVerbCont = useRef<HTMLDivElement>(null);
    const refVerb = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        props.backToFullSize();
        setTimeout(() => {
            props.setFontSize(refVerbCont, refVerb);
        }, 500);
    }, [props.verbConjugation]);

    const handleCardBackClick = () => {
        cardBackRef.current!.style.visibility = 'hidden';
        setTimeout(() => {
            props.setData();
            cardBackRef.current!.style.visibility = 'visible';
        }, 500);
    }

    return (
        <div ref={cardBackRef} className={s["card-back"]} onClick={handleCardBackClick}>
            <p className={s["card-pronoun"]}>{props.pronoun}</p>
            <div className={s["card-verb-container"]} ref={refVerbCont}>
                <p ref={refVerb} className={s["card-verb"]}
                   style={{fontSize: props.fontSize}}>{props.verbConjugation}</p>
            </div>
            <p className={s["card-conjugation"]}>{props.tense}</p>
        </div>
    );
}

export default CardBack;