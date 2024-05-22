import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import PaymentDetailPage from './pages/PaymentDetailPage';

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route
                            path='/payment/:paymentId'
                            element={<PaymentDetailPage />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
