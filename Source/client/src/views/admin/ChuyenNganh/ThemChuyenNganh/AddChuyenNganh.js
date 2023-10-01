import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./AddChuyenNganh.scss"
const AddChuyenNganh = () => {


    const [machuyennganh, SetMachuyennganh] = useState('')
    const [tenchuyennganh, SetTenchuyennganh] = useState('')
    const [nganhhoc, SetNganhhoc] = useState('cntt')

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
                            <Link> Chuyên ngành</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >new</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputMa">Mã chuyên ngành</label>
                            <input type="text" className="form-control" id="inputMa" placeholder="Điền mã chuyên ngành ..." value={machuyennganh} onChange={(event) => onChangeInputSL(event, SetMachuyennganh)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputTen">Tên chuyên ngành</label>
                            <input type="text" className="form-control" id="inputTen" placeholder="Điền tên chuyên ngành ..." value={tenchuyennganh} onChange={(event) => onChangeInputSL(event, SetTenchuyennganh)} />
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
export default AddChuyenNganh;