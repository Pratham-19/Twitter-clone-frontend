import MainPage from './MainPage/MainPage';
import NotFound from './NotFound';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
const Index = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<MainPage />} />
            {/* <Route path='/app' element={<MainPage />} /> */}
            <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );
}
export default Index;