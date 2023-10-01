import "./Nganh.scss"
import { Link } from "react-router-dom";
import TableNganh from "./TableNganh";


const Nganh = () => {
    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>NGÀNH</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Ngành</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/admin/nganhhoc/new"} className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Create Data</span>
                    </Link>
                </div>
                <TableNganh />

            </main >
        </>
    )
}
export default Nganh;