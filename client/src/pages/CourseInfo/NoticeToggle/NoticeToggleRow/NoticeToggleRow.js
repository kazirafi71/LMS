import { Divider, Typography } from '@material-ui/core';
import React from 'react';
import Styles from './NoticeToggleRow.module.css'

const NoticeToggleRow = ({Icon,title,description}) => {
    
    return (
        <>
        <div className={Styles.NoticeToggleRow}>
            <div className={Styles.title__style}>
                <Icon className="mr-2" style={{color:"#CD5C5C"}} />
                <Typography variant='subtitle1'>
                    {title}
                </Typography>
            </div>
            <Typography className="ml-4" color='textSecondary' variant="subtitle1">
                {description}
            </Typography>
            
        </div>
        
        </>
    );
};

export default NoticeToggleRow;