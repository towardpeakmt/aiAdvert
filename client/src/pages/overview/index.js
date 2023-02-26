import { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography,
    Tab
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// project import
import NetworkTable from './NetworkTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import SelectCard from 'components/cards/SelectCard';
import BasicTable from 'components/tables/basictable';
import LiveDataTable from './LiveDataTabel';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

const series = [
    {
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
    }
];

const OverView = () => {
    const [value, setValue] = useState('pageviews');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SelectCard title="Date" contents={['01.02.23-16.02.23', '03.02.23-16.02.23']} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SelectCard title="Time" contents={['00:00', '00:01']} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SelectCard title="Username" contents={['Sam Wheller', 'Jerry Poole']} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <SelectCard
                    title="Topic"
                    contents={['Overview', 'traffic sources', 'content', 'user demographics', 'conversions', 'events']}
                />
            </Grid>
            {/* row2 */}
            <Grid item lg={12}>
                <MainCard content={false} sx={{ display: 'flex', padding: '8px' }} className="shadow-md">
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <AnalyticEcommerce title="Pageviews" count="212" percentage={2.5} extra="Epc: 302.12 USD" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <AnalyticEcommerce title="Clicks" count="70.210" percentage={1.1} isLoss={true} extra="Ctr: 24.5%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <AnalyticEcommerce title="Conversations" count="42.440" percentage={2.15} extra="Ctr: 28.6%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <AnalyticEcommerce
                            class_name="border-r-0 last:pb-0"
                            title="Comission"
                            count="23.146"
                            percentage={2.5}
                            extra="Epc: 4.5 USD"
                        />
                    </Grid>
                </MainCard>
            </Grid>
            {/* <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} /> */}

            {/* row 3 */}
            <Grid item xs={12} md={7} lg={7}>
                <MainCard content={false} className="p-5 shadow-md h-96">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h5" className="text-base">
                                        Timeframe
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TabList onChange={handleChange} aria-label="graphs">
                                        <Tab className="text-xs" label="Pageviews" value="pageviews" />
                                        <Tab className="text-xs" label="Clicks" value="clicks" />
                                        <Tab className="text-xs" label="Conversions" value="conversions" />
                                        <Tab className="text-xs" label="Comission" value="comission" />
                                    </TabList>
                                </Grid>
                            </Grid>
                        </Box>
                        <TabPanel value="pageviews" className="px-0 py-2">
                            <Box>
                                <IncomeAreaChart series={series} />
                            </Box>
                        </TabPanel>
                        <TabPanel value="clicks">Item Two</TabPanel>
                        <TabPanel value="conversions">Item Three</TabPanel>
                        <TabPanel value="comission">Item Three</TabPanel>
                    </TabContext>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
                <MainCard content={false} className="p-5 shadow-md h-96">
                    <Box className="py-3" sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="h5" className="text-base">
                                    Networks
                                </Typography>
                            </Grid>
                            <Grid item />
                        </Grid>
                    </Box>
                    <Box>
                        <BasicTable />
                    </Box>
                </MainCard>
            </Grid>
            
            {/* row 4 */}
            <Grid item xs={12} md={12} lg={12}>
                <MainCard content={false} className="px-5 py-8 shadow-md h-96">
                    <Grid container alignItems="center" justifyContent="space-start" columnSpacing={3.5}>
                        <Grid item>
                            <Typography variant="h5" className="text-base">
                                Networks
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" className="rounded-[20px] text-black border-black px-[10px] py-[3px] text-[10px]">
                                Live Data
                            </Button>
                        </Grid>
                    </Grid>
                    <Box className='pt-5'>
                        <LiveDataTable />
                    </Box>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default OverView;
