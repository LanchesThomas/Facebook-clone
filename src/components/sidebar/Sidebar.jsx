import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { Box, List } from '@mui/material'
import Listitem from './Listitem'
import SwitchButton from './SwitchButton'
import { useWindowSize } from '../../utils/hooks/useWindowSize'
import { useState, useEffect } from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '10px',
    borderTopLeftRadius: '0px',
    borderLeft: `none`,
    justifyContent: 'center',
    paddingLeft: 0,
}))

const StyledBoxSm = styled(Box)`
    position: fixed;
    top: 50px;
    width: 100%;
    height: 7%;
    z-index: 10;
        
`

const StyledListSm = styled(List)`
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: ${(props) =>
        props.mode === 'light' ? '#FFF' : '#121212'};

    ${(props) => props.theme.breakpoints.down('md')} {
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
const StyledBoxListSm = styled(Box)`
    width: 100%;
    height: 100%;

    ${(props) => props.theme.breakpoints.down('md')} {
        display: flex;
    }
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`

const Sidebar = ({ setMode, mode }) => {
    const theme = useTheme()
    const screenWidth = useWindowSize().width
    const [isLarge, setIsLarge] = useState(false)
    useEffect(() => {
        screenWidth >= 600 ? setIsLarge(true) : setIsLarge(false)
    }, [screenWidth])

    if (isLarge) {
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
    } else {
        return (
            <StyledBoxSm mode={mode}>
                <StyledBoxListSm sx={{ width: 'inherit', maxWidth: 'inherit' }}>
                    <StyledListSm mode={mode}>
                        <Listitem theme={theme} />
                        <SwitchButton setMode={setMode} mode={mode} />
                    </StyledListSm>
                </StyledBoxListSm>
            </StyledBoxSm>
        )
    }
}

export default Sidebar
