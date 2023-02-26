import * as React from 'react';
import { Grid, Box, Avatar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Dot from 'components/@extended/Dot';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import avatar5 from 'assets/images/users/sample.png';

export const Pending = () => (
    <Box className="px-3 border text-[#1E67D6] border-solid drop-shadow rounded-[20px] flex justify-around items-center">
        <Dot color={'#1E67D6'} />
        <span className="pl-2">Pending</span>
    </Box>
);

export const Paid = () => (
    <Box className="px-3 border text-[#83B672] border-solid drop-shadow rounded-[20px] flex justify-around items-center">
        <Dot color={'#83B672'} />
        <span className="pl-2">Paid</span>
    </Box>
);

const columns = [
    {
        field: 'advertiser',
        headerName: 'Advertiser',
        width: 200
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 200,
        cellClassName: 'text-black/50'
    },
    {
        field: 'owner',
        headerName: 'Owner',
        width: 200,
        renderCell: (params) => (
            <Grid container className="flex justify-start space-x-2">
                <Grid item>
                    <Avatar alt={params.value.name}src={params.value.avatar} sx={{ width: 21, height: 21 }} />
                </Grid>
                <Grid>{params.value.name}</Grid>
            </Grid>
        )
    },
    {
        field: 'channel',
        headerName: 'Channel',
        width: 200,
        cellClassName: 'text-black/50'
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 200,
        renderCell: (params) => {
            if (params.value === 'pending') {
                return <Pending />;
            }
            return <Paid />;
        }
    },
    {
        field: 'comission',
        headerName: 'Comission'
    }
];

const rows = [
    {
        id: 1,
        advertiser: 'HBO',
        date: '12 / 04 / 2023 / 08:25',
        owner: {
            name: 'Camila Rios',
            avatar: avatar1
        },
        channel: 'bt.dk',
        status: 'pending',
        comission: '34,44 USD'
    },
    {
        id: 2,
        advertiser: 'Lirum Larum',
        date: '17 / 04 / 2023 / 16:45',
        owner: {
            name: 'Camila Rios',
            avatar: avatar2
        },
        channel: 'bt.dk',
        status: 'pending',
        comission: '34,44 USD'
    },
    {
        id: 3,
        advertiser: 'Kande',
        date: '16 / 04 / 2023 / 15:20',
        owner: {
            name: 'Camila Rios',
            avatar: avatar3
        },
        channel: 'bt.dk',
        status: 'pending',
        comission: '34,44 USD'
    },
    {
        id: 4,
        advertiser: 'Temashop',
        date: '12 / 04 / 2023 / 08:25',
        owner: {
            name: 'Camila Rios',
            avatar: avatar4
        },
        channel: 'bt.ge',
        status: 'paid',
        comission: '34,44 USD'
    },
    {
        id: 5,
        advertiser: 'Jack',
        date: '20 / 04 / 2022 / 05:35',
        owner: {
            name: 'Camila Rios',
            avatar: avatar5
        },
        channel: 'bt.com',
        status: 'paid',
        comission: '34,44 USD'
    }
];

const DataTable = () => {
    return (
        <div className="h-[400px]">
            <DataGrid
                sx={{
                    '& .MuiDataGrid-columnHeaders': {
                        padding: '6px 0',
                        backgroundColor: '#FAFCFE',
                        color: 'rgba(0, 0, 0, 0.45)',
                        fontSize: '12px',
                        borderTop: '1px solid rgba(217, 217, 217, 0.3)'
                    },
                    '& .MuiDataGrid-row': {
                        borderTop: '1px solid rgba(217, 217, 217, 0.3)'
                    }
                }}
                headerHeight={32}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default DataTable;
