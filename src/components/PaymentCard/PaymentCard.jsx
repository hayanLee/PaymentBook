import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StCard = styled.div`
    width: 95%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: space-between;
    border-radius: 10px;
    background-color: var(--first-color);
    padding: 10px;
    margin: 20px auto;
    color: var(--text);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.53);
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.53);
    cursor: pointer;
    &:hover {
        transition: 0.2s;
        transform: scale(1.02);
    }
`;
const StSpanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    & > :nth-child(2) {
        color: var(--point-text);
        font-weight: bold;
    }
    & > :last-child {
        line-height: 1.5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
const StAmount = styled.span`
    flex-shrink: 0;
    align-self: center;
    font-weight: bold;
    color: var(--point-color);
`;

export default function PaymentCard({ payment }) {
    const navigate = useNavigate();
    const { id, date, category, amount, content } = payment;
    const handleClick = () => {
        navigate(`/payment/${id}`);
    };
    return (
        <StCard>
            <StSpanWrapper onClick={handleClick}>
                <span>{date}</span>
                <span>{content}</span>
            </StSpanWrapper>
            <StAmount>{amount} ₩</StAmount>
        </StCard>
    );
}
