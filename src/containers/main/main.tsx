import {connect, ConnectedProps} from "react-redux";
import MainComponent from "../../components/main/main";
import {AppDispatch, IReducer, ITestDataCard, ITestDataHead} from "../../interfaces/interfaces";

const mapStateToProps = (state: IReducer) => {
    return {
        testData: state.testDataReducer,
        cardsRead: state.cardsReadReducer,
        card: state.cardReducer,
        cardBack: state.cardBackReducer,
        isCardChecked: state.inputCheckedReducer
    };
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setTestData: (testData: Array<ITestDataHead & ITestDataCard>) => dispatch({type: 'SET_TEST_DATA', testData: testData}),
        incCardsRead: () => dispatch({type: 'INC_CARDS_READ'}),
        resetCardsRead: () => dispatch({type: 'BACK_TO_START'}),
        setCardData: (index: number, testData: Array<ITestDataHead & ITestDataCard>) => dispatch({type: 'GET_NEXT_DATA', index: index, testData: testData}),
        setCardBackData: (index: number, testData: Array<ITestDataHead & ITestDataCard>) => dispatch({type: 'SET_CARD_BACK_DATA', index: index, testData: testData}),
        changeIsChecked: () => dispatch({type: 'CHANGE_IS_CHECKED'})
    }
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsCard = ConnectedProps<typeof connector>
export const Main = connector(MainComponent);