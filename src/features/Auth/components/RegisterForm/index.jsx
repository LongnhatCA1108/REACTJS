import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { makeStyles } from "@mui/styles";
import PasswordField from "components/form-controls/passwordField";
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from "../../../../components/form-controls/inputField";

const useStyles = makeStyles( (theme) => ({
    root: {
        position: "relative",
        paddingTop: "20px",
    },

    avatar: {
        margin: "0 auto",
        backgroundColor: "violet",
    },

    title: {
        textAlign: "center",
        margin: "10px 0px 20px 0px",
    },

    submit: {
        margin: "20px 0px 20px 0px",
    },
    progress: {
        position: 'absolute',
        top: '5px',
        left: '0px',
        right: '0px',
    },
}))

// tạo ra validate 
const schema = yup.object({
    fullName: yup.string()
    .required('Ơ Không có tên à, Nhập vào đê')
    .min(5, 'Ngắn như chim bạn vậy, dài lên')
    .test("Sai định dạng tên","Tên nươc nào lạ thế, làm lại đi",(value) => {
        const nameArray = value.split(" ").length;
        return nameArray >= 2 ? true : false;
    }),

    email: yup.string()
    .required("nhập mail vào")
    .email('Lừa à, mail gì lạ thế'),

    password: yup.string()
    .required('Nhập vào đi')
    .min(6,"dài lên, nó hack cho bây giờ"),

    retypePassword: yup.string()
    .required("Nhập lại mật khẩu đi").oneOf([yup.ref('password')], "Nhập sai rồi, kiểm tra lại xem")
  })
  .required()

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();

    const form = useForm({ //tạo ra form
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword:'',

        },
    resolver: yupResolver(schema),
    });

    
    //handle khi ta submit
    const handleSubmit = async (value) => {
        const { onSubmit } = props;
        if (onSubmit) await onSubmit(value);
    }
    
    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            
            {isSubmitting && <LinearProgress className={classes.progress} />}

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Tạo Tài Khoản Đê
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label='Tên Gì ?' form={form}  />
                <InputField name="email" label='Mail gì ?' form={form}  />
                <PasswordField name="password" label='Mật Khẩu' form={form}  />
                <PasswordField name="retypePassword" label='Nhập Lại coi' form={form}  />
                <Button 
                    disabled = {isSubmitting}
                    type = "submit" 
                    className = {classes.submit} 
                    variant = "contained" 
                    color = "primary" 
                    fullWidth
                >
                    Lẹt gô
                </Button>
            </form>

        </div>
        
    );
    
}

export default RegisterForm;