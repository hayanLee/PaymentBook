import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from '../../components/Calendar';
import Form from '../../components/Form';
import PaymentsList from '../../components/PaymentsList';

const StWrapContainer = styled.div`
    /* background-color: pink; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const initMonth = Number(localStorage.getItem('selectedMonth')) || 1;
export default function HomePage() {
    const [selectedMonth, setSelectedMonth] = useState(initMonth);
    useEffect(() => {
        localStorage.setItem('selectedMonth', selectedMonth);
    }, [selectedMonth]);
    return (
        <StWrapContainer>
            <Form />
            <Calendar
                months={MONTHS}
                selectedMonth={selectedMonth}
                onSelectMonth={setSelectedMonth}
            />
            <PaymentsList />
        </StWrapContainer>
    );
}
