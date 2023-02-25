import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import postData from '../../data/postData.json'
import convData from '../../data/convData.json'
import { useTheme } from '@material-ui/core/styles'
import React, { useState, useEffect } from 'react'

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

const StyledAvatar = styled(Avatar)`
    overflow: visible;
    border-radius: 20px;

    & img {
        border-radius: 50%;
    }

    &:before {
        display: none;
        content: '${(props) => props.name}';
        position: absolute;
        top: -10px;
        width: 50px;
        font-size: 11px;
        background-color: ${(props) => props.theme.palette.common.white};
        color: ${(props) => props.theme.palette.common.black};
        text-align: center;
    }

    &:hover {
        &:before {
            display: block;
        }
    }
`

const StyledTypography = styled(Typography)({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})
const StyledTitle = styled(Typography)`
white-space:nowrap;
${(props) => props.theme.breakpoints.down('md')}{
    font-size: 16px
}
`


const Rightbar = () => {
    const theme = useTheme()
    const [maxAvatars, setMaxAvatars] = useState(7)
    const [MaxItem, setMaxItems] = useState(6)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setMaxAvatars(1)
            } else if (window.innerWidth < 960) {
                setMaxAvatars(3)
                setMaxItems(0)
            } else if (window.innerWidth < 1280) {
                setMaxAvatars(5)
                setMaxItems(3)
            } else {
                setMaxAvatars(7)
                setMaxItems(6)
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
                <Box
                    width="100%"
                    py={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    gap={2}
                >
                    <StyledTitle variant="h6" fontWeight={100}>
                        Online Friends
                    </StyledTitle>
                    <AvatarGroup max={maxAvatars} sx={{ overflow: 'visible' }}>
                        {postData.map((data) => (
                            <StyledAvatar
                                alt={`${data.name}`}
                                src={`${data.avatar}`}
                                key={`${data.id}`}
                                theme={theme}
                                name={data.name}
                            />
                        ))}
                    </AvatarGroup>
                </Box>
                <Box sx={{ display: { sm: 'none', lg: 'block' } }}>
                    <Typography>Latest Photos</Typography>
                    <ImageList cols={3} rowHeight={100}>
                        {postData.map(
                            (data, index) =>
                                index < MaxItem && (
                                    <ImageListItem>
                                        <img
                                            src={`${data.img}`}
                                            alt={'item.title'}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                )
                        )}
                    </ImageList>
                </Box>
                <Box display={'flex'} flexDirection={'column'} mt={2}>
                    <StyledTitle variant="h6" fontWeight={100} >
                        Latest Conversations
                    </StyledTitle>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                        }}
                    >
                        {convData.map((data) => (
                            <Box>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={`${data.img}`}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <StyledTypography>
                                                {data.title}
                                            </StyledTypography>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <StyledTypography
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {data.name}
                                                </StyledTypography>
                                                <StyledTypography
                                                    sx={{
                                                        display: {
                                                            sm: 'none',
                                                            lg: 'block',
                                                        },
                                                    }}
                                                >
                                                    {data.content}
                                                </StyledTypography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </Box>
                        ))}
                    </List>
                </Box>
            </StyledBoxContent>
        </StyledBox>
    )
}

export default Rightbar
