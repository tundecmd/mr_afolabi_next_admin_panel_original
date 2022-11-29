import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
// import { products } from "../../__mocks__/products";
import { SettingsListToolbar } from "../../components/settings/settings-list-toolbar";
// import { ProgramCard } from "../../components/program/program-card";
import { DashboardLayout } from "../../components/dashboard-layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { getPrograms } from "../../features/programSlice";
import { BannerCard } from "./banner-card";
import { getAbout } from "../../features/aboutSlice";
import { getBanner } from "../../features/bannerSlice";
import { AboutCard } from "./about-card";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAbout());
    dispatch(getBanner());
  }, [dispatch]);

  const { about } = useSelector((state) => state.about);
  const { banner } = useSelector((state) => state.banner);

  console.log("about :>> ", about);
  console.log("banner :>> ", banner);

  // console.log("settings :>> ", settings);

  return (
    <>
      <Head>
        <title>Settings | Arabic Learning Institute</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <SettingsListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {/* {programs &&
                programs.map((program) => (
                  <Grid item key={program.id} lg={4} md={6} xs={12}>
                    <BannerCard about={about} />
                  </Grid>
                ))} */}
              {
                <Grid item lg={4} md={6} xs={12}>
                  <BannerCard banner={banner} />
                </Grid>
              }
              {
                <Grid item lg={4} md={6} xs={12}>
                  <AboutCard about={about} />
                </Grid>
              }
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
