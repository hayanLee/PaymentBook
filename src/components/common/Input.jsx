import styled from 'styled-components';

const StInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;
const StLabel = styled.label`
    color: var(--text);
    margin-bottom: 5px;
`;
const StInput = styled.input`
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;

    &:focus {
        outline: 3px solid var(--point-color);
    }
`;
export default function Input({ label, id, type, value, onChange }) {
    const handleChange = (e) => onChange(e.target.id, e.target.value);
    return (
        <StInputWrapper>
            {label && <StLabel htmlFor={id}>{label}</StLabel>}
            <StInput
                id={id}
                type={type}
                onChange={handleChange}
                min={type === 'number' ? 0 : ''}
            />
        </StInputWrapper>
    );
}
