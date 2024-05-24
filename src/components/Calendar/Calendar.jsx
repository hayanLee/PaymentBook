import styled from 'styled-components';
import ClickableMonth from '../ClickableMonth';

const StDiv = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(6, minmax(20px, 1fr));
    grid-template-rows: repeat(2, auto);
    gap: 15px;
    padding: 0 10px;
    margin: 10px 0;
`;
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export default function Calendar() {
    return (
        <StDiv>
            {MONTHS.map((month) => {
                return <ClickableMonth key={month} month={month} />;
            })}
        </StDiv>
    );
}

// Array(12).fill(0).map((_,i)=>i+1)