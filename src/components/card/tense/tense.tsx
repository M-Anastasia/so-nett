import React, {useEffect, useState} from "react";
import s from "../card.module.css";

const Tense = (props: { tense: string }) => {

    const [tenseColor, setTenseColor] = useState("rgba(175, 216, 242, 0.25)");

    useEffect(() => {
        if (props.tense === 'Präsens') {
            setTenseColor("rgba(162, 59, 114, 0.35)")
        } else if (props.tense === 'Präteritum') {
            setTenseColor("rgba(241, 143, 1, 0.35)")
        } else if (props.tense === 'Perfekt') {
            setTenseColor("rgba(199, 62, 29, 0.35)")
        } else if (props.tense === 'Plusquamperfekt') {
            setTenseColor("rgba(97, 11, 78, 0.35)")
        }
    }, [props.tense])

    return (
        <div className={s["card-tens-container"]}>
            <div style={{
                content: '',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                filter: 'blur(4px)',
                zIndex: 0,
                background: tenseColor
            }}/>
            <p className={s["card-conjugation"]}>{props.tense}</p>
        </div>
    )
};

export default Tense;