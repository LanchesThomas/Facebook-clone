import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    Collapse,
    IconButton,
    Typography,
} from '@mui/material'
import {
    ExpandMore,
    Favorite,
    FavoriteBorder,
    MoreVert,
    Share,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import postData from '../../data/postData.json'
import { useTheme } from '@mui/material/styles'

const StyledCard = styled(Card)`
    box-shadow: none;
    background-color: transparent;
    width: 100%;
    max-width: 100%;
    overflow: visible;

    ${(props) => props.theme.breakpoints.down('sm')} {
        & :nth-child(1) {
            border-top: none;
        }
    }
`

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    color: 'white',
    border: '1px solid white',
}))
const StyledFavorite = styled(Favorite)(({ theme }) => ({
    color: theme.palette.primary.light,
}))

const StyledTypography = styled(Typography)({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

const StyledBox = styled(Box)`
    border: 1px solid ${(props) => props.theme.palette.primary.light};
    border-radius: 10px;

    ${(props) => props.theme.breakpoints.down('sm')} {
        border-right: none;
        border-left: none;
        border-radius: 0px;
    }

    width: 100%;
`

const Post = () => {
    const theme = useTheme()
    return (
        <StyledCard theme={theme}>
            {postData.map((data) => (
                <StyledBox sx={{ mb: 2 }} key={data.id} theme={theme}>
                    <CardHeader
                        sx={{}}
                        avatar={
                            <StyledAvatar
                                aria-label="recipe"
                                src={data.avatar}
                            ></StyledAvatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVert />
                            </IconButton>
                        }
                        title={`${data.name}`}
                        subheader={`${data.date}`}
                    />
                    <CardMedia
                        component="img"
                        sx={{ height: '20%', width: '100%' }}
                        image={`${data.img}`}
                        alt={`${data.name}-image`}
                    />
                    <CardContent>
                        <StyledTypography
                            variant="body2"
                            color="text.secondary"
                        >
                            {data.content}
                        </StyledTypography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Checkbox
                                icon={<FavoriteBorder />}
                                checkedIcon={<StyledFavorite />}
                            />
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>
                    </CardActions>
                </StyledBox>
            ))}
        </StyledCard>
    )
}

export default Post
