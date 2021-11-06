import {connect, ConnectedProps} from "react-redux";
import MainComponent from "../../components/main/main";
import {AppDispatch, IReducer} from "../../interfaces/interfaces";

const mapStateToProps = (state: IReducer) => {
    return {
        data: state.cardReducer,
    };
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setData: () => dispatch({type: 'GET_NEXT_DATA'}),
    }
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>
export const Main = connector(MainComponent);