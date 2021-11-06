import {connect, ConnectedProps} from "react-redux";
import CardBackComponent from "../../components/card/card-back/card-back";
import {RefObject} from "react";
import {AppDispatch, IReducer} from "../../interfaces/interfaces";

const mapStateToProps = (state: IReducer) => {
    return {
        fontSize: state.fontSizeReducer
    };
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setFontSize: (refVerbCont: RefObject<HTMLDivElement>, refVerb: RefObject<HTMLParagraphElement>) => dispatch({
            type: 'SET_FONT_SIZE',
            refVerbCont: refVerbCont,
            refVerb: refVerb
        }),
        backToFullSize: () => dispatch({type: 'BACK_TO_FULL_SIZE'})
    }
};
const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>
export const CardBack = connector(CardBackComponent);