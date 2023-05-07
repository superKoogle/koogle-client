import React from 'react'
import addPlace from './addPlace';
import { AuthContext } from "../../context/authContext"
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Card } from '@mui/material';
import CustomizedButton from '../../components/Button';
import { Formik, useFormik } from 'formik';
import Rating from '@mui/material/Rating';
import * as yup from 'yup';
import Picture from '../upload/picture';

const Restaurant = () => {
  const [picture,setPicture] = React.useState("");
  const { token, currentUser } = React.useContext(AuthContext);
  const validationSchema = yup.object({
    name: yup.string().required('name of Beit Habad'),
    address: yup.string().required('address of the Beit Habad'),
    hours: yup.string('open hours of the place'),
    phone: yup.string(),
    siteLink: yup.string().url().required("Link for the BeitHabad's site"),
    resType: yup.number().required(),
    kosher: yup.string().required(),
    stars: yup.number()
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      hours: '00:00 - 00:00',
      phone: '',
      siteLink: '',
      resType: 1,
      kosher: '',
      stars: 0
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(picture);
      if (!currentUser || !token) return;
      const type = 4;
      const userId = currentUser.user_id;
      //console.log('in submit');
      //console.log(values);
      const place = { ...values, type, userId, image:picture };
      await addPlace(place, token);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card sx={{margin:'auto', marginTop: 9, padding: 5, width:'70%'}}>
        <Grid container spacing={3}>
         
<Grid xs={4} item>
            <TextField
              id="name"
              name="name"
              type="string"
              label="name"
              required
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            /></Grid>
            <Grid xs={4} item>
            <  TextField
              id="address"
              name="address"
              type="string"
              label="address"
              required
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            /></Grid>
            <Grid xs={4} item>
            <  TextField
              id="hours"
              name="hours"
              type="string"
              label="open hours"
              onChange={formik.handleChange}
              error={formik.touched.hours && Boolean(formik.errors.hours)}
              helperText={formik.touched.hours && formik.errors.hours}
            /></Grid>
            <Grid xs={4} item>
            <  TextField
              id="siteLink"
              name="siteLink"
              type="string"
              label="site link"
              onChange={formik.handleChange}
              error={formik.touched.siteLink && Boolean(formik.errors.siteLink)}
              helperText={formik.touched.siteLink && formik.errors.siteLink}
            /></Grid>
            <Grid xs={4} item>
            <  TextField
              id="phone"
              name="phone"
              type="string"
              label="agent phone number"
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            /></Grid>
            <Grid xs={4} item>
            <  TextField
              id="kosher"
              name="kosher"
              type="string"
              label="kosher"
              required
              onChange={formik.handleChange}
              error={formik.touched.kosher && Boolean(formik.errors.kosher)}
              helperText={formik.touched.kosher && formik.errors.kosher}
            /></Grid>
            <Grid xs={4} item>
            <FormControl sx={{ width:'100%' }}>
              <InputLabel id="_nusach">type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="resType"
                value={formik.values.resType}
                name="resType"
                label="resType"
                onChange={formik.handleChange}
                error={formik.touched.resType && Boolean(formik.errors.resType)}
                helperText={formik.touched.resType && formik.errors.resType}
              >
                <MenuItem value={1}>Milky</MenuItem>
                <MenuItem value={2}>Meat</MenuItem>
                <MenuItem value={3}>Fur</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid xs={4} item>
            <Rating 
            id='stars'
            value={formik.values.stars}
            name='stars'
            label='rating for restaurant'
            onChange={formik.handleChange}
            helperText={formik.touched.stars && formik.errors.stars}
             /></Grid>
              <Grid xs={4} item>
          <Picture picture={picture} setPicture={setPicture}/>
          </Grid>
          <Grid item xs={12} justifyContent='center' >
            <CustomizedButton onClick={formik.handleSubmit} text='Submit'/>
          </Grid>
        </Grid>
        </Card>
      </form>
    </>
  )
}

export default Restaurant