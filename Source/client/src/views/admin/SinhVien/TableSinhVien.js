
import "./TableSinhVien.scss";
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button } from '@mantine/core';
import { IconDownload, IconUpload } from '@tabler/icons-react';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { Link } from "react-router-dom";
import {
    IconButton,
} from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';

const data = [
    {
        masv: 'SV1',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV2',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV3',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV4',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV5',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K20',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV6',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV7',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV8',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV9',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV10',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV11',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
    {
        masv: 'SV12',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'Kỹ thuật phần mềm',
        nganh: 'Kỹ thuật phần mềm',
        lop: 'DCT1192',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    },
]

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableSinhVien = () => {
    const handleExportRows = (rows) => {
        const rowData = rows.map((row) => row.original);
        const csv = generateCsv(csvConfig)(rowData);
        download(csvConfig)(csv);
    };

    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(data);
        download(csvConfig)(csv);
    };
    const columns = useMemo(
        () => [
            {
                accessorKey: 'masv',
                header: 'Mã',
                size: 100,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
            },
            {
                accessorKey: 'hosv',
                header: 'Họ',
                size: 150,
                enableEditing: false,


            },
            {
                accessorKey: 'tensv',
                header: 'Tên',
                size: 100,
                enableEditing: false,
            },
            {

                accessorKey: 'email',
                header: 'Email',
                size: 160,
                enableEditing: false,


            },
            {
                accessorKey: 'sdt',
                header: 'Số điện thoại',
                size: 100,
                enableEditing: false,
            },
            {
                accessorKey: 'gioitinh',
                header: 'Giới Tính',
                size: 100,
                enableEditing: false,
            },
            {

                accessorKey: 'ngaysinh',
                header: 'Ngày sinh',
                size: 100,
                enableEditing: false,


            },
            {
                accessorKey: 'khoa',
                header: 'Khóa',
                size: 150,
                enableEditing: false,
            },
            {

                accessorKey: 'chuyennganh',
                header: 'Chuyên ngành',
                size: 150,
                enableEditing: false,


            },
            {
                accessorKey: 'nganh',
                header: 'Ngành',
                size: 200,
                enableEditing: false,
            },
            {

                accessorKey: 'lop',
                header: 'Lớp',
                size: 150,
                enableEditing: false,


            },
            {
                accessorKey: 'trangthaitotnghiep',
                header: 'Trạng thái tốt nghiệp',
                size: 250,
                enableEditing: false,
            },
        ]
    );

    const table = useMantineReactTable({
        columns,
        data,
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        positionActionsColumn: 'last',
        enableColumnActions: true,
        enableRowActions: true,



        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                <Link onClick={() => table.setEditingRow(row)}>
                    <IconButton>
                        <Visibility fontSize="small" />
                    </IconButton>
                </Link>


                <Link to={"/admin/sinhvien/edit/" + row.original.masv}>
                    <IconButton onClick={() => table.setEditingRow(row)}>
                        <Edit fontSize="small" />
                    </IconButton>
                </Link>

                <IconButton onClick={() => console.log(row.original.name)}>
                    <Delete fontSize="small" sx={{ color: 'red' }} />
                </IconButton>
            </Box >

        ),



        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    padding: '8px',
                    flexWrap: 'wrap',
                }}
            >
                <Button
                    color="lightblue"
                    //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                    onClick={handleExportData}
                    leftIcon={<IconUpload />}
                    variant="filled"
                >
                    Export All Data
                </Button>
                {/* <Button
                            disabled={table.getPrePaginationRowModel().rows.length === 0}
                            //export all rows, including from the next page, (still respects filtering and sorting)
                            onClick={() =>
                                handleExportRows(table.getPrePaginationRowModel().rows)
                            }
                            leftIcon={<IconDownload />}
                            variant="filled"
                        >
                            Export All Rows
                        </Button> */}
                {/* <Button
                            disabled={table.getRowModel().rows.length === 0}
                            //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                            onClick={() => handleExportRows(table.getRowModel().rows)}
                            leftIcon={<IconDownload />}
                            variant="filled"
                        >
                            Export Page Rows
                        </Button> */}
                <Button
                    disabled={
                        !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
                    }
                    //only export selected rows
                    onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                    leftIcon={<IconUpload />}
                    variant="filled"
                >
                    Export Selected Rows
                </Button>

                <Button
                    //only export selected rows
                    // onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                    leftIcon={<IconDownload />}
                    variant="filled"
                >
                    Import Data
                </Button>
                {/* <Button
                            sx={{ backgroundColor: 'green' }}
                            //only export selected rows
                            // onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                            leftIcon={<IconDownload />}
                            variant="filled"
                        >
                            Create Data
                        </Button> */}
            </Box>

        ),
    });

    return (
        <>
            <MantineReactTable table={table} />
        </>
    )
}

export default TableSinhVien