import React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import '../css/accueil.css';

const Accueil = () => {
    return (
        <div className="Coco">

            <div className="Coco-container">

            <Link to="/login">

            <Button variant="contained" className="b1">
             Get Started 
            </Button>

            </Link>
            
            </div>

        </div>
    );
};

export default Accueil;