import { Box, Stack, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Feed from './components/feed/Feed'
import Rightbar from './components/rightbar/Rightbar'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Add from './components/add/Add'
import { GlobalStyles } from '@mui/material'
import { useState } from 'react'

function App() {
    const [mode, setMode] = useState('light')

    const Darktheme = createTheme({
        palette: {
            mode: mode,
        },
    })

    return (
        <ThemeProvider theme={Darktheme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <GlobalStyles />
                <Navbar />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    gap={2}
                    sx={{ spacing: { xs: 0, sm: 2 } }}
                    my={2}
                    width={'100%'}
                >
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    )
}

export default App
