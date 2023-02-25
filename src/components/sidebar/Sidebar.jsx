import sidebarData from '../../data/sidebarData.json'
import { styled } from '@mui/material/styles'
import { useTheme } from '@material-ui/core/styles'

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

const StyledBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '10px',
    borderTopLeftRadius: '0px',
    borderLeft: `none`,
    justifyContent: 'center',
    paddingLeft: 0,
}))

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    gap: '10%',
    [theme.breakpoints.down('xl')]: {
        flexDirection: 'column',
    },
}))
const StyledListItemText = styled(ListItemText)`

${(props) => props.theme.breakpoints.down('md')}{
  & span {
    font-size: 12px
  }
}
${(props) => props.theme.breakpoints.down('sm')}{
  & span {
    display:none
  }
}




}
`

const Sidebar = ({ setMode, mode }) => {
    const theme = useTheme()

    return (
        <StyledBox
            p={2}
            sx={{ display: { xs: 'none', sm: 'block', width: '10%' } }}
        >
            <Box
                position={'fixed'}
                sx={{ width: 'inherit', maxWidth: 'inherit' }}
            >
                <List>
                    {sidebarData.map((data) => (
                        <ListItem disablePadding sx={{}}>
                            <StyledListItemButton component="a" href={'#home'}>
                                <ListItemIcon sx={{ minWidth: '0px' }}>
                                    {data.icon === 'Home' && <Home />}
                                    {data.icon === 'Article' && <Article />}
                                    {data.icon === 'Group' && <Group />}
                                    {data.icon === 'StoreFront' && (
                                        <Storefront />
                                    )}
                                    {data.icon === 'Person' && <Person />}
                                    {data.icon === 'Settings' && <Settings />}
                                    {data.icon === 'Portrait' && <Portrait />}
                                </ListItemIcon>
                                <StyledListItemText
                                    primary={`${data.title}`}
                                    theme={theme}
                                />
                            </StyledListItemButton>
                        </ListItem>
                    ))}

                    <ListItem disablePadding sx={{ mt: '10px' }}>
                        <StyledListItemButton component="a" href={'#home'}>
                            <ListItemIcon sx={{ minWidth: '0px' }}>
                                {mode === 'light' ? (
                                    <LightMode />
                                ) : (
                                    <ModeNight />
                                )}
                            </ListItemIcon>
                            <Switch
                                onChange={(e) =>
                                    setMode(mode === 'light' ? 'dark' : 'light')
                                }
                            />
                        </StyledListItemButton>
                    </ListItem>
                </List>
            </Box>
        </StyledBox>
    )
}

export default Sidebar
