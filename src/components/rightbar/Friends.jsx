import { styled } from '@mui/material/styles'
import { Avatar, AvatarGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import postData from '../../data/postData.json'

const StyledTitle = styled(Typography)`
    white-space: nowrap;
    ${(props) => props.theme.breakpoints.down('sm')} {
        font-size: 16px;
    }
`

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

const Friends = ({ maxAvatars, theme }) => {
    return (
        <Box
            width="100%"
            py={2}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            gap={2}
        >
            <StyledTitle variant="h6" fontWeight={100} theme={theme}>
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
    )
}

export default Friends
