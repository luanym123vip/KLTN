import '../../css/style.css'
import { NavLink } from "react-router-dom";
const Nav2 = () => {
    return (
        <section className="ftco-section">
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    {/* <a className="navbar-brand" href="index.html">TRANG CHỦ</a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
                    </button>

                    <div style={{ justifyContent: 'space-between' }} className="collapse navbar-collapse " id="ftco-nav">
                        <ul className="navbar-nav ">

                            {/* <li className="nav-item cta" activeClassName='active'> */}
                            <NavLink to="/" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'} exact="true">
                                TRANG CHỦ
                            </NavLink>
                            {/* </li> */}

                            <li className="nav-item dropdown dropdown1">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown04">
                                    <a className="dropdown-item" href="#">Page 1</a>
                                    <a className="dropdown-item" href="#">Page 2</a>
                                    <a className="dropdown-item" href="#">Page 3</a>
                                    <a className="dropdown-item" href="#">Page 4</a>
                                </div>
                            </li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'}>
                                ABOUT
                            </NavLink>

                            <NavLink to="/menu" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'}>
                                MENU
                            </NavLink>
                            <NavLink to="/blog" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'}>
                                BLOG
                            </NavLink>
                            <NavLink to="/contract" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'}>
                                CONTRACT
                            </NavLink>
                            <NavLink to="/book" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'}>
                                BOOK A TABLE
                            </NavLink>


                            {/* <li className="nav-item cta"><a href="#" className="nav-link">Menu</a></li>
                                <li className="nav-item cta"><a href="#" className="nav-link">Blog</a></li>
                                <li className="nav-item cta"><a href="#" className="nav-link">Contact</a></li>
                                <li className="nav-item cta"><a href="#" className="nav-link">Book a table</a></li> */}

                        </ul>
                        <NavLink to="/login">
                            <button type="button" className="btn btn-secondary btn-lg">ĐĂNG NHẬP</button>
                        </NavLink>




                    </div>
                </div>
            </nav>
        </section>





    )
}
export default Nav2;