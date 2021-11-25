import {store} from "../store/store";

export interface ITestDataHead {
    verb: string;
    translation: string;
}

export interface ITestDataCard {
    tense: string;
    pronoun: string;
    conjugation: string;
}

export interface IReducer {
    testDataReducer: Array<ITestDataHead & ITestDataCard>;
    cardsReadReducer: number;
    cardReducer: ITestDataHead & ITestDataCard;
    fontSizeReducer: string;
    inputCheckedReducer: boolean;
    cardBackReducer: ITestDataHead & ITestDataCard;
}

export type AppDispatch = typeof store.dispatch