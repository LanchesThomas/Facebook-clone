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
import { useTheme } from '@material-ui/core/styles'

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    maxWidth: '100%',
    overflow: 'visible',
}))

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    color: 'white',
    border: '1px solid white',
}))
const StyledFavorite = styled(Favorite)(({ theme }) => ({
    color: theme.palette.primary.main,
}))

const StyledTypography = styled(Typography)({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

const StyledBox = styled(Box)`
    border: 1px solid ${(props) => props.theme.palette.primary.light};
    border-radius: 10px;

    ${(props) => props.theme.breakpoints.down('xs')} {
        border-right: none;
        border-left: none;
        border-radius: 0px;
    }

    width: 100%;
`

const Post = () => {
 
    return (
        <StyledCard>
            {postData.map((data) => (
                <StyledBox sx={{ mb: 2 }} key={data.id}>
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
