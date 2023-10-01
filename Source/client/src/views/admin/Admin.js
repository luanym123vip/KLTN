import { Title } from "@mui/icons-material";
import {
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard"
import Tongquan from "./Tongquan/Tongquan";
import { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import "./Admin.scss"
import DkiChuyenNganh from "./DKiChuyenNganh/DKiChuyenNganh";
import SingleDkiChuyenNganh from "./DKiChuyenNganh/ChiTietDKCN/SingleDkiChuyenNganh";
import EditDKCN from "./DKiChuyenNganh/EditDKCN/EditDKCN";
import AddDKCN from "./DKiChuyenNganh/ThemDKCN/AddDKCN";
import GiangVien from "./GiangVien/GiangVien";
import EditGiangVien from "./GiangVien/EditGiangVien/EditGiangVien";
import AddGiangVien from "./GiangVien/ThemGiangVien/AddGiangVien";
import SinhVien from "./SinhVien/SinhVien";
import AddSinhVien from "./SinhVien/ThemSinhVien/AddSinhVien";
import EditSinhVien from "./SinhVien/EditSinhVien/EditSinhVien";
import Nganh from "./Nganh/Nganh";
import EditNganh from "./Nganh/EditNganh/EditNganh";
import AddNganh from "./Nganh/ThemNganh/AddNganh";
import ChuyenNganh from "./ChuyenNganh/ChuyenNganh";
import EditChuyenNganh from "./ChuyenNganh/EditChuyenNganh/EditChuyenNganh";
import AddChuyenNganh from "./ChuyenNganh/ThemChuyenNganh/AddChuyenNganh";
import KhoaLuan from "./KhoaLuan/KhoaLuan";
import SingleKhoaLuan from "./KhoaLuan/ChiTietKhoaLuan/SingleKhoaLuan";
const Admin = () => {

    const [hiddenDB, setHiddenDB] = useState(false);
    const [switchmode, setSwitchmode] = useState(false);
    const changleHidden = () => {
        setHiddenDB(!hiddenDB);
    }
    const changleSwitchMode = () => {
        setSwitchmode(!switchmode);
    }
    return (
        <>
            <div className={switchmode ? "dark" : ""}>
                <Dashboard hiddenDB={hiddenDB} />
                <section id="content">
                    <Nav changleHidden={changleHidden} changleSwitchMode={changleSwitchMode} />
                    <Routes >
                        <Route path="/admin" exact>
                            <Route index element={<Tongquan />}></Route>
                            <Route path='dkichuyennganh'  >
                                <Route index element={<DkiChuyenNganh />}></Route>
                                <Route path="new" element={<AddDKCN />}></Route>
                                <Route path="single/:madkcn" element={<SingleDkiChuyenNganh />}></Route>
                                <Route path="edit/:madkcn" element={<EditDKCN />}></Route>
                            </Route>
                            <Route path='khoaluan'  >
                                <Route index element={<KhoaLuan />}></Route>
                                <Route path="new" element={<AddDKCN />}></Route>
                                <Route path="single/:makl" element={<SingleKhoaLuan />}></Route>
                                <Route path="edit/:madkcn" element={<EditDKCN />}></Route>
                            </Route>
                            <Route path='giangvien'  >
                                <Route index element={<GiangVien />}></Route>
                                <Route path="new" element={<AddGiangVien />} ></Route>
                                <Route path="edit/:magv" element={<EditGiangVien />} ></Route>
                            </Route>
                            <Route path='sinhvien'  >
                                <Route index element={<SinhVien />}></Route>
                                <Route path="new" element={<AddSinhVien />} ></Route>
                                <Route path="edit/:masv" element={<EditSinhVien />} ></Route>
                            </Route>
                            <Route path='nganhhoc'  >
                                <Route index element={<Nganh />}></Route>
                                <Route path="new" element={<AddNganh />} ></Route>
                                <Route path="edit/:manganhhoc" element={<EditNganh />} ></Route>
                            </Route>
                            <Route path='chuyennganh'  >
                                <Route index element={<ChuyenNganh />}></Route>
                                <Route path="new" element={<AddChuyenNganh />} ></Route>
                                <Route path="edit/:machuyennganh" element={<EditChuyenNganh />} ></Route>
                            </Route>
                        </Route>

                    </Routes >
                </section>

            </div >




        </>
    )
}

export default Admin;