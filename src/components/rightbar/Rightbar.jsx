import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Friends from './Friends'
import Photos from './Photos'
import Conv from './Conv'
import { useEffect, useState } from 'react'
import { useTheme } from '@material-ui/core'

const StyledBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '10px',
    borderTopRightRadius: '0px',
    borderRight: 'none',
    width: '20%',
    maxWidth: '100%',
}))

const StyledBoxContent = styled(Box)({
    position: 'fixed',
    width: 'inherit',
    maxWidth: 'inherit',
})

const Rightbar = () => {
    const [maxAvatars, setMaxAvatars] = useState(7)
    const [maxItem, setMaxItems] = useState(6)
    const [maxCols, setMaxCols] = useState(6)
    const theme = useTheme()


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setMaxAvatars(2)
            } else if (window.innerWidth < 960) {
                setMaxAvatars(3)
                setMaxCols(1)
            } else if (window.innerWidth < 1280) {
                setMaxItems(4)
                setMaxCols(2)
                setMaxAvatars(5)
            } else {
                setMaxItems(6)
                setMaxAvatars(7)
                setMaxCols(3)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <StyledBox
            px={4}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            justifyContent={'center'}
            width="20%"
        >
            <StyledBoxContent>
                <Friends maxAvatars={maxAvatars} theme={theme} />
                <Photos maxItem={maxItem} maxCols={maxCols}/>
                <Conv theme={theme}/>
            </StyledBoxContent>
        </StyledBox>
    )
}

export default Rightbar
