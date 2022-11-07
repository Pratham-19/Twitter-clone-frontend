import MainPage from './MainPage/MainPage';
import NotFound from './NotFound';
import SignUp from './SignUp';
import Signin from './Signin';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
const Index = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<MainPage />} />
            {/* <Route path='/app' element={<MainPage />} /> */}
            <Route path='/*' element={<NotFound />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<Signin />} />
        </Routes>
        </BrowserRouter>
    );
}
export default Index;