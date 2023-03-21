import * as React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomizedButton from '../../components/Button';
import { TextField } from '@mui/material';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});export default function Host(typeOf){  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: '****',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });  return (
    <div>
      <form onSubmit={formik.handleSubmit } >
        <TextField
        //   fullWidth
          id="email"
          name="email"
          label="Email"
          placeholder={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{margin:"30px"}}
        />
        <TextField
        //   fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{margin:"30px"}}
        /><br/>
        <CustomizedButton color="primary" variant="contained" fullWidth type="submit" text={"Submit"}/>
      </form>
    </div>
  );
};
ReactDOM.render(<Host />, document.getElementById('root'));