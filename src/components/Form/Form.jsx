import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Button from '../common/Button';
import Input from '../common/Input';

const StForm = styled.form`
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr)) auto;
    gap: 20px;
    padding: 5px 15px;
    justify-content: space-around;
    align-items: center;
    background-color: var(--light-color);
    border-radius: 10px;
`;
export default function Form({ onSubmit }) {
    const [isFormValid, setIsFromValid] = useState(false);
    const [payment, setPayment] = useState({
        id: uuidv4(),
        date: '',
        category: '',
        amount: 0,
        content: '',
    });
    const handleChange = (id, value) => {
        setPayment((prev) => {
            const newCost = { ...prev, [id]: value };
            const isValid =
                !!newCost.date &&
                !!newCost.category &&
                !!newCost.amount &&
                !!newCost.content;
            setIsFromValid(isValid);
            return newCost;
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) onSubmit(payment);
    };
    return (
        <StForm onSubmit={handleSubmit}>
            <Input
                label='날짜'
                id='date'
                type='date'
                value={payment.date}
                onChange={handleChange}
            />
            <Input
                label='분류'
                id='category'
                type='text'
                value={payment.category}
                onChange={handleChange}
            />
            <Input
                label='금액'
                id='amount'
                type='number'
                value={payment.amount}
                onChange={handleChange}
            />
            <Input
                label='내용'
                id='content'
                type='text'
                value={payment.content}
                onChange={handleChange}
            />
            <Button value='SAVE' />
        </StForm>
    );
}
