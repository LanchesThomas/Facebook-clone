import {
  Button,
  ButtonGroup,
    Fab,
    Modal,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, AddAPhoto, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import postData from '../../data/postData.json'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip 
                onClick={(e) => {
                    setOpen(true)
                }}
                title="delete"
                sx={{
                    position: 'fixed',
                    bottom: '50px',
                    left: { xs: 'calc(50% - 25px)', md: '30px' },
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => {
                    setOpen(false)
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                bgcolor={"background.default"} color={"text.primary"}
                    width={400}
                    height={400}
                   
                    borderRadius={2}
                    padding={5}
                >
                    <Typography
                        variant="h6"
                        color={'grey'}
                        textAlign={'center'}
                    >
                        Create Post
                    </Typography>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's on your mind ?"
                        variant="standard"
                    />
                    <Stack gap={1} direction={'row'} my={2}>
                        <EmojiEmotions color="primary"/>
                        <AddAPhoto color="secondary"/>
                        <PersonAdd color="success"/>
                        <VideoCameraBack color="error"/>
                    </Stack>
                    <ButtonGroup fullWidth aria-label="outlined primary button group" >
                      <Button variant="contained" sx={{color:'white', width: "75%"}} >
                        POST
                      </Button>
                      <Button variant="contained" sx={{color:'white', width:"25%"}}>
                        <DateRange />
                      </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add
