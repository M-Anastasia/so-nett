import {store} from "../store/store";

export interface ITestDataHead {
    verb: string;
    translation: string;
}

export interface ITestDataCard {
    tense: string;
    pronoun: string;
    verbConjugation: string;
}

export interface IReducer {
    cardReducer: ITestDataHead & ITestDataCard;
    fontSizeReducer: string;
    inputCheckedReducer: boolean;
    cardBackReducer: ITestDataHead & ITestDataCard;
}

export type AppDispatch = typeof store.dispatch