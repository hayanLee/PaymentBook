import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import PaymentDetailPage from '../pages/PaymentDetailPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/payment/:paymentId',
                element: <PaymentDetailPage />,
            },
        ],
    },
]);

export default router;
