import { createContext, useEffect, useState } from 'react';

export const MonthContext = createContext();

const initMonth = Number(localStorage.getItem('selectedMonth')) || 1;
export const MonthContextProvider = ({ children }) => {
    const [selectedMonth, setSelectedMonth] = useState(initMonth);
    useEffect(() => {
        localStorage.setItem('selectedMonth', selectedMonth);
    }, [selectedMonth]);
    return (
        <MonthContext.Provider value={{ selectedMonth, onSelectMonth: setSelectedMonth }}>
            {children}
        </MonthContext.Provider>
    );
};
