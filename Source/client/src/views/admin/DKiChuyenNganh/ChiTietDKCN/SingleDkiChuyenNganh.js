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
import CardNganh from "./CardNganh";
import TableCTDKCN from "./TableCTDKCN";
import "./SingleDkiChuyenNganh.scss"
const SingleDkiChuyenNganh = () => {

    const data_HTTT = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Hệ thống thông tin',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560012',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560013',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560014',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560015',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560016',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560017',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560018',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560019',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560020',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560021',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
    ]

    const data_KHMT = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Khoa học máy tính',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560012',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560013',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560014',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560015',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560016',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560017',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560018',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560019',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560020',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560021',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
    ]


    const data_KTPM = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560012',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560013',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560014',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560015',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560016',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560017',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560018',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560019',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560020',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560021',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
    ]

    const data_MMT = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Mạng máy tính',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560012',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560013',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560014',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560015',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560016',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560017',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560018',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560019',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560020',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560021',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
    ]



    const [value, setValue] = useState('1');
    const [listData, setListData] = useState(data_HTTT);
    const handleChangeTest = (id) => {
        if (id === 1) {
            setListData(data_HTTT)
            return
        }
        if (id === 2) {
            setListData(data_HTTT)
            return
        }
        if (id === 3) {
            setListData(data_KHMT)
            return
        }
        if (id === 4) {
            setListData(data_KTPM)
            return
        }
        if (id === 5) {
            setListData(data_MMT)
            return
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dulieutest = {
        madkcn: 'CN1',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    };
    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>TÊN DKY CHUYÊN NGÀNH</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>{dulieutest.tgbd}</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link >{dulieutest.tgkt}</Link>
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
                        <Tab label="Công nghệ thông tin" value="1" onClick={() => handleChangeTest(1)} />
                        <Tab label="Hệ thống thông tin" value="2" onClick={() => handleChangeTest(2)} />
                        <Tab label="Khoa học máy tính" value="3" onClick={() => handleChangeTest(3)} />
                        <Tab label="Kỹ thuật phần mềm" value="4" onClick={() => handleChangeTest(4)} />
                        <Tab label="Mạng máy tính" value="5" onClick={() => handleChangeTest(5)} />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Số lượng: 3/75</h6>
                        </div>
                        <TableCTDKCN listData={listData} />

                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Số lượng: 3/75</h6>
                        </div>
                        <TableCTDKCN listData={listData} />

                    </div>
                </TabPanel>
                <TabPanel value="3">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Số lượng: 3/75</h6>
                        </div>
                        <TableCTDKCN listData={listData} />

                    </div>
                </TabPanel>
                <TabPanel value="4">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Số lượng: 3/75</h6>
                        </div>
                        <TableCTDKCN listData={listData} />

                    </div>
                </TabPanel>
                <TabPanel value="5">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Số lượng: 3/75</h6>
                        </div>
                        <TableCTDKCN listData={listData} />
                    </div>
                </TabPanel>

            </TabContext>
            {/* TabContext */}





        </main >
    )
}
export default SingleDkiChuyenNganh;