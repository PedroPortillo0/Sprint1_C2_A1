import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import Login2 from '../component/organism/GroupInputs';


function App() {
    return ( 
        <BrowserRouter>
            <Routes>
            {/* <Route path="/" element={<Landing/>} /> */}
                <Route path="/login" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/login2" element={<Login2/>} />

                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;