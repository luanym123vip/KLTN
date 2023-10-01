import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./EditChuyenNganh.scss"
const EditChuyenNganh = () => {
    const dulieutest = {
        machuyennganh: 'HTTT',
        tenchuyennganh: 'Hệ Thống Thông Tin',
        nganh: 'cntt',
        trangthai: 1,
    };
    const chuyennganh = useParams();
    const [manchuyenganh, SetMachuyennganh] = useState(dulieutest.machuyennganh)
    const [tenchuyennganh, SetTenchuyennganh] = useState(dulieutest.tenchuyennganh)
    const [nganhhoc, SetNganhhoc] = useState(dulieutest.nganh)
    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
    }
    const onChangeSelect = (event, SetSelect) => {
        let changeValue = event.target.value;
        console.log('select', changeValue)
        SetSelect(changeValue);
    }
    const nganh = [
        { id: 'cntt', ten: 'Công nghệ thông tin' },
        { id: 'cntt_clc', ten: 'Công nghệ thông tin CLC' },
        { id: 'ktpm', ten: 'Kỹ thuật phần mềm' },

    ]

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
                            <Link>Chuyên ngành</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{chuyennganh.machuyennganh}</Link>
                        </li>
                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputMa">Mã chuyên ngành</label>
                            <input type="text" className="form-control" id="inputMa" value={manchuyenganh} onChange={(event) => onChangeInputSL(event, SetMachuyennganh)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputTen">Tên chuyên ngành</label>
                            <input type="text" className="form-control" id="inputTen" value={tenchuyennganh} onChange={(event) => onChangeInputSL(event, SetTenchuyennganh)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputNganh">Ngành</label>
                            <select value={nganhhoc} onChange={(event) => onChangeSelect(event, SetNganhhoc)} id="inputNganh" className="form-control">
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


                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default EditChuyenNganh;