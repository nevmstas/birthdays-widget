import { Box, Link } from '@material-ui/core'
import React from 'react'

export const Navbar = () =>{
    return (
        <Box display='flex' width='400px' justifyContent='space-between' textAlign='center' ml='auto' mr='auto'>
            <Link href='#'>PAST <br /> dates</Link>
            <Link href='#'>TODAY</Link>
            <Link href='#'>UPCOMING <br /> dates</Link>
        </Box>  
    )
}