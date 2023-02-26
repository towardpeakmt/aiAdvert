import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography, FormControl, Select, MenuItem } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //
const SelectCard = ({ title, contents }) => {
    return (
        <MainCard className="rounded-[20px] p-0 shadow-md" class_name="p-0 last:pb-0 px-2">
            <Stack>
                <Grid container alignItems="center" className="flex justify-between">
                    <Grid item>
                        <Typography variant="h5" color="inherit" className="text-base">
                            {title}:
                        </Typography>
                    </Grid>
                    <Grid item>
                        <FormControl variant={'standard'} sx={{ m: 1, minWidth: 120 }}>
                            <Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} disableUnderline>
                                {contents.map((content, index) => (
                                    <MenuItem className="h-10 border-0" key={index}>
                                        {content}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Stack>
        </MainCard>
    );
};

SelectCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array
};

SelectCard.defaultProps = {
    color: 'primary'
};

export default SelectCard;
