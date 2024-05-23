import styled from 'styled-components';
import PaymentCard from '../PaymentCard';

const StListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    border-radius: 10px;
    background-color: var(--second-color);
    overflow-y: auto;
`;
const StUlist = styled.ul`
    overflow-x: hidden;
    overflow-y: auto;
`;

// id, date,category,amount,content
export default function PaymentsList({ paymentDatas }) {
    return (
        <StListWrapper>
            <StUlist>
                {paymentDatas.map((payment) => (
                    <PaymentCard key={payment.id} payment={payment} />
                ))}
            </StUlist>
        </StListWrapper>
    );
}
