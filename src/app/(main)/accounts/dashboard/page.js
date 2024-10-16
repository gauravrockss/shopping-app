import { getQueryClientForServer } from '@/api/config';
import { useProfile } from '@/api/profile/client';
import { getProfile } from '@/api/profile/server';
import { Box, Container, Divider, Grid2, Typography } from '@mui/material';
import React from 'react';

const Dashboard = async () => {
    const data = await getProfile();

    return (
        <Box>
            <Typography variant='h4'>Dashboard {data?.profile.name}</Typography>
        </Box>
    );
};

export default Dashboard;
