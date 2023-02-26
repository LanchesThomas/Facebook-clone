import { Box } from '@mui/material'
import React from 'react'
import Post from '../card/Post'

const Feed = () => {
    return <Box sx={{ width: { xs: '100%', sm: '60%' } }}  >
        <Post />
    </Box>
}

export default Feed
