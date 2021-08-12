import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckBoxx() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { NEW, USED, COLLECTIBLE ,RENEWED} = state;
  const error = [NEW, USED, COLLECTIBLE,RENEWED].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Condition</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={NEW} onChange={handleChange} name="NEW" />}
            label="NEW"
          />
          <FormControlLabel
            control={<Checkbox checked={USED} onChange={handleChange} name="USED" />}
            label="USED"
          />
          <FormControlLabel
            control={<Checkbox checked={COLLECTIBLE} onChange={handleChange} name="COLLECTIBLE" />}
            label="COLLECTIBLE"
          />
          <FormControlLabel
            control={<Checkbox checked={RENEWED} onChange={handleChange} name="RENEWED" />}
            label="RENEWED"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}