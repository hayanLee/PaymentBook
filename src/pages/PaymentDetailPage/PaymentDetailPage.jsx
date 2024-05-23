import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
// paymentDatas 배열 자체를 넘김
// onChangePaymentData, onDeletePaymentData -> 저장 시 새로운 데이터로 갱신
export default function PaymentDetailPage({
    paymentDatas,
    onChangePaymentData,
    onDeletePaymentData,
}) {
    const { paymentId } = useParams();
    const navigate = useNavigate(); // 뒤로가기
    const [isFormValid, setIsFromValid] = useState(true);

    const targetPayment = paymentDatas.find((data) => data.id === paymentId); // 대상
    // 변경된 payment 저장
    const [modifiedPayment, setModifiedPayment] = useState(
        targetPayment
            ? {
                  id: targetPayment.id,
                  date: targetPayment.date,
                  category: targetPayment.category,
                  amount: targetPayment.amount,
                  content: targetPayment.content,
              }
            : {}
    );
    const handleChange = (id, value) => {
        setModifiedPayment((prev) => {
            const newModifiedPayment = { ...prev, [id]: value };
            const isValid =
                !!newModifiedPayment.date &&
                !!newModifiedPayment.category &&
                !!newModifiedPayment.amount &&
                !!newModifiedPayment.content;
            setIsFromValid(isValid);
            return newModifiedPayment;
        });
    };
    const handleSave = () => {
        if (isFormValid) {
            onChangePaymentData, onChangePaymentData(modifiedPayment);
            navigate(-1);
        } else console.log('빈칸 있음');
    };
    const handleDelete = () => {
        onDeletePaymentData(targetPayment);
        navigate(-1);
    };
    const handleBack = () => {
        navigate(-1);
    };
    return (
        <StWrapContainer>
            <Input
                label='날짜'
                id='date'
                type='date'
                value={modifiedPayment.date}
                onChange={handleChange}
            />
            <Input
                label='분류'
                id='category'
                type='text'
                value={modifiedPayment.category}
                onChange={handleChange}
            />
            <Input
                label='금액'
                id='amount'
                type='number'
                value={modifiedPayment.amount}
                onChange={handleChange}
            />
            <Input
                label='내용'
                id='content'
                type='text'
                value={modifiedPayment.content}
                onChange={handleChange}
            />

            <StButtons>
                <Button value='수정' onClick={handleSave} />
                <Button value='삭제' onClick={handleDelete} />
                <Button value='뒤로 가기' onClick={handleBack} />
            </StButtons>
        </StWrapContainer>
    );
}
