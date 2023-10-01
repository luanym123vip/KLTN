import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Nav from "./Nav";
import Nav2 from "./Nav2";
import TrangChu from "./TrangChu";
import {

    Routes,
    Route,

} from "react-router-dom";

const Client = () => {
    return (
        <>
            <Nav />
            <Nav2 />
            {/* <Routes>
                <Route index path='/' element={<TrangChu />} exact></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/todo'></Route>
                <Route path='/about' ></Route>
                <Route path='/user' exact ></Route>
                <Route path='/users/:id'></Route>
            </Routes> */}


            <Routes >
                {/* <Route path="/"> */}
                <Route index path='' element={<TrangChu />} exact></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='todo'></Route>
                <Route path='about' ></Route>
                <Route path='user' exact ></Route>
                <Route path='users/:id'></Route>

                {/* </Route> */}

            </Routes >
            <Footer />
        </>
    )
}
export default Client;