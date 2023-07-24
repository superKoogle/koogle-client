import * as React from 'react'
import addPlace from './addPlace';
import { AuthContext } from "../../context/authContext"
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CustomizedButton from '../../components/Button';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import Picture from '../upload/picture';
import { Card } from '@mui/material';

const Synagogue = () => {
    const [picture, setPicture] = React.useState("");
    const { token, currentUser } = React.useContext(AuthContext);
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
            if (!currentUser || !token) return;
            const type = 1;
            const userId = currentUser.user_id;
            console.log('in submit');
            console.log(values);
            const place = { ...values, type, userId, image: picture };
            await addPlace(place, token);
        }
    });


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Card sx={{ margin: 'auto', marginTop: 9, padding: 5, width: '70%' }}>
                    <Grid container spacing={2}>
                        <Grid xs={4} item>
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
                        <Grid xs={4} item>
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
                        <Grid xs={4} item>
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
                        <Grid xs={4} item>
                            <FormControl sx={{width:'100%', padding:'16px 0px 0px 16px'}}>
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
                        <Grid xs={4} item>
                            <Picture picture={picture} setPicture={setPicture} />
                        </Grid>
                        <Grid xs={4} item><div>aaa</div></Grid>
                        <Grid item xs={12} justifyContent='center' >
                            <CustomizedButton onClick={formik.handleSubmit} text='Submit' />
                        </Grid>
                    </Grid>
                </Card>
            </form>
        </>)
}

export default Synagogue