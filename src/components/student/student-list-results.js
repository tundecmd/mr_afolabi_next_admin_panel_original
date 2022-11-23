import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MyDialog from "./delete-student-dialog";
import { useDispatch } from "react-redux";
import { deleteStudent, getStudents } from "../../features/studentSlice";
import Link from "next/link";

export const StudentListResults = ({ students, student, ...rest }) => {
  const dispatch = useDispatch();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const [open, setOpen] = useState(false);

  const [editStudent, setEditStudent] = useState({});
  const [selectedStudent, setSelectedStudent] = useState({});

  //   onClick={() => {
  //     selectRow(program);
  // }}
  const handleDeleteOpen = (selectedStudent) => {
    console.log("selected stud:>", selectedStudent);
    setSelectedStudent(selectedStudent);
    // setTitleEdit(selectedStudent.title);
    // setDescriptionEdit(selectedStudent.description);
    console.log("selectedStudent", selectedStudent);

    setOpen(true);
  };
  console.log("selectedStudent", selectedStudent);
  const handleDeleteClose = () => {
    setOpen(false);
  };

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = students && students.map((student) => student.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];
    let newSelectedStudentIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    }
    // else if (selectedIndex === selectedCustomerIds.length - 1) {
    //   newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    // }
    else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleDeleteStudent = (_id) => {
    console.log("_id :>> ", _id);
    dispatch(deleteStudent(_id))
      .unwrap()
      .then((a) => {
        console.log("a :>> ", a);
        dispatch(getStudents());
        // window.location.reload();
        setOpen(false);
      });
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    // checked={selectedCustomerIds.length === students.length}
                    color="primary"
                    // indeterminate={
                    //   selectedCustomerIds.length > 0 && selectedCustomerIds.length < students.length
                    // }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Firstname</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Actions</TableCell>
                {/* <TableCell>Join date</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {students &&
                students.slice(0, limit).map((student) => (
                  <TableRow
                    hover
                    key={student.id}
                    selected={selectedCustomerIds.indexOf(student.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomerIds.indexOf(student.id) !== -1}
                        onChange={(event) => handleSelectOne(event, student.id)}
                        value="true"
                      />
                    </TableCell>
                    {/* <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={student.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(`${student.firstName} ${student.lastName}`)}
                      </Avatar>
                    </Box>
                  </TableCell> */}
                    <TableCell>
                      <Typography color="textPrimary" variant="body1">
                        {student.firstName}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography color="textPrimary" variant="body1">
                        {student.lastName}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography color="textPrimary" variant="body1">
                        {student.email}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      {`${student?.city || ""}, ${student?.state || ""}, ${student?.country || ""}`}
                    </TableCell>
                    <TableCell>{student.contactNumber}</TableCell>
                    <TableCell>
                      <Grid
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        {/* dddddddddd */}

                        {/* <Button>
              <Link
                // onClick={handleTransferProgram}
                href={{
                  pathname: "/programs/edit",
                  query: {
                    _id: program._id,
                    title: program.title,
                    description: program.description,
                  },
                  shallow: true,
                }}
              >
                <EditIcon color="primary.main" />
              </Link>
            </Button> */}

                        {/* dddddddddddd */}
                        <Button onClick={() => setSelectedStudent(student)}>
                          <Link
                            // onClick={() => setSelectedStudent(selectedStudent)}
                            href={{
                              pathname: "/students/edit",
                              query: {
                                _id: student._id,
                                firstName: student.firstName,
                                lastName: student.lastName,
                                email: student.email,
                                contactNumber: student.contactNumber,
                                city: student.city,
                                state: student.state,
                                country: student.country,
                              },
                              shallow: true,
                            }}
                          >
                            <EditIcon color="primary.main" />
                          </Link>
                        </Button>

                        <Button onClick={() => handleDeleteOpen(student)}>
                          <DeleteIcon color="error" />
                        </Button>

                        {/* <EditIcon color="action" /> */}
                        {/* <Typography
                        color="textSecondary"
                        display="inline"
                        sx={{ pl: 1 }}
                        variant="body2"
                      >
                        {program.totalDownloads} Downloads
                      </Typography> */}
                      </Grid>
                    </TableCell>
                    {/* <TableCell>{format(student.createdAt, "dd/MM/yyyy")}</TableCell> */}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
        <MyDialog
          _id={selectedStudent._id}
          selectedStudent={selectedStudent}
          open={open}
          handleClose={handleDeleteClose}
          handleOpen={handleDeleteOpen}
          handleDeleteStudent={handleDeleteStudent}
        />
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={students?.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

StudentListResults.propTypes = {
  students: PropTypes.array.isRequired,
};
