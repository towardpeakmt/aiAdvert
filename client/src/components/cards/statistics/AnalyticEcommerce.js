import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import SmallAreaChart from './SmallAreaChart';
// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ title, count, percentage, isLoss, extra, series, class_name }) => (
    <MainCard contentSX={{ p: '8px 24px' }} class_name="last:pb-0" className={`border-0 border-r rounded-none ${class_name}`}>
        <Stack spacing={3.5}>
            <Typography variant="h6" className="text-sm" color="textSecondary">
                {title}
            </Typography>
            <Grid container alignItems="center">
                <Grid item>
                    <Typography variant="h4" color="inherit" fontSize="20px">
                        {count}
                    </Typography>
                </Grid>
                {series && (
                    <Grid item>
                        <Box sx={{ pt: 1, pr: 2 }}>
                            <SmallAreaChart series={series} />
                        </Box>
                    </Grid>
                )}
            </Grid>
            <Grid container alignItems="center">
                {percentage && (
                    <Grid item>
                        <Chip
                            variant="combined"
                            className={!isLoss ? `bg-white text-[#83B672]` : `bg-white text-[#DF2929]`}
                            icon={
                                <>
                                    {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: '#83B672' }} />}
                                    {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: '#DF2929' }} />}
                                </>
                            }
                            label={`${percentage}%`}
                            size="small"
                        />
                    </Grid>
                )}
                <Grid item className="pl-9">
                    <Typography component="span" variant="caption" sx={{ color: `rgba(0, 0, 0, 0.45)`, fontSize: '10px' }}>
                        {extra}
                    </Typography>
                </Grid>
            </Grid>
        </Stack>
    </MainCard>
);

AnalyticEcommerce.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.string,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    series: PropTypes.array,
    class_name: PropTypes.string,
    extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticEcommerce.defaultProps = {
    color: 'primary'
};

export default AnalyticEcommerce;
