import { useContext } from 'react';
import styled from 'styled-components';
import Calendar from '../../components/Calendar';
import Form from '../../components/Form';
import PaymentsList from '../../components/PaymentsList';
import { MonthContext } from '../../context/MonthContext';
import { PaymentContext } from '../../context/PaymentContext';

const StWrapContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function HomePage() {
    const { paymentDatas, onAddPaymentData } = useContext(PaymentContext);
    const { selectedMonth } = useContext(MonthContext);

    const filteredPaymentDatas = paymentDatas.filter((data) => {
        const filteredMonth = new Date(data.date).getMonth() + 1;
        return selectedMonth === filteredMonth;
    });

    return (
        <StWrapContainer>
            <Form onSubmit={onAddPaymentData} />
            <Calendar months={MONTHS} />
            <PaymentsList filteredPaymentDatas={filteredPaymentDatas} />
        </StWrapContainer>
    );
}
