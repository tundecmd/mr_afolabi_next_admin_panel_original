import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "../../__mocks__/products";
import { ProductListToolbar } from "../../components/program/program-list-toolbar";
import { ProgramCard } from "../../components/program/program-card";
import { DashboardLayout } from "../../components/dashboard-layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPrograms } from "../../features/programSlice";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  const { programs } = useSelector((state) => state.program);
  console.log("programs :>> ", programs);

  return (
    <>
      <Head>
        <title>Programs | Arabic Learning Institute</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {programs &&
                programs.map((program) => (
                  <Grid item key={program.id} lg={4} md={6} xs={12}>
                    <ProgramCard program={program} />
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
