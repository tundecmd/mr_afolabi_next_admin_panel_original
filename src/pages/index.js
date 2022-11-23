import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Programs } from "../components/dashboard/programs";
import { LatestOrders, LatestStudents } from "../components/dashboard/latest-students";
import { LatestPrograms } from "../components/dashboard/latest-programs";
// import { Sales } from "../components/dashboard/sales";
import { TotalCourses } from "../components/dashboard/total-courses";
import { TotalStudents } from "../components/dashboard/total-students";
import { Courses } from "../components/dashboard/total-profit";
// import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { getPrograms } from "../features/programSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStudents } from "../features/studentSlice";
import { getCourses } from "../features/courseSlice";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrograms());
    dispatch(getStudents());
    dispatch(getCourses());
  }, []);

  const { courses } = useSelector((state) => state.course);
  const { programs } = useSelector((state) => state.program);
  const { students } = useSelector((state) => state.student);
  console.log("courses :>> ", courses);
  return (
    <>
      <Head>
        <title>Dashboard | Arabic Learning Institute</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={4} sm={6} xl={3} xs={12}>
              <TotalStudents students={students} />
            </Grid>
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <Programs programs={programs} />
            </Grid>
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <TotalCourses courses={courses} />
            </Grid>
            {/* <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Courses sx={{ height: "100%" }} />
            </Grid> */}
            <Grid item lg={8} md={12} xl={9} xs={12}>
              {/* <Sales /> */}
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestPrograms sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestStudents />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
