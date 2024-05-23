import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import { PaymentProvider } from './context/PaymentContext';
import store from './redux/store';
import router from './routes/router';
function App() {
    return (
        <>
            <GlobalStyle />
            <PaymentProvider>
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </PaymentProvider>
        </>
    );
}

export default App;
