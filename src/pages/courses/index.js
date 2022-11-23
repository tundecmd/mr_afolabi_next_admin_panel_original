import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "../../__mocks__/products";
import { CourseListToolbar } from "../../components/course/course-list-toolbar";
import { CourseCard } from "../../components/course/course-card";
import { DashboardLayout } from "../../components/dashboard-layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "../../features/courseSlice";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const { courses } = useSelector((state) => state.course);
  console.log("courses :>> ", courses);

  return (
    <>
      <Head>
        <title>Courses | Arabic Learning Institute</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CourseListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {courses &&
                courses.map((course) => (
                  <Grid item key={course.id} lg={4} md={6} xs={12}>
                    <CourseCard course={course} />
                  </Grid>
                ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
