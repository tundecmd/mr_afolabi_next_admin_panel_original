import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "../../components/account/account-profile";
import { EditCourse } from "../../components/course/edit-course";
import { DashboardLayout } from "../../components/dashboard-layout";

const Page = () => (
  <>
    <Head>
      <title>Edit Course | Arabic Learning Institute</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="md">
        {/* <Typography sx={{ mb: 3, ml: 20 }} variant="h4">
          Course
        </Typography> */}
        <Grid container spacing={3}>
          <Grid item lg={2} md={6} xs={12}>
            {/* <AccountProfile /> */}
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <EditCourse />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
