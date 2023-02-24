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
import styled from '@emotion/styled'
import postData from '../../data/postData.json'

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    backgroundColor: 'transparent'
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

const StyledBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: '10px',
}))

const Post = () => {
    return (
        <StyledCard sx={{maxWidth: 1000}}>
            {postData.map((data) => (
                <StyledBox sx={{ mb: 2 }} key={data.name}>
                    <CardHeader
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
                        height="20%"
                        width= '80%'
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
