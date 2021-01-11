import {
  FormControlLabel,
  FormGroup,
  Switch,
  withStyles,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsUsa } from "../../features/usaSlice";

import "./SwitchUs.css";

const PurpleSwitch = withStyles({
  switchBase: {
    color: blue[300],
    "&$checked": {
      color: blue[500],
    },
    "&$checked + $track": {
      backgroundColor: blue[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

function SwitchUs() {
  const [checkState, setCheckState] = useState(false);
  const usaDispatch = useDispatch();

  const handleChange = (e) => {
    setCheckState(e.target.checked);
  };

  useEffect(() => {
    if (checkState) {
      usaDispatch(setIsUsa({ isUsa: true }));
    } else {
      usaDispatch(setIsUsa({ isUsa: false }));
    }
  }, [checkState]);

  return (
    <div className="switchUs">
      <FormGroup>
        <FormControlLabel
          control={
            <PurpleSwitch checked={checkState} onChange={handleChange} />
          }
          label="US Only"
        />
      </FormGroup>
    </div>
  );
}

export default SwitchUs;
