import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./EditGiangVien.scss"

const EditGiangVien = () => {
    const dulieutest = {
        magv: 'GV1',
        hogv: 'Nguyễn Thanh',
        tengv: 'Sang',
        email: 'sang@gmail.com',
        sdt: '0936362711',
        gioitinh: 'Nam',
        ngaysinh: '1990-08-12',
        donvicongtac: 'CNTT',
        chuyennganh: 'ktpm',
        trinhdo: 'Thạc Sĩ',
        trangthai: 1,

    };
    const nganh = [
        { id: 'httt', ten: 'Hệ thống thông tin' },
        { id: 'khmt', ten: 'Khoa học máy tính' },
        { id: 'ktpm', ten: 'Kỹ thuật phần mềm' },
        { id: 'mmt', ten: 'Mạng máy tính' },
    ]

    const giangvien = useParams();

    const [hogv, SetHogv] = useState(dulieutest.hogv)
    const [tengv, SetTengv] = useState(dulieutest.tengv)
    const [email, SetEmail] = useState(dulieutest.email)
    const [sdt, SetSdt] = useState(dulieutest.sdt)
    const [gioitinh, SetGioitinh] = useState(dulieutest.gioitinh)
    const [ngaysinh, SetNgaysinh] = useState(dulieutest.ngaysinh)
    const [donvicongtac, SetDonvicongtac] = useState(dulieutest.donvicongtac)
    const [chuyennganh, SetChuyennganh] = useState(dulieutest.chuyennganh)
    const [trinhdo, SetTrinhdo] = useState(dulieutest.trinhdo)


    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }

    const onChangeSelect = (event, SetSelect) => {
        let changeValue = event.target.value;
        console.log("Select", changeValue)
        SetSelect(changeValue);
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
                            <Link>Giảng viên</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{giangvien.magv}</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputHoGV">Họ lót</label>
                            <input type="text" className="form-control" id="inputHoGV" value={hogv} onChange={(event) => onChangeInputSL(event, SetHogv)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputTenGV">Tên</label>
                            <input type="text" className="form-control" id="inputTenGV" value={tengv} onChange={(event) => onChangeInputSL(event, SetTengv)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputEmailGV">Email</label>
                            <input type="text" className="form-control" id="inputEmailGV" value={email} onChange={(event) => onChangeInputSL(event, SetEmail)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputSdtGV">Số điện thoại</label>
                            <input type="text" className="form-control" id="inputSdtGV" value={sdt} onChange={(event) => onChangeInputSL(event, SetSdt)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputGioitinhGV">Giới tính</label>
                            <select value={gioitinh} onChange={(event) => onChangeSelect(event, SetGioitinh)} id="inputGioitinhGV" className="form-control">
                                <option value='Nam'>Nam</option>
                                <option value='Nữ'>Nữ</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputNgaysinh">Ngày sinh</label>
                            <input type="date" className="form-control" id="inputNgaysinh" value={ngaysinh} onChange={(event) => onChangeInputSL(event, SetNgaysinh)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputDonviCT">Đơn vị công tác</label>
                            <input type="text" className="form-control" id="inputDonviCT" value={donvicongtac} onChange={(event) => onChangeInputSL(event, SetDonvicongtac)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputChuyennganh">Chuyên ngành</label>
                            <select value={chuyennganh} onChange={(event) => onChangeSelect(event, SetChuyennganh)} id="inputChuyennganh" className="form-control">
                                {nganh && nganh.length > 0 &&
                                    nganh.map((item, index) => {
                                        return (
                                            <option key={item.id} value={item.id}>{item.ten}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="inputGV" for="inputTrinhdo">Trình độ</label>
                            <input type="text" className="form-control" id="inputTrinhdo" value={trinhdo} onChange={(event) => onChangeInputSL(event, SetTrinhdo)} />
                        </div>

                    </div>
                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default EditGiangVien