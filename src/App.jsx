import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import { MonthContextProvider } from './context/MonthContext';
import { PaymentProvider } from './context/PaymentContext';
import router from './routes/router';
function App() {
    return (
        <>
            <GlobalStyle />
            <PaymentProvider>
                <MonthContextProvider>
                    <RouterProvider router={router} />
                </MonthContextProvider>
            </PaymentProvider>
        </>
    );
}

export default App;
