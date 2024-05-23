import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import { MonthContextProvider } from './context/MonthContext';
import { PaymentProvider } from './context/PaymentContext';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import PaymentDetailPage from './pages/PaymentDetailPage';

function App() {
    return (
        <>
            <GlobalStyle />
            <PaymentProvider>
                <BrowserRouter>
                    <Layout>
                        <MonthContextProvider>
                            <Routes>
                                <Route path='/' element={<HomePage />} />
                                <Route
                                    path='/payment/:paymentId'
                                    element={<PaymentDetailPage />}
                                />
                            </Routes>
                        </MonthContextProvider>
                    </Layout>
                </BrowserRouter>
            </PaymentProvider>
        </>
    );
}

export default App;
