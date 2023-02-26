import { styled } from '@mui/material/styles'
import { useTheme } from '@material-ui/core/styles'
import { Box, List } from '@mui/material'
import Listitem from './Listitem'
import SwitchButton from './SwitchButton'

const StyledBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '10px',
    borderTopLeftRadius: '0px',
    borderLeft: `none`,
    justifyContent: 'center',
    paddingLeft: 0,
}))

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
                    <Listitem theme={theme} />
                    <SwitchButton setMode={setMode} mode={mode} />
                </List>
            </Box>
        </StyledBox>
    )
}

export default Sidebar
