import s from "./main.module.css";
import Card from "../card/card";
import React, {useEffect, useRef} from "react";
import {PropsCard} from "../../containers/main/main";
import {getConjugations} from "../../api/fetcher";
import {useTranslation} from 'react-i18next';

const Main = (props: PropsCard) => {

    const {t} = useTranslation();

    const checkBoxRef = useRef<HTMLInputElement>(null);

    const handleSpacePress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Space') {
            checkBoxRef.current!.checked = !checkBoxRef.current!.checked;
            props.changeIsChecked();
        }
    }

    useEffect(() => {
        getConjugations().then((res) => {
            console.log(res);
            props.setTestData(res);
            props.resetCardsRead();
        })
    }, [props.cardsRead === props.testData.length])

    return (
        <div onKeyPress={handleSpacePress} tabIndex={0} className={s["trainer"]}>
            <div className={s["trainer-word-container"]}>
                <p className={s["trainer-word"]}>{props.card.verb}</p>
                <p className={s["trainer-word-translation"]}>{t(props.card.verb)}</p>
            </div>
            <div className={s["trainer-card"]}>
                <Card {...props} checkBoxRef={checkBoxRef}/>
            </div>
        </div>
    )
}

export default Main;