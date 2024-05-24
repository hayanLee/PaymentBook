// action = 작업 명세서
export const SET_SELECTED_MONTH = 'SET_SELECTED_MONTH'; //작업 이름
//action Creator
//action 객체를 반환하는 함수
export const setSelectedMonth = (month) => ({
    type: SET_SELECTED_MONTH,
    payload: month,
});

// PaymentContext
export const ADD_PAYMENT_DATA = 'ADD_PAYMENT_DATA';
export const CHANGE_PAYMENT_DATA = 'CHANGE_PAYMENT_DATA';
export const DELETE_PAYMENT_DATA = 'DELETE_PAYMENT_DATA';

export const addPaymentData = (newData) => ({
    type: ADD_PAYMENT_DATA,
    payload: newData,
});

export const changePaymentData = (changedData) => ({
    type: CHANGE_PAYMENT_DATA,
    payload: changedData,
});

export const deletePaymentData = (deletedData) => ({
    type: DELETE_PAYMENT_DATA,
    payload: deletedData,
});
