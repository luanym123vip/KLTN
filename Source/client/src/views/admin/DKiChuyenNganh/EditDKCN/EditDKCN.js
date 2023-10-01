import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./EditDKCN.scss"
const EditDKCN = () => {
    const dulieutest = {
        madkcn: 'CN1',
        tendkcn: 'Đăng ký chuyên ngành đợt 1',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '2022-01-02',
        tgkt: '2022-07-25',
        trangthai: 1,
    };
    const chuyennganh = useParams();
    const [sl_httt, SetSl_httt] = useState(70)
    const [sl_khmt, SetSl_khmt] = useState(70)
    const [sl_ktpm, SetSl_ktpm] = useState(70)
    const [sl_mmt, SetSl_mmt] = useState(70)

    const [tenDKCN, SetTenDKCN] = useState(dulieutest.tendkcn)
    const [nienkhoaDKCN, SetNienkhoaDKCN] = useState(dulieutest.nienkhoa)
    const [khoahocDKCN, SetKhoahocDKCN] = useState(dulieutest.khoahoc)
    const [tgbd, SetTgbd] = useState(dulieutest.tgbd)
    const [tgkt, SetTgkt] = useState(dulieutest.tgkt)

    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
    }

    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>CHỈNH SỬA</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link>Đăng ký chuyên ngành</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{chuyennganh.madkcn}</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-group">
                        <label className="inputDKCN" for="inputTenDKCN">Tên đợt đăng ký chyên ngành</label>
                        <input type="text" className="form-control" id="inputTenDKCN" value={tenDKCN} onChange={(event) => onChangeInputSL(event, SetTenDKCN)} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" for="inputKhoaDKCN">Khóa học</label>
                            <input type="text" className="form-control" id="inputKhoaDKCN" value={khoahocDKCN} onChange={(event) => onChangeInputSL(event, SetKhoahocDKCN)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" for="inputNienKhoaDKCN">Niên khóa</label>
                            <input type="text" className="form-control" id="inputNienKhoaDKCN" value={nienkhoaDKCN} onChange={(event) => onChangeInputSL(event, SetNienkhoaDKCN)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" for="inputNgayBDDKCN">Ngày bắt đầu</label>
                            <input type="date" className="form-control" id="inputNgayBDDKCN" value={tgbd} onChange={(event) => onChangeInputSL(event, SetTgbd)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" for="inputNgayKTDKCN">Ngày kết thúc</label>
                            <input type="date" className="form-control" id="inputNgayKTDKCN" value={tgkt} onChange={(event) => onChangeInputSL(event, SetTgkt)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title2">CÔNG NGHỆ THÔNG TIN</h5>
                                    <ul className="ul-admin">
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-6 col-form-label label-card">Hệ thống thông tin</label>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control" id="inputlabel-card" value={sl_httt} onChange={(event) => onChangeInputSL(event, SetSl_httt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-6 col-form-label label-card">Khoa học máy tính</label>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control" id="inputlabel-card" value={sl_khmt} onChange={(event) => onChangeInputSL(event, SetSl_khmt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-6 col-form-label label-card">Kỹ thuật phần mềm</label>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control" id="inputlabel-card" value={sl_ktpm} onChange={(event) => onChangeInputSL(event, SetSl_ktpm)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-6 col-form-label label-card">Mạng máy tính   </label>
                                                <div className="col-sm-4">
                                                    <input type="text" className="form-control" id="inputlabel-card" value={sl_mmt} onChange={(event) => onChangeInputSL(event, SetSl_mmt)} />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default EditDKCN;