import HeaderMain from "../HeaderMain/HeaderMain";
import "./DKiChuyenNganh.scss"
import "./TableDKiChuyenNganh.scss"
import { Link } from "react-router-dom";
import TableDKiChuyenNganh from "./TableDKiChuyenNganh";


const DKiChuyenNganh = () => {



    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>ĐĂNG KÝ CHUYÊN NGÀNH</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Đăng ký chuyên ngành</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/admin/dkichuyennganh/new"} className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Create Data</span>
                    </Link>
                </div>

                {/* <MantineReactTable table={table} />; */}


                <TableDKiChuyenNganh />

            </main >
        </>
    )
}
export default DKiChuyenNganh;