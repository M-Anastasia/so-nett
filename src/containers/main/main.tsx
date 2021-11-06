import {connect, ConnectedProps} from "react-redux";
import MainComponent from "../../components/main/main";
import {AppDispatch, IReducer} from "../../interfaces/interfaces";

const mapStateToProps = (state: IReducer) => {
    return {
        card: state.cardReducer,
        cardBack: state.cardBackReducer,
        isCardChecked: state.inputCheckedReducer
    };
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setCardData: (index: number) => dispatch({type: 'GET_NEXT_DATA', index: index}),
        setCardBackData: (index: number) => dispatch({type: 'SET_CARD_BACK_DATA', index: index}),
        changeIsChecked: () => dispatch({type: 'CHANGE_IS_CHECKED'})
    }
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsCard = ConnectedProps<typeof connector>
export const Main = connector(MainComponent);