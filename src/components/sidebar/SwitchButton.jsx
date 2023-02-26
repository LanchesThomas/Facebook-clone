import { styled } from '@mui/material/styles'
import { LightMode, ModeNight } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, Switch } from '@mui/material'
import React from 'react'

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    gap: '10%',
    [theme.breakpoints.down('xl')]: {
        flexDirection: 'column',
    },
}))

const SwitchButton = ({ setMode, mode }) => {
    return (
        <ListItem disablePadding sx={{ mt: '10px' }}>
            <StyledListItemButton component="a" href={'#home'}>
                <ListItemIcon sx={{ minWidth: '0px' }}>
                    {mode === 'light' ? <LightMode /> : <ModeNight />}
                </ListItemIcon>
                <Switch
                    onChange={(e) =>
                        setMode(mode === 'light' ? 'dark' : 'light')
                    }
                />
            </StyledListItemButton>
        </ListItem>
    )
}

export default SwitchButton
