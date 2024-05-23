// reducer = 작업 명세서에 따라 작업을 처리하는 공장
import { SET_SELECTED_MONTH } from '../action';
const initMonth = Number(localStorage.getItem('selectedMonth')) || 1;
const initState = { selectedMonth: initMonth };

function monthReducer(prevState = initState, action) {
    switch (action.type) {
        case SET_SELECTED_MONTH:
            // 작업이 반영된 상태를 반환
            // localStorage.setItem('selectedMonth', selectedMonth); -> dispatch 후 실행
            return { selectedMonth: action.payload }; // action creator에 의해 action 객체 반환하므로
        default:
            return prevState;
    }
}
export default monthReducer;
