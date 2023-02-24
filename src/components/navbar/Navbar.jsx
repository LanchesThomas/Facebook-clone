import styled from '@emotion/styled'
import { Code, Mail, Notifications, Rowing } from '@mui/icons-material'
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)(({theme})=> ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: "primary",
}))

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}))
const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: 20,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}))

const User = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Thomas Lanches
                </Typography>
                <Code sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search>
                    <InputBase placeholder="search..."></InputBase>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="../../../assets/profilpic.jpg"
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>

                <User onClick={(e) => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="../../../assets/profilpic.jpg"
                    />
                    <Typography sx={{ fontSize: 12 }}>Thomas</Typography>
                </User>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 50,
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
