import "./TableChuyenNganh.scss"
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
        machuyennganh: 'HTTT',
        tenchuyennganh: 'Hệ Thống Thông Tin',
        nganh: 'Công nghệ thông tin',
        trangthai: 1,
    },
    {
        machuyennganh: 'KHMT',
        tenchuyennganh: 'Khoa Học Máy Tính',
        nganh: 'Công nghệ thông tin',
        trangthai: 1,
    },
    {
        machuyennganh: 'KTPM',
        tenchuyennganh: 'Kỹ Thuật Phần Mềm',
        nganh: 'Công nghệ thông tin',
        trangthai: 1,
    },
    {
        machuyennganh: 'MMT',
        tenchuyennganh: 'Mạng Máy Tính',
        nganh: 'Kỹ thuật phần mềm',
        trangthai: 1,
    },
]

const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
});

const TableChuyenNganh = () => {
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
                accessorKey: 'machuyennganh',
                header: 'Mã Chuyên Ngành',
                size: 100,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,

            },
            {
                accessorKey: 'tenchuyennganh',
                header: 'Tên Chuyên Ngành',
                size: 250,
                enableEditing: false,

            },
            {
                accessorKey: 'nganh',
                header: 'Ngành học',
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
        positionActionsColumn: 'last',
        enableColumnActions: true,
        enableRowActions: true,



        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '0.3rem' }}>

                <IconButton onClick={() => table.setEditingRow(row)}>
                    <Visibility fontSize="small" />
                </IconButton>


                <Link to={"/admin/chuyennganh/edit/" + row.original.machuyennganh}>
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
            </Box>

        ),
    });

    return (
        <>

            <MantineReactTable table={table} />

        </>
    )

};

export default TableChuyenNganh;