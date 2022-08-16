import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import QuizIcon from '@mui/icons-material/Quiz';
import '../styles/dashboard.css';
import { User } from './user';

const drawerWidth = 240;

export const Dashboard = () => {
    return <div>
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            {/* <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <div style={{ position: 'relative', marginTop: '40px' }}>
                    <SearchIcon className='dashboard-searchIcon' />
                    <form className='dashboard-form'>
                        {/* <img className='dashboard-searchIcon' src={SearchIcon} alt='' /> */}
                        <input type='text' placeholder='Search' />
                    </form>
                </div>
                <h2 className='dashboard-heading'>Library</h2>
                <Toolbar />
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon className='dashboard-icon d-icon1' />
                            </ListItemIcon>
                            <ListItemText className='dashboard-icon-text' primary='Dashboard' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuBookIcon className='dashboard-icon d-icon2' />
                            </ListItemIcon>
                            <ListItemText className='dashboard-icon-text' primary='Books' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon className='dashboard-icon d-icon3' />
                            </ListItemIcon>
                            <ListItemText className='dashboard-icon-text' primary='Users' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TrackChangesIcon className='dashboard-icon d-icon4' />
                            </ListItemIcon>
                            <ListItemText className='dashboard-icon-text' primary='Circulation' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <QuizIcon className='dashboard-icon d-icon5' />
                            </ListItemIcon>
                            <ListItemText className='dashboard-icon-text' primary='Issue Books' />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

        </Box>
        <User/>
    </div>
}
