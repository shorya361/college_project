import React, { Component } from 'react';
import classes from './Footer.module.css';
import images1 from '../../assest/images/images1.jpg'
class Footer extends Component{
    render(){
    return (
        <footer className={classes.Footer}>
            <img src={images1} alt="photo2" className={classes.img} />
            <div className={classes.grid}>
                <ul className={classes.ul}>
                    <li className={classes.list}>About Us </li>
                    <li className={classes.list}>Contact Us Email:shivani.kumawat98@gmail.com</li>
                    <li className={classes.list}>Company </li>
                </ul>
                
                <div className={classes.paragraph}>
                    <p className={classes.parahraph_content}>
                        Note: All information on Interconnected Healthcare® is for educational purposes only. For specific medical advice, diagnoses, and treatment, consult your doctor.
                        ©All rights reserved.
                    </p>
                </div>
                </div>
        </footer>
    )
    }
}

export default Footer;