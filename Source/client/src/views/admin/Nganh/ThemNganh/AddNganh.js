import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./AddNganh.scss"
const AddNganh = () => {


    const [manganh, SetMaNganh] = useState('')
    const [tennganh, SetTenNganh] = useState('')

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
                            <Link>Ngành</Link>
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
                            <label className="inputNganh" for="inputMa">Mã ngành</label>
                            <input type="text" className="form-control" id="inputMa" placeholder="Điền mã ngành ..." value={manganh} onChange={(event) => onChangeInputSL(event, SetMaNganh)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputTen">Tên ngành</label>
                            <input type="text" className="form-control" id="inputTen" placeholder="Điền tên ngành ..." value={tennganh} onChange={(event) => onChangeInputSL(event, SetTenNganh)} />
                        </div>
                    </div>


                    <button className="btn" type="submit">Submit form</button>
                </div>
            </form>
        </main >
    )
}
export default AddNganh;