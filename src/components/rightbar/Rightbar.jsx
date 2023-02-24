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
import React from 'react'
import styled from '@emotion/styled'

const StyledBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '10px',
    borderTopRightRadius:'0px',
    width: '20%',
    maxWidth: '100%'
}))

const StyledBoxContent = styled(Box)({
    position: 'fixed',
    width: 'inherit',
    maxWidth: 'inherit'

})

const Rightbar = () => {
    return (
        <StyledBox
            p={4}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            justifyContent={'center'}
        >
            <StyledBoxContent >
                <Box width="80%">
                    <Typography variant="h6" fontWeight={100}>
                        Online Friends
                    </Typography>
                    <AvatarGroup max={7}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://picsum.photos/300/300"
                        />
                        <Avatar
                            alt="Travis Howard"
                            src="https://picsum.photos/300/359"
                        />
                        <Avatar
                            alt="Cindy Baker"
                            src="https://picsum.photos/300/358"
                        />
                        <Avatar alt="Agnes Walker" src="" />
                        <Avatar
                            alt="Trevor Henderson"
                            src="https://picsum.photos/300/341"
                        />
                        <Avatar
                            alt="Peter Dave"
                            src="https://picsum.photos/300/341"
                        />
                        <Avatar
                            alt="Sohie Park"
                            src="https://picsum.photos/300/341"
                        />
                        <Avatar
                            alt="Turley Smith"
                            src="https://picsum.photos/300/341"
                        />
                    </AvatarGroup>
                </Box>
                <Typography>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={150}>
                    <ImageListItem>
                        <img
                            src={`https://picsum.photos/300/221`}
                            alt={'item.title'}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`https://picsum.photos/300/223`}
                            alt={'item.title'}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`https://picsum.photos/300/225`}
                            alt={'item.title'}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`https://picsum.photos/300/228`}
                            alt={'item.title'}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`https://picsum.photos/300/229`}
                            alt={'item.title'}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`https://picsum.photos/300/230`}
                            alt={'item.title'}
                            loading="lazy"
                        />
                    </ImageListItem>
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
