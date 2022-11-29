import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Clock as ClockIcon } from "../../icons/clock";
import { Download as DownloadIcon } from "../../icons/download";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteProgram, getPrograms } from "../../features/programSlice";
import { useDispatch } from "react-redux";
import { getBanner } from "../../features/bannerSlice";
// import MyDialog from "../utils/dialog";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    // children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    children: `${name}`,
  };
}
export const BannerCard = ({ banner, ...rest }) => {
  console.log("banner :>> ", banner);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getBanner());
  // }, [dispatch]);

  const [obj, setObj] = useState("");
  const [programs, setPrograms] = useState([]);
  const [prog, setProg] = useState("");

  const [titleEdit, setTitleEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");

  const [open, setOpen] = useState(false);

  const handleDeleteOpen = () => {
    setOpen(true);
  };
  const handleDeleteClose = () => {
    setOpen(false);
  };

  const handleDeleteProgram = (_id) => {
    console.log("_id :>> ", _id);
    dispatch(deleteProgram(_id))
      .unwrap()
      .then((a) => {
        console.log("a :>> ", a);
        dispatch(getPrograms());
        // window.location.reload();
        setOpen(false);
      });
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          {/* <Avatar
          alt="Product"
          src={product.media}
          variant="square"
        /> */}
          {/* <Avatar {...stringAvatar(`${banner.title[0]}`)} /> */}
        </Box>
        <Typography align="center" color="textPrimary" gutterBottom variant="h5">
          {banner && banner[0]?.title}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {banner && banner[0]?.description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid
            item
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Button>
              <Link
                // onClick={handleTransferProgram}
                href={{
                  pathname: "settings/edit-banner",
                  // query: {
                  //   _id: banner._id,
                  //   title: banner.title,
                  //   description: banner.description,
                  // },
                  shallow: true,
                }}
              >
                <EditIcon color="primary.main" />
              </Link>
            </Button>

            {/* <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            Updated 2hr ago
          </Typography> */}
          </Grid>
          <Grid
            item
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Button onClick={handleDeleteOpen}>
              <DeleteIcon color="primary.main" />
            </Button>

            {/* <DownloadIcon color="action" /> */}
            <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
              {/* {banner.totalDownloads} Downloads */}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* <MyDialog
        _id={banner._id}
        open={open}
        handleClose={handleDeleteClose}
        handleOpen={handleDeleteOpen}
        handleDeleteProgram={handleDeleteProgram}
      /> */}
    </Card>
  );
};

// ProgramCard.propTypes = {
//   product: PropTypes.object.isRequired,
// };
