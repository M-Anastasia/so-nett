import TestData from "../data/test_data";
import {AnyAction, combineReducers} from "redux";

const cardReducer = function (state = TestData[0], action: AnyAction) {
    switch (action.type) {
        case "GET_NEXT_DATA":
            return TestData[Math.floor(Math.random() * TestData.length)];
        default:
            return state;
    }
};

const fontSizeReducer = function (state = '', action: AnyAction) {
    switch (action.type) {
        case "BACK_TO_FULL_SIZE":
            return '100%';
        case "SET_FONT_SIZE":
            return `${Math.round((action.refVerbCont.current!.clientWidth / action.refVerb.current!.clientWidth) * 100) - 2}%`;
        default:
            return state;
    }
};

export const reducer = combineReducers({
    cardReducer,
    fontSizeReducer,
})