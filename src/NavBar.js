import React,  {useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { NavLink } from "react-router-dom";
import './App.css';


function NavBar( { user, setUser} ) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };



    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return(
        <AppBar position="static" className='mb-3'>
            <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                ⚽️ NetBet
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >

                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                    display: { xs: 'block', md: 'none' },
                    }}
                >
                    <MenuItem key={'Home'} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                            <NavLink exact to={"/"} style={{textDecoration: 'none', color: 'white'}}>
                                Home
                            </NavLink>
                        </Typography>
                    </MenuItem>
                    <MenuItem key={'My Bets'} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                            <NavLink exact to={"/bets"} style={{textDecoration: 'none', color: 'white'}}>
                                My Bets
                            </NavLink>
                        </Typography>
                    </MenuItem>
                    <MenuItem key={'Balance'} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" style={{textDecoration: 'none', color: 'white'}}>
                            Balance: {user.balance}
                        </Typography>
                    </MenuItem>

                </Menu>
                </Box>
                <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                NetBet ⚽️
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                    key={'Home'}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        <NavLink exact to={"/"} style={{textDecoration: 'none', color: 'white'}}>
                            Home
                        </NavLink>
                    </Button>
                    <Button
                    key={'My Bets'}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        <NavLink exact to={"/bets"} style={{textDecoration: 'none', color: 'white'}}>
                            My Bets
                        </NavLink>
                    </Button>
                    <Button
                    key={'Active Balance'}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Balance: ${user.balance}
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Logout">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="JB" src="" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem key={user.username} onClick={handleLogout}>
                        <Typography textAlign="center">Logout {user.username}</Typography>
                    </MenuItem>
                </Menu>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;