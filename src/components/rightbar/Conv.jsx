import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material'
import convData from '../../data/convData.json'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledTypography = styled(Typography)({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

const StyledTitle = styled(Typography)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: 16px;
    }
`

const Conv = ({theme}) => {
    return (
        <Box display={'flex'} flexDirection={'column'} mt={2}>
            <StyledTitle variant="h6" fontWeight={100} theme={theme}>
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
                    <Box key={data.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={`${data.img}`} />
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
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {data.name}
                                        </StyledTypography>
                                        <StyledTypography
                                            component="span"
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
    )
}

export default Conv
