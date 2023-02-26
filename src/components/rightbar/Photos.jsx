import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import postData from '../../data/postData.json'

const Photos = ({ maxItem, maxCols }) => {
    return (
        <Box >
            <Typography>Latest Photos</Typography>
            <ImageList cols={maxCols} rowHeight={100}>
                {postData.map(
                    (data, index) =>
                        index < maxItem && (
                            <ImageListItem key={data.id}>
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
    )
}

export default Photos
