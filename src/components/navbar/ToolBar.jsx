import { styled } from '@mui/material/styles'
import { Code, Mail, Notifications } from '@mui/icons-material'
import {
    Avatar,
    Badge,
    Box,
    InputBase,
    Toolbar,
    Typography,
} from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'primary',
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: 20,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}))

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
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

const ToolBar = ({ setOpen }) => {
    return (
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
    )
}

export default ToolBar
