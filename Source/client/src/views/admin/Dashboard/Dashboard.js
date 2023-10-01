import { useEffect, useState } from "react";
import "./Dashboard.scss"
import logo from "./logo.png"
import { NavLink } from "react-router-dom";
const Dashboard = (props) => {

    const { hiddenDB } = props;
    // const [hiddenDB2, setHiddenDB2] = useState(true)

    // useEffect(() => {
    //     // if (hiddenDB2 != hiddenDB) {
    //     //     setHiddenDB2(!hiddenDB2)

    //     // }
    // }, [hiddenDB])

    const [catalog, setCatalog] = useState([

        { id: '1', title: 'Dashboard', img: 'bx bxs-dashboard', link: '' },
        { id: '2', title: 'Đăng ký chuyên ngành', img: 'bx bxs-shopping-bag-alt', link: 'dkichuyennganh' },
        { id: '3', title: 'Khóa luận', img: 'bx bxs-shopping-bag-alt', link: 'khoaluan' },
        { id: '4', title: 'Thực tập', img: 'bx bxs-doughnut-chart', link: 'thuctap' },
        { id: '5', title: 'Tốt nghiệp', img: 'bx bxs-message-dots', link: 'totnghiep' },
        { id: '6', title: 'Cảnh báo', img: 'bx bxs-dashboard', link: 'canhbaohoctap' },
        { id: '7', title: 'Giảng viên', img: 'bx bxs-dashboard', link: 'giangvien' },
        { id: '8', title: 'Sinh viên', img: 'bx bxs-dashboard', link: 'sinhvien' },
        { id: '9', title: 'Ngành', img: 'bx bxs-dashboard', link: 'nganhhoc' },
        { id: '10', title: 'Chuyên ngành', img: 'bx bxs-dashboard', link: 'chuyennganh' },
        { id: '11', title: 'Tài khoản', img: 'bx bxs-dashboard', link: 'taikhoan' },
        { id: '12', title: 'Chức năng', img: 'bx bxs-dashboard', link: 'chucnang' },
        { id: '13', title: 'ChatBox', img: 'bx bxs-dashboard', link: 'chat' },

    ]);

    return (

        < section id="sidebar" className={hiddenDB ? "hide" : ""} >
            <a href="#" className="brand">
                <img src={logo} />
                {/* <i className='bx bxs-school'></i>
                    <span className="text">ĐẠI HỌC SÀI GÒN</span> */}
            </a>
            <ul className="side-menu top">

                {catalog && catalog.length > 0 && catalog.map((item, index) => {

                    return (

                        <li key={item.id} >
                            <NavLink to={"/admin/" + item.link} className={({ isActive }) => isActive ? "active" : ''}>
                                <i className={item.img}></i>
                                <span className="text">{item.title}</span>
                            </NavLink>
                        </li>

                    )
                })}



            </ul>



            <ul className="side-menu">
                <li>

                    <NavLink to="/dashboard5" className={({ isActive }) => isActive ? "active" : ''}>
                        <i className='bx bxs-cog' ></i>
                        <span className="text">Settings</span>
                    </NavLink>


                </li>
                <li>
                    <a href="#" className="logout">
                        <NavLink to="/dashboard6" className={({ isActive }) => isActive ? "active" : ''}>
                            <i className='bx bxs-log-out-circle' ></i>
                            <span className="text">Logout</span>
                        </NavLink>

                    </a>
                </li>
            </ul>
        </ section >


    )

}
export default Dashboard;