import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NoticeToggleRow from './NoticeToggleRow/NoticeToggleRow';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { toggleTitle } from '../ToggleData/ToggleData';
import { Divider } from '@material-ui/core';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ExtensionIcon from '@material-ui/icons/Extension';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin:"10px 0px",
    

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));



const NoticeToggle = ({exp}) => {
    const classes = useStyles();
  
    return (
        <div>
          {
            toggleTitle.map(({id,title})=>{
              return(
                <div key={id} className={classes.root}>
                <Accordion style={{backgroundColor:"#EDEFF7"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>{title}</Typography>
                  </AccordionSummary>
                  <Typography className='mx-3 my-2' variant="h6">{title}</Typography>
                  <Typography className='mx-5 my-2' variant="h6">Lesson Materials</Typography>
                  <AccordionDetails>
                    
                    
                    <NoticeToggleRow
                    
                    Icon={NoteAddIcon}
                    title="Course Announcement"
                    description="General news and announcements from the teachers for the students of the course. Teachers will use this activity to post course updates and students are automatically subscribed to this announcement for quick updates."
                    />
                    <Divider/>
                    </AccordionDetails>
                    <AccordionDetails>
                    <NoticeToggleRow
                    
                    Icon={MovieFilterIcon}
                    title="
                    Lesson Document (Presentation)File"
                    description="This is the main material from the teacher on the lesson. This can be a Word Document, PDF, or PowerPoint document. Simply edit this activity and attach the document file in the files section. Teachers may use the description field to provide additional guidelines to students on how to go through the document."
                    />
                    <Divider/>
                    </AccordionDetails>
                    <AccordionDetails>
                    <NoticeToggleRow
                    
                    Icon={ExtensionIcon}
                    title="External resource for the lessonURL"
                    description="Click on Edit and replace the Title and external url to add external resources relevant to the lesson."
                    />
                    <Divider/>
                    </AccordionDetails>
                    <AccordionDetails>
                    <Typography variant="h6">
                    Lesson Activities
                    </Typography>
                    <AccordionDetails>
                      <Divider/>
                    </AccordionDetails>
                    </AccordionDetails>
                    <AccordionDetails>
                    <NoticeToggleRow
                    
                    Icon={InsertCommentIcon}
                    title="Discussion on the Lesson"
                    description='Use discussion forum to engage students in discussion relevant to the lesson topics. It is good way to engage them in peer studies and help each other out on their learning along with the teacher. There are several forum types. This one is a Q and A discussion forum where students can ask questions and answers one another. The teacher may also provide them feedback on their submission. It is better to create a few discussion threads asking some questions for the students to reply back. To do it, click on "Add a new question" button. Click on edit to change the settings to customize according to need.'
                    />
                    <Divider/>
                  </AccordionDetails>
                </Accordion>
                
                
              </div>

              )
            })
          }
            
            
        </div>
    );
};

export default NoticeToggle;