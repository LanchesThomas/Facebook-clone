import { styled } from '@mui/material/styles'

import {
    Article,
    Group,
    Home,
    Person,
    Portrait,
    Settings,
    Storefront,
} from '@mui/icons-material'
import {
    ListItemIcon,
    ListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import sidebarData from '../../data/sidebarData.json'

const StyledListItemButton = styled(ListItemButton)`
    gap: 10%;
    flex-direction: column;
    ${(props) => props.theme.breakpoints.down('md')} {
        height: 100%;
    }
`
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

const Listitem = ({ theme }) => {
    return (
        <>
            {sidebarData.map((data) => (
                <ListItem disablePadding key={data.id}>
                    <StyledListItemButton component="a" href={'#home'}>
                        <ListItemIcon sx={{ minWidth: '0px' }}>
                            {data.icon === 'Home' && <Home />}
                            {data.icon === 'Article' && <Article />}
                            {data.icon === 'Group' && <Group />}
                            {data.icon === 'StoreFront' && <Storefront />}
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
        </>
    )
}

export default Listitem
