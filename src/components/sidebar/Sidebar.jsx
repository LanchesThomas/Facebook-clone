import styled from '@emotion/styled'
import {
    Article,
    Group,
    Home,
    LightMode,
    ModeNight,
    Person,
    Portrait,
    Settings,
    Storefront,
} from '@mui/icons-material'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
} from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius:'10px',
    borderTopLeftRadius: '0px',
    borderLeft: `none`,
    marginRight: 10,
}))

const Sidebar = ({setMode, mode}) => {
    return (
        <StyledBox width={'20%'} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position={'fixed'}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href={'#home'}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href={'#home'}>
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href={'#home'}>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href={'#home'}>
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="MarketPlace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href={'#home'}>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href={'#home'}>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href={'#home'}>
                            <ListItemIcon>
                                <Portrait />
                            </ListItemIcon>
                            <ListItemText primary="Profil" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href={'#home'}>
                            <ListItemIcon>
                                {mode === 'light' ? <LightMode /> : <ModeNight /> }
                                
                            </ListItemIcon>
                            <Switch onChange={e=> setMode(mode === 'light' ? 'dark' : "light")}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </StyledBox>
    )
}

export default Sidebar
