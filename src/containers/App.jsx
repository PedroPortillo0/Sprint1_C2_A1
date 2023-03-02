import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';


function App() {
    return ( 
        <BrowserRouter>
            <Routes>
            {/* <Route path="/" element={<Landing/>} /> */}
                <Route path="/login" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />

                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;