import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button } from '@mantine/core';
import { IconDownload, IconUpload } from '@tabler/icons-react';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import "./TableDSDeTai.scss"
import { IconButton, } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';
const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableDSDeTai = (props) => {
    const data = [
        {

            ten: 'Nghiên cứu và xây dựng một hệ thống khuyến nghị.',
            giangvienhuongdan: 'Phan Tấn Quốc',
            donvi: 'Khoa CNTT',
            trangthai: 1,
        },
        {
            ten: 'Phần mềm quản lý ghi chú cá nhân với tính năng nhận dạng tiếng nói',
            giangvienhuongdan: 'Nguyễn Tuấn Đăng',
            donvi: 'Khoa CNTT',
            trangthai: 1,
        },
        {
            ten: 'Xây dựng website hỗ trợ đào tạo khoa CNTT.',
            giangvienhuongdan: 'Nguyễn Thanh Sang',
            donvi: 'Khoa CNTT',
            trangthai: 1,
        },
        {
            ten: 'Xây dựng trò chơi hỗ trợ làm quen với tiếng Anh',
            giangvienhuongdan: 'Phạm Thi Vương',
            donvi: 'Viện KHDL - TTNT',
            trangthai: 1,
        },
    ]
    const { listData } = props;
    const handleExportRows = (rows) => {
        const rowData = rows.map((row) => row.original);
        const csv = generateCsv(csvConfig)(rowData);
        download(csvConfig)(csv);
    };

    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(listData);
        download(csvConfig)(csv);
    };
    const columns = useMemo(
        () => [
            {
                accessorKey: 'ten',
                header: 'Tên đề tài',
                size: 500,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,

            },
            {
                accessorKey: 'giangvienhuongdan',
                header: 'Giảng viên hướng dẫn',
                size: 250,
                enableEditing: false,

            },
            {

                accessorKey: 'donvi',
                header: 'Đơn vị công tác',
                size: 100,
                enableEditing: false,
            },
            {
                header: 'Trạng thái',
                accessorKey: 'trangthai',
                size: 100,
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
        enableColumnActions: true,
        enableColumnActions: true,
        enableRowActions: true,
        positionActionsColumn: 'last',

        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                <IconButton >
                    <Visibility fontSize="small" />
                </IconButton>



                <IconButton  >
                    <Edit fontSize="small" />
                </IconButton>


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
                {/* <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tất cả
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item dd ">Đăng ký</a>
                        <a className="dropdown-item dd">Chưa đăng ký</a>

                    </div>
                </div> */}

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
            </Box>

        ),
    });

    return (
        <>

            <MantineReactTable table={table} />

        </>
    )

};

export default TableDSDeTai;