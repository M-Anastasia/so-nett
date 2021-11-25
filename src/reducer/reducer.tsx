import TestData from "../data/test_data";
import {AnyAction, combineReducers} from "redux";

const testDataReducer = function (state = TestData, action: AnyAction) {
    switch (action.type) {
        case "SET_TEST_DATA":
            return action.testData;
        default:
            return state;
    }
}

const cardsReadReducer = function (state = 0, action: AnyAction) {
    switch (action.type) {
        case "INC_CARDS_READ":
            return state + 1;
        case "BACK_TO_START":
            return 0;
        default:
            return state;
    }
}

const cardReducer = function (state = TestData[0], action: AnyAction) {
    switch (action.type) {
        case "GET_NEXT_DATA":
            return action.testData[action.index];
        default:
            return state;
    }
};

const cardBackReducer = function (state = TestData[0], action: AnyAction) {
    switch (action.type) {
        case "SET_CARD_BACK_DATA":
            return action.testData[action.index];
        default:
            return state;
    }
};

const inputCheckedReducer = function (state = false, action: AnyAction) {
    switch (action.type) {
        case "CHANGE_IS_CHECKED":
            return !state;
        default:
            return state;
    }
}

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
    testDataReducer,
    cardsReadReducer,
    cardReducer,
    fontSizeReducer,
    cardBackReducer,
    inputCheckedReducer
})