import styled from 'styled-components';

const StButton = styled.button`
    width: 100%;
    background-color: ${(props) =>
        props.$isSelected ? 'var(--point-color)' : 'var(--second-color)'};
    border: none;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
        background-color: var(--point-color);
        transition: 0.2s;
        transform: scale(1.05);
    }
`;

export default function ClickableMonth({ month, isSelected, onClick }) {
    const handleClick = () => onClick(month);
    return (
        <StButton onClick={handleClick} $isSelected={isSelected}>
            {month} 월
        </StButton>
    );
}
