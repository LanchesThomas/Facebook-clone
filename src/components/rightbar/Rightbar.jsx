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
import { useTheme } from '@material-ui/core/styles'
import React, { useState, useEffect } from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '10px',
    borderTopRightRadius: '0px',
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

const Rightbar = () => {
    const theme = useTheme()
    const [maxAvatars, setMaxAvatars] = useState(7)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setMaxAvatars(1)
            } else if (window.innerWidth < 960) {
                setMaxAvatars(3)
            } else if (window.innerWidth < 1280) {
                setMaxAvatars(5)
            } else {
                setMaxAvatars(7)
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
                    <Typography variant="h6" fontWeight={100}>
                        Online Friends
                    </Typography>
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
                <Typography>Latest Photos</Typography>
                <ImageList cols={3} ws={2} rowHeight={150}>
                    {postData.map((data) => (
                        <ImageListItem >
                            <img
                                src={`${data.img}`}
                                alt={'item.title'}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Box display={'flex'} flexDirection={'column'} mt={2}>
                    <Typography variant="h6" fontWeight={100}>
                        Latest Conversations
                    </Typography>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                        }}
                    >
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://picsum.photos/300/300"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {
                                            " — I'll be in your neighborhood doing errands this…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Travis Howard"
                                    src="https://picsum.photos/300/359"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {
                                            " — Wish I could come, but I'm out of town this…"
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="https://picsum.photos/300/358"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {
                                            ' — Do you have Paris recommendations? Have you ever…'
                                        }
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>
            </StyledBoxContent>
        </StyledBox>
    )
}

export default Rightbar
