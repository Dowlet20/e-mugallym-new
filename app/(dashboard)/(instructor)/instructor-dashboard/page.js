import BackToTop from "@/app/backToTop";
import InstructorDashboard from "./(dashboard)";

export const metadata = {
  title: "Mugallym paneli",
  description: "Mugallym paneli",
};

const InstructorDashboardLayout = () => {
  return (
    <>
      <InstructorDashboard />
      <BackToTop />
    </>
  );
};

export default InstructorDashboardLayout;
