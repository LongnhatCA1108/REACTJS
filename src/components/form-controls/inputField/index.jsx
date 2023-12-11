import React from "react";
import PropTypes from 'prop-types';
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

InputField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   disabled: PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disabled} = props;
    const {formState:{errors}} = form;
    // const hasError = formState.touchedFields[name] && errors[name]
    //console.log(errors.title?.message)
    return (
        <Controller
            name={name}
            control={form.control}
            disabled = {disabled} 
            render = {
                ({field}) => 
                <TextField 
                {...field} 
                label={label} 
                margin='normal'
                fullWidth 
                variant="outlined"
                error={Object.hasOwn(errors,name)}
                helperText={Object.hasOwn(errors,name) ? errors[name].message : ""}
                />}
        />
    );
    
}

export default InputField;