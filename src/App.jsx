import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import store from './redux/store';
import router from './routes/router';
function App() {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </>
    );
}

export default App;
