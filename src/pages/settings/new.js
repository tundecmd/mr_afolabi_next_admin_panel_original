import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "../../components/account/account-profile";
import { NewProgram } from "../../components/program/new-program";
import { DashboardLayout } from "../../components/dashboard-layout";

const Page = () => (
  <>
    <Head>
      <title>New Program | Arabic Learning Institute</title>
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
          Program
        </Typography> */}
        <Grid container spacing={3}>
          <Grid item lg={2} md={6} xs={12}>
            {/* <AccountProfile /> */}
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <NewProgram />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
