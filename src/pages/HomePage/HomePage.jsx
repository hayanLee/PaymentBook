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

export default function HomePage() {
    return (
        <StWrapContainer>
            <Form />
            <Calendar />
            <PaymentsList />
        </StWrapContainer>
    );
}
