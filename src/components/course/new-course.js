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
import { addCourse, getCourses } from "../../features/courseSlice";

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

export const NewCourse = (props) => {
  const dispatch = useDispatch();
  let router = useRouter();
  const [values, setValues] = useState({
    title: "",
    description: "",
    code: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // const [programImage, setProgramImage] = useState("");
  // const handleProgramImage = (e) => {
  //   setProgramImage(e.target.files[0]);
  // };

  const handleAddCourse = (e) => {
    e.preventDefault();
    const newCourse = {
      title: values.title,
      description: values.description,
      code: values.code,
    };
    console.log("newCourse :>> ", newCourse);
    dispatch(addCourse(newCourse))
      .unwrap()
      .then(() => {
        dispatch(getCourses());
        router.push("/courses");
        // window.location.reload();
      });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="" title="New Course" sx={{ color: "primary.main" }} />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                // helperText="Please specify the first name"
                label="Title"
                name="title"
                onChange={handleChange}
                required
                value={values.title}
                variant="standard"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="standard"
                multiline
                rows={5}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Code"
                name="code"
                onChange={handleChange}
                required
                value={values.code}
                variant="standard"
              />
            </Grid>
            {/* <Grid item md={12} xs={12}>
              <Button color="primary" fullWidth component="label">
                Upload picture
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  name="programImage"
                  onChange={handleProgramImage}
                />
              </Button>
              <p>{programImage && programImage.name}</p>
            </Grid> */}
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
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
          <Button color="primary" variant="contained" value="submit" onClick={handleAddCourse}>
            Add Course
          </Button>
        </Box>
      </Card>
    </form>
  );
};
