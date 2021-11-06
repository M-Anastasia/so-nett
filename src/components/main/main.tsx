import s from "./main.module.css";
import Card from "../card/card";
import React, {useRef} from "react";
import {PropsCard} from "../../containers/main/main";

const Main = (props: PropsCard) => {

    const checkBoxRef = useRef<HTMLInputElement>(null);

    const handleSpacePress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Space') {
            checkBoxRef.current!.checked = !checkBoxRef.current!.checked;
            props.changeIsChecked();
        }
    }

    return (
        <div onKeyPress={handleSpacePress} tabIndex={0} className={s["trainer"]}>
            <div className={s["trainer-word-container"]}>
                <p className={s["trainer-word"]}>{props.card.verb}</p>
                <p className={s["trainer-word-translation"]}>{props.card.translation}</p>
            </div>
            <div className={s["trainer-card"]}>
                <Card {...props} checkBoxRef={checkBoxRef}/>
            </div>
        </div>
    )
}

export default Main;