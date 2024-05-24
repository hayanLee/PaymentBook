import { configureStore } from '@reduxjs/toolkit';
import monthReducer from './reducers/month.reducer';
import paymentReducer from './reducers/payment.reducer';

// 전역 상태 저장소
const store = configureStore({
    reducer: { month: monthReducer, payment: paymentReducer },
});
export default store;
