import React from "react";
import { Tabs, Tab, Box } from '@mui/material';

function ActiveSettled ({active, setActive}) {

    function handleChange (e, status) {
        setActive(status);
    }


    return (
        //Using a boolean value is what screws up the formatting of the tabs
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }} className='mb-5'>
            <Tabs
            value={active}
            onChange={handleChange}
            centered
            >    
                <Tab label="Active" value='1' />
                <Tab label="Settled" value='2' />
            </Tabs>
        </Box>
    )
}

export default ActiveSettled;