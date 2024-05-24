import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Calendar from '../../components/Calendar';
import Form from '../../components/Form';
import PaymentsList from '../../components/PaymentsList';

const StWrapContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

export default function HomePage() {
    const payments = useSelector((state) => state.payment.payments);
    const selectedMonth = useSelector((state) => state.month.selectedMonth);

    const filteredPayments = payments.filter((data) => {
        const filteredMonth = new Date(data.date).getMonth() + 1;
        return selectedMonth === filteredMonth;
    });

    return (
        <StWrapContainer>
            <Form />
            <Calendar />
            <PaymentsList filteredPayments={filteredPayments} />
        </StWrapContainer>
    );
}
