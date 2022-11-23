import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addProgram, getPrograms } from "../../features/programSlice2";
import { addStudent, getStudents } from "../../features/studentSlice";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

export const NewStudent = (props) => {
  const dispatch = useDispatch();
  let router = useRouter();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [programImage, setProgramImage] = useState("");
  const handleProgramImage = (e) => {
    setProgramImage(e.target.files[0]);
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      contactNumber: values.contactNumber,
      city: values.city,
      state: values.state,
      country: values.country,
    };
    // console.log("newProgram :>> ", newProgram);
    dispatch(addStudent(newStudent))
      .unwrap()
      .then(() => {
        dispatch(getStudents());
        router.push("/students");
        // window.location.reload();
      });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="" title="New Student" sx={{ color: "primary.main" }} />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="FirstName"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="standard"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="LastName"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="standard"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="standard"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="contactNumber"
                onChange={handleChange}
                type="text"
                value={values.contactNumber}
                variant="standard"
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                name="city"
                onChange={handleChange}
                required
                value={values.city}
                variant="standard"
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                fullWidth
                label="State"
                name="state"
                onChange={handleChange}
                required
                value={values.state}
                variant="standard"
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="standard"
              />
            </Grid>
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="standard"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>{" "} */}
            {/* */}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" value="submit" onClick={handleAddStudent}>
            Add Student
          </Button>
        </Box>
      </Card>
    </form>
  );
};
