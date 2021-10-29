import React from 'react';
import './styles.module.css';
import s from "./styles.module.css";
import Card from "./components/card/card";

function App() {
    return (
        <div className={s["trainer"]}>
            <div className={s["trainer-word-container"]}>
                <p className={s["trainer-word"]}>sein</p>
                <p className={s["trainer-word-translation"]}>to be</p>
            </div>
            <div className={s["trainer-card"]}>
                {/*<div/>*/}
                {/*<div/>*/}
                <Card />
                {/*<div/>*/}
            </div>
        </div>
    );
}

export default App;
