import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "10px 0px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ToggleProfileInfo = ({ title, value1, value2, link, exp }) => {
  const [value, setValue] = React.useState(value1);
  const [ex, setEx] = useState(exp);
  const expandHandler = () => {
    setEx(!ex);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  

  const classes = useStyles();
  return (
    <div className="my-3">
      <Accordion
        onClick={expandHandler}
        expanded={exp && ex}
        style={{ backgroundColor: "#EDEFF7" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={link ? `${link}` : "/profile"}
              >
                <FormControlLabel
                  value={value1}
                  control={<Radio />}
                  label={value1}
                />
              </Link>
              {value2 && (
                <FormControlLabel
                  value={value2}
                  control={<Radio />}
                  label={value2}
                />
              )}
            </RadioGroup>
          </FormControl>

          <Divider />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ToggleProfileInfo;
