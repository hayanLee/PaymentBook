import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
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
export default function Calendar({ months }) {
    return (
        <StDiv>
            {months.map((month) => {
                const id = uuidv4();
                return <ClickableMonth key={id} month={month} />;
            })}
        </StDiv>
    );
}
