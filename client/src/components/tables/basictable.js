import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material-ui
import { Box, Link, Avatar, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import LocalAreaIcon from 'icons/networktable/local-area.png';
import WirelessIcon from 'icons/networktable/wireless.png';
import WideAreaIcon from 'icons/networktable/wide-area.png';
import VirtualPrivateIcon from 'icons/networktable/virtual-private.png';
import VirtualLocalIcon from 'icons/networktable/virtual-local.png';
function createData(type, clicks, status, isLoss, icon) {
    return { type, clicks, status, isLoss, icon };
}

const rows = [
    createData('Local Area', 450, '2.15%', false, LocalAreaIcon),
    createData('Wireless Local Area', 380, '2.30%', false, WirelessIcon),
    createData('Wide Area', 920, '1.15%', true, WideAreaIcon),
    createData('Virtual Private', 567, '1.87%', false, VirtualPrivateIcon),
    createData('Virtual Local', 465, '3.03%', false, VirtualLocalIcon)
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'type',
        align: 'left',
        disablePadding: false,
        label: 'Type'
    },
    {
        id: 'clicks',
        align: 'center',
        disablePadding: true,
        label: 'Clicks'
    },
    {
        id: 'status',
        align: 'center',
        disablePadding: false,
        label: 'Status'
    }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 0:
            color = 'warning';
            title = 'Pending';
            break;
        case 1:
            color = 'success';
            title = 'Approved';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'primary';
            title = 'None';
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Dot color={color} />
            <Typography>{title}</Typography>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //
const BasicTable = () => {
    const [order] = useState('asc');
    const [orderBy] = useState('trackingNo');
    const [selected] = useState([]);

    const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;
    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& th': {
                        whiteSpace: 'nowrap',
                        padding: '6px 0',
                        backgroundColor: '#FAFCFE',
                        color: 'rgba(0, 0, 0, 0.45)',
                        fontSize: '12px',
                        height: "32px"
                    },
                    '& td': { padding: '12px 0' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-of-type': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <OrderTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.trackingNo);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.type}
                                    selected={isItemSelected}
                                >
                                    <TableCell align="left" className="flex align-middle">
                                        <Stack direction='row' spacing={1}>
                                            <Stack>
                                                <Avatar src={row.icon} alt={row.type} sx={{width: 21, height: 21}}/>
                                            </Stack>
                                            <Typography className="pl-3">{row.type}</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center">{row.clicks}</TableCell>
                                    <TableCell align="center" className={row.isLoss ? 'text-[#DF2929]' : 'text-[#83B672]'}>
                                        {row.status}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default BasicTable;