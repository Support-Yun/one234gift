import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import axios from 'axios';

// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    employeeId: Yup.string().required('사원의 전화번호를 입력해주세요'),
    password: Yup.string().required('비밀번호를 입력해주세요.')
  });

  const formik = useFormik({
    initialValues: {
      employeeId: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      handleLogin((data)=>{
        setTokens(data);
        navigate('/dashboard', { replace: true });
      },
      (msg)=>{
        if(msg.error_description === '자격 증명에 실패하였습니다.'){
          alert('전화번호 혹은 비밀번호를 다시 확인해주세요.');
          setSubmitting(false);
        }
      });
    }
  });

  function setTokens(tokens){
      localStorage.setItem("access_token", tokens.access_token);
      localStorage.setItem("refresh_token", tokens.refresh_token);
      localStorage.setItem("identifier", tokens.identifier);
  }

  const { errors, touched, isSubmitting, setSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = (success, fail) => {
    const loginInfo ={
      username : formik.values.employeeId.trim(),
      password : formik.values.password.trim(),
      grant_type : 'password'
    }

    axios.post('http://10.202.36.105:8000/oauth/token', null, {
      params : loginInfo,
      auth: {
        username: 'one234gift',
        password: '1234'
      },
      headers: { 'Content-type': 'application/x-www-form-urlencoded', }
    }).then(({data})=>{
      success(data);
    }).catch(({response}) =>{
        fail(response.data);
    });
  }

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            type="text"
            label="전화번호"
            {...getFieldProps('employeeId')}
            error={Boolean(touched.employeeId && errors.employeeId)}
            helperText={touched.employeeId && errors.employeeId}
          />

          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label="비밀번호"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>
        <br/>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          로그인
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
