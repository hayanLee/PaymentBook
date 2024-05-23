import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const StWrapContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
`;
const StButtons = styled.div`
    display: flex;
    gap: 15px;
`;
export default function PaymentDetailPage({ paymentDatas, onChangePaymentDatas }) {
    const handleChange = (e) => {
        console.log(e);
    };
    const { paymentId } = useParams();
    const selectedPayment = paymentDatas.find((data) => data.id === paymentId);
    return (
        <StWrapContainer>
            <Input
                label='날짜'
                id='date'
                type='date'
                value={selectedPayment.date}
                onChange={handleChange}
            />
            <Input
                label='분류'
                id='category'
                type='text'
                value={selectedPayment.category}
                onChange={handleChange}
            />
            <Input
                label='금액'
                id='amount'
                type='number'
                value={selectedPayment.amount}
                onChange={handleChange}
            />
            <Input
                label='내용'
                id='content'
                type='text'
                value={selectedPayment.content}
                onChange={handleChange}
            />

            <StButtons>
                <Button value='수정' />
                <Button value='삭제' />
                <Button value='뒤로 가기' />
            </StButtons>
        </StWrapContainer>
    );
}
