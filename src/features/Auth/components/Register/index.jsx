import { unwrapResult } from '@reduxjs/toolkit';
import { register } from "features/Auth/userSlice";
import { useSnackbar } from 'notistack';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import RegisterForm from "../RegisterForm";
//
Register.propTypes = {
    closeDialog: PropTypes.func,
}
//

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();


    const handleSubmit = async (values) => {
        //auto set username=email
        values.username = values.email;

        try {
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            // đóng dialog
            const {closeDialog} = props;
            if (closeDialog) {
                closeDialog();
            } 
            // đăng ký thành cong
            enqueueSnackbar('Uầy thành cong rồi à' , {variant: 'success'});  
        }
        catch (error) {
            // đăng ký thất bại
            console.log(error);
            enqueueSnackbar('Thất bại rồi cu' , {variant: 'error'});
        }
    }
    return (
        <div>
           <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}
export default Register;
