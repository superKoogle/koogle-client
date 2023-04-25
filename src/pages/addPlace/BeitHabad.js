import React from 'react'
import addPlace from './addPlace';
import { AuthContext } from "../../context/authContext"
import { Grid, TextField } from '@mui/material';
import CustomizedButton from '../../components/Button';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

const BeitHabad = () => {
  const { token, currentUser } = React.useContext(AuthContext);
  const validationSchema = yup.object({
    name: yup.string().required('name of Beit Habad'),
    address: yup.string().required('address of the Beit Habad'),
    hours: yup.string('open hours of the place'),
    phone: yup.string(),
    siteLink: yup.string().url().required("Link for the BeitHabad's site"),
    agent: yup.string().required()
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      hours: '00:00 - 00:00',
      phone: '',
      siteLink: '',
      agent:''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (!currentUser || !token) return;
      const type = 2;
      const userId = currentUser.user_id;
      //console.log('in submit');
      //console.log(values);
      const place = { ...values, type, userId };
      await addPlace(place, token);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} justifyContent='center'>

            <TextField
              id="name"
              name="name"
              type="string"
              label="name"
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <  TextField
              id="address"
              name="address"
              type="string"
              label="address"
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <  TextField
              id="hours"
              name="hours"
              type="string"
              label="open hours"
              onChange={formik.handleChange}
              error={formik.touched.hours && Boolean(formik.errors.hours)}
              helperText={formik.touched.hours && formik.errors.hours}
            />
            <  TextField
              id="siteLink"
              name="siteLink"
              type="string"
              label="site link"
              onChange={formik.handleChange}
              error={formik.touched.siteLink && Boolean(formik.errors.siteLink)}
              helperText={formik.touched.siteLink && formik.errors.siteLink}
            />
               <  TextField
              id="agent"
              name="agent"
              type="string"
              label="agent"
              onChange={formik.handleChange}
              error={formik.touched.agent && Boolean(formik.errors.agent)}
              helperText={formik.touched.agent && formik.errors.agent}
            />
             <  TextField
              id="phone"
              name="phone"
              type="string"
              label="agent phone number"
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12} justifyContent='center' >
            <CustomizedButton onClick={formik.handleSubmit} text='Submit' />
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default BeitHabad