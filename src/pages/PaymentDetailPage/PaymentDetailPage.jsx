import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { changePaymentData, deletePaymentData } from '../../redux/action';

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
export default function PaymentDetailPage() {
    const { paymentId } = useParams();
    const navigate = useNavigate(); // 뒤로가기
    const dispatch = useDispatch();
    const paymentDatas = useSelector((state) => state.payment.paymentDatas);

    const onChangePaymentData = (changedData) => dispatch(changePaymentData(changedData));
    const onDeletePaymentData = (deletedData) => dispatch(deletePaymentData(deletedData));

    const [isFormValid, setIsFromValid] = useState(true);

    const targetPayment = paymentDatas.find((data) => data.id === paymentId); // 대상
    // 변경된 payment 저장
    const { id, date, category, amount, content } = targetPayment || {};
    const [modifiedPayment, setModifiedPayment] = useState({
        id,
        date,
        category,
        amount,
        content,
    });
    const handleChange = (id, value) => {
        // 이부분을 useRef
        //ref를 값을 저장하는 용도로 사용
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
            onChangePaymentData(modifiedPayment);
            navigate(-1);
        } else if (!modifiedPayment.date) {
            alert('날짜를 입력하세요');
        } else if (!modifiedPayment.category) {
            alert('분류를 입력하세요');
        } else if (!modifiedPayment.amount) {
            alert('금액에 숫자를 입력해주세요');
        } else if (!modifiedPayment.content) {
            alert('내용을 입력하세요');
        } else {
            alert('다시 입력해주세요');
        }
    };
    const handleDelete = () => {
        if (confirm('해당 지출 항목을 삭제하시겠습니까?')) {
            onDeletePaymentData(targetPayment);
            navigate(-1);
        }
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
