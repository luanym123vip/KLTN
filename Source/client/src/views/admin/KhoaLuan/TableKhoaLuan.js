import "./TableKhoaLuan.scss"
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button } from '@mantine/core';
import { IconDownload, IconUpload } from '@tabler/icons-react';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { Link } from "react-router-dom";
import moment from 'moment'
import { IconButton, } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';

const data = [
    {
        makl: 'KL1',
        ten: 'Đợt đăng ký khóa luận năm học 2023-2024',
        nienkhoa: '2023-2024',
        trangthai: 1,
    },
    {
        makl: 'KL2',
        ten: 'Đợt đăng ký khóa luận năm học 2022-2023',
        nienkhoa: '2022-2023',
        trangthai: 1,
    },
    {
        makl: 'KL3',
        ten: 'Đợt đăng ký khóa luận năm học 2021-2022',
        nienkhoa: '2021-2022',
        trangthai: 1,
    },
    {
        makl: 'KL4',
        ten: 'Đợt đăng ký khóa luận năm học 2020-2021',
        nienkhoa: '2020-2021',
        trangthai: 1,
    },
]

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableKhoaLuan = () => {
    const [checkdiv, setCheckdiv] = useState(false)

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
                accessorKey: 'makl',
                header: 'Mã',
                size: 80,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,

            },
            {
                accessorKey: 'ten',
                header: 'Tên',
                size: 400,
                enableEditing: false,

            },
            {
                accessorKey: 'nienkhoa',
                header: 'Niên khóa',
                size: 150,
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
                <Link to={"/admin/khoaluan/single/" + row.original.makl}>
                    <IconButton>
                        <Visibility fontSize="small" />
                    </IconButton>
                </Link>

                <Link to={"/admin/khoaluan/edit/" + row.original.makl}>
                    <IconButton  >
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

};

export default TableKhoaLuan;