import { TextField, TextFieldProps } from '@mui/material';
import InputPass from '../components/Inputs/InputPass';

/**
 * @Input Input base React MUI Textfield
 */
const Input = (props: TextFieldProps) => {
  return <TextField {...props} />;
};

Input.InputPass = InputPass;

export default Input;
