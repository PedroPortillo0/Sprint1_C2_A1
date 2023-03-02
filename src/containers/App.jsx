import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';


function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Landing/>} /> */}
                <Route path="/login" element={<Login/>} />

                
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter> 
    );
}

export default App;