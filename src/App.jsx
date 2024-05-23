import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import PaymentDetailPage from './pages/PaymentDetailPage';

function App() {
    const [paymentDatas, setPaymentDatas] = useState([
        {
            id: '25600f72-56b4-41a7-a9c2-47358580e2f8',
            date: '2024-01-05',
            category: '식비',
            amount: 100000,
            content: '세광양대창',
        },
        {
            id: '25600f72-53b4-4187-a9c2-47358580e2f8',
            date: '2024-01-10',
            category: '도서',
            amount: 40500,
            content: '모던 자바스크립트',
        },
        {
            id: '1',
            date: '2024-02-02',
            category: '식비',
            amount: 50000,
            content: '회식',
        },
        {
            id: '25600f72-99b4-41z7-e4h6-47312365e2f8',
            date: '2024-02-02',
            category: '간식',
            amount: 500,
            content: '아이스크림',
        },
        {
            id: '25143e72-16e2-22a7-a9c2-47358580e2f8',
            date: '2024-02-02',
            category: '여행',
            amount: 1055000,
            content: '일본여행',
        },
        {
            id: '25600f72-97p2-14a7-a9c2-47363950e2t8',
            date: '2024-04-02',
            category: '미용',
            amount: 155000,
            content:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores fuga quam soluta nesciunt molestias modi ratione assumenda, sunt alias tenetur nisi officia delectus voluptate cum eligendi laborum, obcaecati facere explicabo!',
        },
        {
            id: '24312f70-97q2-14a7-a9c2-47132950e2t8',
            date: '2024-02-02',
            category: '도서',
            amount: 75000,
            content:
                '자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발',
        },
    ]);
    const handleChangePaymnetData = (changedData) => {
        setPaymentDatas((prev) =>
            prev.map((data) => (data.id === changedData.id ? changedData : data))
        );
    };
    const handleDeletedPaymnetData = (deletedData) => {
        setPaymentDatas((prev) => prev.filter((data) => data.id !== deletedData.id));
    };
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route
                            path='/'
                            element={<HomePage paymentDatas={paymentDatas} />}
                        />
                        <Route
                            path='/payment/:paymentId'
                            element={
                                <PaymentDetailPage
                                    paymentDatas={paymentDatas}
                                    onChangePaymentData={handleChangePaymnetData}
                                    onDeletePaymentData={handleDeletedPaymnetData}
                                />
                            }
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
