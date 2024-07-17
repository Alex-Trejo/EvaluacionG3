import React from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Icon from '@mui/material/Icon';

function Footer() {
    return (
        <footer class="bg-gradient-to-r from-customized-400 to-customized-800 text-white p-4 text-center">
        <div class="flex space-x-4 place-content-center" >
            <Icon component={InstagramIcon} />
            <Icon component={FacebookIcon} />
            <Icon component={XIcon}/>

        </div>
            <p>© 2024 City Threads</p>
            
        </footer>
    );
}

export default Footer;