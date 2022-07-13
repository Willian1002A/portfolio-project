import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { HorizontalHeader, VerticalHeader } from "./TypeHeader";
import openCloseHeader from "../../core/openCloseHeader";
interface headerProps{
    className?: string;
    classContent?: string;
    id?: string;
}
export default function Header(props: headerProps) {
    return (
        <Box 
            id={props.id}
            className={`header ${props.className}`}
            onMouseEnter={(obj) => openCloseHeader(true) }
            onMouseLeave={(obj) => openCloseHeader(false) }
            >
            <Toolbar variant="dense" className={`contentHeader ${props.className}`}>
                <HorizontalHeader />
                <VerticalHeader />
            </Toolbar>
        </Box>
    )
}
