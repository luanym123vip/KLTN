import HeaderMain from "../HeaderMain/HeaderMain";
import "./KhoaLuan.scss"
import "./TableKhoaLuan"
import { Link } from "react-router-dom";
import TableKhoaLuan from "./TableKhoaLuan";


const KhoaLuan = () => {



    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>KHÓA LUẬN</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Khóa luận</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/admin/dkichuyennganh/new"} className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Create Data</span>
                    </Link>
                </div>

                {/* <MantineReactTable table={table} />; */}


                <TableKhoaLuan />

            </main >
        </>
    )
}
export default KhoaLuan;