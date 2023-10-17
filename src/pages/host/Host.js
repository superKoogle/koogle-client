import * as React from 'react';
import ReactDOM from 'react-dom';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import CustomizedButton from '../../components/Button';
import RadioButtonsGroup from './radio';
import { TextField, Button } from '@mui/material';
import RecentRequests from './recentRequests';
import Box, { BoxProps } from '@mui/material/Box';
import Item from './item';
import InfoAlert from '../../components/InfoAlert';


export default function Host({ setSubmit, isSubmit, hostFlag }) {
  const [flag, setFlag] = React.useState(true);
  const [validationFlag, setValidationFlag] = React.useState();


  const validationSchema = yup.object({
    //host_start_date, host_end_date,host_always,host_max_guests,host_min_age,host_type
    //host_start_date:validationFlag? yup
    //   .date('Enter your date')
    //   .required('Date is required'):yup
    //   .date('Enter your date'),
    // host_end_date:validationFlag==true? yup
    //   .date('Enter your date')
    //   .required('Date is required'):yup
    //   .date('Enter your date'),
    // host_always: yup
    //   .boolean(),
    host_max_guests: yup
      .number(),
    host_min_age: yup
      .number(),
    // host_type: yup
    //   .number()
  });


  const formik = useFormik({
    initialValues: {
      host_always: flag,
      host_max_guests: '1',
      host_min_age: '0',
      host_type: hostFlag,
      host_start_date: null,
      host_end_date: null

    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("in submit");
      console.log(values);
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("no token");
        return;
      }
      const response = await fetch('http://localhost:3500/api/hosts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ ...values, host_type: hostFlag })
      })

      if (response?.ok) {
        console.log("succeeded")
        const options = await response.json();
        console.log("in fecth " + options);
        setSubmit(false)

      }
      else {
        console.log("err");
      }

      //  console.log("in request")
      //  console.log("hostype "+values.host_type);
    }
  });
  //   console.log("type of host "+hostFlag)
  // console.log("choose dates "+validationFlag);

  if (!hostFlag) return null
  return (
    <>
      {!isSubmit && <InfoAlert message={"submited successfuly"} /*action={setNotLoggedIn}*/ severity="info"></InfoAlert>}
      {isSubmit && <form onSubmit={formik.handleSubmit} >
        <Box
          sx={{
            gap: 1,
            display: 'grid',
            alignItems: 'center',
          }}
        >
          {(!flag || hostFlag == 2) && <Item><TextField
            id="host_start_date"
            name="host_start_date"
            label="from"
            type="date"
            placeholder={formik.values.host_start_date}
            onChange={formik.handleChange}
            error={formik.touched.host_start_date && Boolean(formik.errors.host_start_date)}
            helperText={formik.touched.host_start_date && formik.errors.host_start_date}

          /></Item>}
          {(!flag || hostFlag == 2) && <Item>
            <TextField
              id="host_end_date"
              name="host_end_date"
              label="until"
              type="date"
              placeholder={formik.values.host_end_date}
              onChange={formik.handleChange}
              error={formik.touched.host_end_date && Boolean(formik.errors.host_end_date)}
              helperText={formik.touched.host_end_date && formik.errors.host_end_date}
            />
          </Item>
          }
          <  TextField
            id="host_always"
            name="host_always"
            type="string"
            value={flag}
            sx={{ display: "none" }}
            onChange={formik.handleChange}
            error={formik.touched.host_always && Boolean(formik.errors.host_always)}
            helperText={formik.touched.host_always && formik.errors.host_always}
          />

          <Item> <  TextField
            id="host_max_guests"
            name="host_max_guests"
            type="number"
            label="max Guests"
            onChange={formik.handleChange}
            error={formik.touched.host_max_guests && Boolean(formik.errors.host_max_guests)}
            helperText={formik.touched.host_max_guests && formik.errors.host_max_guests}
          /></Item>

          <Item> <  TextField
            id="host_min_age"
            name="host_min_age"
            type="number"
            label="min Age"
            onChange={formik.handleChange}
            error={formik.touched.host_min_age && Boolean(formik.errors.host_min_age)}
            helperText={formik.touched.host_min_age && formik.errors.host_min_age}
          />
          </Item>
          <TextField
            id="host_type"
            name="host_type"
            type="number"
            placeholder='type'
            sx={{display:"none"}}//some problem here
            value={formik.values.host_type}
            onChange={formik.handleChange}
            error={formik.touched.host_type && Boolean(formik.errors.host_type)}
            helperText={formik.touched.host_type && formik.errors.host_type}
          />

          {hostFlag == 1 && <RadioButtonsGroup flag={setFlag} validFlag={setValidationFlag} sx={{outerWidth:'50%', m:'auto'}}></RadioButtonsGroup>}
          <Button onClick={formik.handleSubmit} color="primary" variant="contained" sx={{width:100, m:'auto'}}>Submit</Button>
        </Box>
      </form>}
    </>
  )
};
ReactDOM.render(<Host />, document.getElementById('root'));