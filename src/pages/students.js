import Head from "next/head";
import { Box, Container } from "@mui/material";
import { StudentListResults } from "../components/students/student-list-results";
import { StudentListToolbar } from "../components/students/student-list-toolbar";
import { DashboardLayout } from "../components/dashboard-layout";
import { customers } from "../__mocks__/customers";

const Page = () => (
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
          <StudentListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
