import { createContext, useState } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [payments, setPayments] = useState([
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
        {
            id: '25346g71-27b6-12c8-b3a7-4725845e2f8',
            date: '2024-03-05',
            category: '의류',
            amount: 85000,
            content: '스니커즈 구매',
        },
        {
            id: '25120d81-11e5-42c3-a8f9-4725874e2f8',
            date: '2024-03-10',
            category: '식료품',
            amount: 30000,
            content: '마트 장보기',
        },
        {
            id: '26138f32-97q8-14a7-a9c2-47132950e2t8',
            date: '2024-03-15',
            category: '문화',
            amount: 20000,
            content: '미술관 입장료',
        },
        {
            id: '25600f72-99b4-41z7-e4h6-47sss31gfsdg8888e2f8',
            date: '2024-03-20',
            category: '여행',
            amount: 220000,
            content: '휴가지 예약',
        },
        {
            id: '25891h72-19a4-41z7-e4h6-47sss31gfsdg2365e2f8',
            date: '2024-04-02',
            category: '의료',
            amount: 70000,
            content: '병원 진료비',
        },
        {
            id: '25143e72-16e2-22a7-a9c2-47358dsdse2f8',
            date: '2024-04-10',
            category: '가전',
            amount: 1500000,
            content: '스마트폰 구매',
        },
        {
            id: '25329f23-18e6-42c5-a9d2-4725874e2f8',
            date: '2024-04-15',
            category: '교통',
            amount: 40000,
            content: '대중교통 이용',
        },
    ]);
    const handleAddPaymentData = (newData) => {
        setPayments([...payments, newData]);
    };

    const handleChangePaymentData = (changedData) => {
        setPayments((prev) =>
            prev.map((data) => (data.id === changedData.id ? changedData : data))
        );
    };
    const handleDeletedPaymenttData = (deletedData) => {
        setPayments((prev) => prev.filter((data) => data.id !== deletedData.id));
    };
    return (
        <PaymentContext.Provider
            value={{
                payments,
                onAddPaymentData: handleAddPaymentData,
                onChangePaymentData: handleChangePaymentData,
                onDeletePaymentData: handleDeletedPaymenttData,
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
};
