import { useState } from 'react';
import { IconButton, TextField, TextFieldProps } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

/**
 * @InputPass Input para passwords
 */
const InputPass = (props: TextFieldProps) => {
  const [viewPass, setViewPass] = useState<boolean>(false);

  const toggleViewPass = () => setViewPass(!viewPass);

  return (
    <TextField
      type={viewPass ? 'text' : 'password'}
      {...props}
      InputProps={{
        endAdornment: (
          <IconButton onClick={toggleViewPass} disableRipple>
            {viewPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        ),
      }}
    />
  );
};

export default InputPass;
