import React from 'react'
import addPlace from './addPlace';
import { AuthContext } from "../../context/authContext"
import { Grid, TextField} from '@mui/material';
import CustomizedButton from '../../components/Button';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import {Card} from '@mui/material';
import Picture from '../upload/picture';

const Supermarket = () => {
  const [picture,setPicture] = React.useState("");
  const { token, currentUser } = React.useContext(AuthContext);
  const validationSchema = yup.object({
    name: yup.string().required('name of supermarket'),
    address: yup.string().required('address of the supermarket'),
    hours: yup.string('00:00 - 00:00'),
    phone: yup.string(),
    siteLink: yup.string().url().required("Link for the supermarket's site")
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      hours: '',
      phone: '',
      siteLink: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (!currentUser || !token) return;
      const type = 3;
      const userId = currentUser.user_id;
      console.log('in submit');
      console.log(values);
      const place = { ...values, type, userId , image:picture };
      await addPlace(place, token);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
      <Card sx={{ minWidth: 275 , margin:9, padding:5}}>
        <Grid container spacing={3} justifyContent='center'>
         
<Grid xs={3} item>

            <TextField
              id="name"
              name="name"
              type="string"
              label="name"
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            </Grid>
            <Grid xs={3} item>
            <  TextField
              id="address"
              name="address"
              type="string"
              label="address"
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            </Grid>
            <Grid xs={3} item>
            <  TextField
              id="hours"
              name="hours"
              type="string"
              label="open hours"
              onChange={formik.handleChange}
              error={formik.touched.hours && Boolean(formik.errors.hours)}
              helperText={formik.touched.hours && formik.errors.hours}
            />
            </Grid>
            <Grid xs={3} item>
            <  TextField
              id="phone"
              name="phone"
              type="string"
              label="phone number"
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            </Grid>
            <Grid xs={3} item>
            <  TextField
              id="siteLink"
              name="siteLink"
              type="string"
              label="site link"
              onChange={formik.handleChange}
              error={formik.touched.siteLink && Boolean(formik.errors.siteLink)}
              helperText={formik.touched.siteLink && formik.errors.siteLink}
            />
          </Grid>
          
            <Grid xs={3} item>
          <Picture picture={picture} setPicture={setPicture}/>
          </Grid>
          <Grid item xs={12} justifyContent='center' >
            <CustomizedButton onClick={formik.handleSubmit} text='Submit' />
          </Grid>
        </Grid>
        </Card>
      </form>
    </>
  )
}

export default Supermarket