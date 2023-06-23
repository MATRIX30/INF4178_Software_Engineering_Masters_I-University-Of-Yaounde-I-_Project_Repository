// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Messenger from "pages/msg/pages/messenger/Messenger";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* <h1>MESSAGES</h1> */}
        <Messenger />
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
