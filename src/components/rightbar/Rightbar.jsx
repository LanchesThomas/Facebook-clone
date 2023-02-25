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
import { styled } from '@mui/material/styles'
import postData from '../../data/postData.json'
import { useTheme } from '@material-ui/core/styles'

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
        text-align:center;
    }

    &:hover {
        &:before {
            display: block;
        }
    }
`

const Rightbar = () => {
    const theme = useTheme()
    return (
        <StyledBox
            p={4}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            justifyContent={'center'}
            width='20%'
            
        >
            <StyledBoxContent>
                <Box width="100%" py={2} display='flex' flexDirection='column' justifyContent='space-around' gap={2} sx={{border:`2px solid ${theme.palette.background.default}`}}>
                    <Typography variant="h6" fontWeight={100} sx={{border:'2px solid red'}}>
                        Online Friends
                    </Typography>
                    <AvatarGroup max={7} sx={{ overflow: 'visible', border:'2px solid green' }}>
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
