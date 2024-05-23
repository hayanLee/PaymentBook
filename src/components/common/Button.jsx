import styled from 'styled-components';

const StButton = styled.button`
    background-color: var(--point-color);
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
        transition: 0.2s;
    }
`;
export default function Button({ value, onClick }) {
    return <StButton onClick={onClick}>{value}</StButton>;
}
