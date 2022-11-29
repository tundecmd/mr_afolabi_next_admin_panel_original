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
import { addProgram, editProgram, getPrograms } from "../../features/programSlice";
import { getBanner } from "../../features/bannerSlice";

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

// export const getServerSideProps = (context) => {
//   console.log(context.query);
//   return {
//     props: {
//       _id: context.query._id, //pass it to the page props
//     },
//   };
// };

export const EditBanner = (props) => {
  // console.log("props :>> ", props);
  const dispatch = useDispatch();
  let router = useRouter();
  const _id = router.query._id;
  const title = router.query.title;
  const description = router.query.description;

  // console.log("query :>> ", query);
  console.log("_id :>> ", _id);
  console.log("title :>> ", title);
  console.log("description :>> ", description);

  // const [id, setId] = useState(_id);
  // const [titleEdit, setTitleEdit] = useState(title);
  // const [descriptionEdit, setDescriptionEdit] = useState(description);
  const [values, setValues] = useState({
    title,
    description,
    _id,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  //   const [programImage, setProgramImage] = useState("");
  //   const handleProgramImage = (e) => {
  //     setProgramImage(e.target.files[0]);
  //   };

  const handleEditBanner = (e) => {
    e.preventDefault();
    const banner = {
      title: values.title,
      description: values.description,
      _id: values._id,
      // programImage,
    };
    // console.log("newProgram :>> ", newProgram);
    dispatch(editBanner(banner))
      .unwrap()
      .then(() => {
        dispatch(getBanner());
        router.push("/settings");
        // window.location.reload();
      });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="" title="Edit Banner" sx={{ color: "primary.main" }} />
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
                rows={8}
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
                  // value={programImage}
                  onChange={handleProgramImage}
                />
              </Button>
              <Image src={programImage} />
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
          <Button color="primary" variant="contained" value="submit" onClick={handleEditBanner}>
            Edit Banner
          </Button>
        </Box>
      </Card>
    </form>
  );
};
