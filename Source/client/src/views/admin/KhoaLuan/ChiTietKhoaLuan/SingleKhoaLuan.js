import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./SingleKhoaLuan.scss"
import TableDSDeTai from "./TableDSDeTai";
const SingleKhoaLuan = () => {

    const maKL = useParams();

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const nganh = [
        {
            manganhhoc: 'CNTT',
            tennganh: 'Công nghệ thông tin',
            trangthai: 1,
        },
        {
            manganhhoc: 'CNTT_CLC',
            tennganh: 'Công nghệ thông tin CLC',
            trangthai: 1,
        },
    ]
    const dulieutest = {
        makl: 'KL1',
        ten: 'Đợt đăng ký khóa luận năm học 2023-2024',
        nienkhoa: '2023-2024',
        trangthai: 1,
    };
    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>TÊN DKY KHÓA LUẬN</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>{maKL.makl}</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link >{dulieutest.nienkhoa}</Link>
                        </li>


                    </ul>
                </div>
                <a href="#" className="btn-download">
                    <i className='bx bxs-cloud-download'></i>
                    <span className="text">Export Data</span>

                </a>
            </div>

            {/* <MantineReactTable table={table} />; */}


            {/* TabContext */}
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {nganh && nganh.length > 0 &&
                            nganh.map((item, index) => {
                                let valuee = index + 1;
                                return (
                                    <Tab label={item.tennganh} value={valuee.toString()} key={item.manganhhoc} />
                                )
                            })}
                    </TabList>
                </Box>

                <TabPanel value="1" >
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Danh sách đề tài</h6>
                        </div>
                        <TableDSDeTai />

                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Số lượng: 3/75</h6>
                        </div>


                    </div>
                </TabPanel>
                <TabPanel value="3">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Số lượng: 3/75</h6>
                        </div>


                    </div>
                </TabPanel>
                <TabPanel value="4">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Số lượng: 3/75</h6>
                        </div>


                    </div>
                </TabPanel>
                <TabPanel value="5">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Số lượng: 3/75</h6>
                        </div>

                    </div>
                </TabPanel>

            </TabContext>
            {/* TabContext */}





        </main >
    )
}
export default SingleKhoaLuan;