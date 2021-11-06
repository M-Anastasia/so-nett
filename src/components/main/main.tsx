import s from "./main.module.css";
import Card from "../card/card";
import React from "react";
import {PropsFromRedux} from "../../containers/main/main";

const Main = ({data, setData}: PropsFromRedux) => {
    return (
        <div className={s["trainer"]}>
            <div className={s["trainer-word-container"]}>
                <p className={s["trainer-word"]}>{data.verb}</p>
                <p className={s["trainer-word-translation"]}>{data.translation}</p>
            </div>
            <div className={s["trainer-card"]}>
                <Card tense={data.tense} pronoun={data.pronoun} verbConjugation={data.verbConjugation}
                      setData={setData}/>
            </div>
        </div>
    )
}

export default Main;