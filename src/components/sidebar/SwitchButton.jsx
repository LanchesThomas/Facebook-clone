import { styled } from '@mui/material/styles'
import { LightMode, ModeNight } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, Switch } from '@mui/material'
import React from 'react'
import { useWindowSize } from '../../utils/hooks/useWindowSize'
import { useState, useEffect } from 'react'

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    gap: '10%',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
    },
}))

const SwitchButton = ({ setMode, mode }) => {
    const screenWidth = useWindowSize().width
    const [isLarge, setIsLarge] = useState(false)
    useEffect(() => {
        screenWidth > 600 ? setIsLarge(true) : setIsLarge(false)
    }, [screenWidth])

    if (isLarge) {
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
    } else {
        return (
            <ListItem disablePadding sx={{}}>
                <StyledListItemButton component="a" href={'#home'}>
                    <ListItemIcon sx={{ minWidth: '0px' }}>
                        {mode === 'light' ? <LightMode onClick={(e) =>
                            setMode(mode === 'light' ? 'dark' : 'light')
                        }/> : <ModeNight onClick={(e) =>
                            setMode(mode === 'light' ? 'dark' : 'light')
                        }/>}
                    </ListItemIcon>
                </StyledListItemButton>
            </ListItem>
        )
    }
}

export default SwitchButton
