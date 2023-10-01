import "./TableDKiChuyenNganh.scss"
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import React, { useCallback, useMemo, useState } from 'react';
import { Box, Button } from '@mantine/core';
import { IconDownload, IconUpload } from '@tabler/icons-react';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { MenuItem } from '@mui/material';
import { Link } from "react-router-dom";
import moment from 'moment'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    TextField,
    Tooltip,
} from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';


// const columns = [
//     {
//         accessorKey: 'madkcn',
//         header: 'Mã',
//         size: 10,
//         enableColumnOrdering: false,
//         enableEditing: false, //disable editing on this column
//         enableSorting: false,

//     },
//     {
//         accessorKey: 'nienkhoa',
//         header: 'Niên khóa',
//         size: 130,
//     },
//     {
//         accessorKey: 'khoahoc',
//         header: 'Khóa',
//         size: 130,
//     },
//     {
//         type: 'date',
//         accessorKey: 'tgbd',
//         header: 'Bắt đầu',
//         size: 150,

//     },
//     {
//         type: 'date',
//         accessorKey: 'tgkt',
//         header: 'Kết thúc',
//         size: 150,
//     },
//     {
//         accessorKey: 'nganh',
//         header: 'Ngành',
//         size: 100,

//     },
// ];






const data = [


    {
        madkcn: 'CN1',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN2',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN3',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN4',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN5',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN6',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN7',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN8',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN9',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN10',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN11',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
    {
        madkcn: 'CN12',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    },
]

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableDKiChuyenNganh = () => {
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
                accessorKey: 'madkcn',
                header: 'Mã',
                size: 10,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,

            },
            {
                accessorKey: 'nienkhoa',
                header: 'Niên khóa',
                size: 100,
                enableEditing: false,

            },
            {
                accessorKey: 'khoahoc',
                header: 'Khóa',
                size: 100,
                enableEditing: false,
            },
            {

                accessorKey: 'tgbd',
                header: 'Bắt đầu',
                size: 150,
                enableEditing: false,


            },
            {
                type: 'date',
                accessorKey: 'tgkt',
                header: 'Kết thúc',
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
                <Link to={"/admin/dkichuyennganh/single/" + row.original.madkcn}>
                    <IconButton>
                        <Visibility fontSize="small" />
                    </IconButton>
                </Link>

                <Link to={"/admin/dkichuyennganh/edit/" + row.original.madkcn}>
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

};

export default TableDKiChuyenNganh;