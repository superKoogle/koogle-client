import * as React from 'react'
import addPlace from './addPlace';
import {AuthContext} from "../../context/authContext"
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CustomizedButton from '../../components/Button';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';

const Synagogue = () => {
     
    const {token, currentUser} = React.useContext(AuthContext);
    const validationSchema = yup.object({
        name: yup.string().required('name of synagogue'),
        address: yup.string().required('address of the synagogue'),
        hours: yup.string('00:00 - 00:00'),
        nusach: yup.number()
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            hours: '',
            nusach: 1
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if(!currentUser || !token)return;
            const type = 1;
            const userId = currentUser.user_id;
            console.log('in submit');
            console.log(values);
            const place = {...values, type, userId};
            await addPlace(place, token);
        }
    });


    return (
        <>
            <form onSubmit={formik.handleSubmit }>
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
                    <FormControl  sx={{minWidth: 170 }}>
                        <InputLabel id="_nusach">nusach</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="nusach"
                            value={formik.values.nusach}
                            name="nusach"
                            label="nusach"
                            onChange={formik.handleChange}
                        error={formik.touched.nusach && Boolean(formik.errors.nusach)}
                        helperText={formik.touched.nusach && formik.errors.nusach}
                        >
                            <MenuItem value={1}>Ashcenaz</MenuItem>
                            <MenuItem value={2}>Sfarad</MenuItem>
                            <MenuItem value={3}>Edot Hamizrah</MenuItem>
                        </Select>
                    </FormControl>
                  
                          </Grid>
                          <Grid item  xs={12} justifyContent='center' >
                              <CustomizedButton onClick={formik.handleSubmit} text='Submit'/>
                        </Grid>
                  </Grid>
                  </form>
                  </>)}
            
export default Synagogue