
import "./SinhVien.scss"
import { Link } from "react-router-dom";
import TableSinhVien from "./TableSinhVien";
const SinhVien = () => {
    return (

        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>SINH VIÊN</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Sinh viên</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/admin/sinhvien/new"} className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Create Data</span>
                    </Link>
                </div>

                {/* <MantineReactTable table={table} />; */}


                <TableSinhVien />

            </main >
        </>
    )
}
export default SinhVien;