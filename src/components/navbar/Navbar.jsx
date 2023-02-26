import { AppBar } from '@mui/material'
import React, { useState } from 'react'
import ClickMenu from './ClickMenu'
import ToolBar from './ToolBar'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <ToolBar setOpen={setOpen} />
            <ClickMenu setOpen={setOpen} open={open} />
        </AppBar>
    )
}

export default Navbar
