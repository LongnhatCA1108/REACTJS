import React from "react";
import PropTypes from 'prop-types';
import InputField from "../../../../components/form-controls/inputField";
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
// tạo ra validate 
const schema = yup.object({
    title: yup.string().required('Ơ quên mất à').min(5, 'Ngắn như chim bạn vậy, dài lên'),
  })
  .required()

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const onSubmit = props.onSubmit;
    const form = useForm({ //tạo ra form
        defaultValues: {
            title: ''
        },
    resolver: yupResolver(schema),
    });
    //handle khi ta submit
    const handleSubmit = (value) => {
        console.log('TodoForm: ', value)
        onSubmit(value);
        form.reset();
    }
    
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            TodoForm
            <InputField name="title" label='Todo' form={form}  ></InputField>
        </form>
    );
    
}

export default TodoForm;