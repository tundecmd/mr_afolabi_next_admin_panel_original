import Head from "next/head";
import { Box, Container } from "@mui/material";
import { StudentListResults } from "../../components/student/student-list-results";
import { StudentListToolbar } from "../../components/student/student-list-toolbar";
import { DashboardLayout } from "../../components/dashboard-layout";
import { customers } from "../../__mocks__/customers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStudents } from "../../features/studentSlice";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  const { students } = useSelector((state) => state.student);
  console.log("students :>> ", students);
  return (
    <>
      <Head>
        <title>Students | Arabic Learning Institute</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <StudentListToolbar />
          <Box sx={{ mt: 3 }}>
            <StudentListResults students={students} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
