import BackToTop from "@/app/backToTop";
import StudentDashboard from "./(dashboard)";

export const metadata = {
  title: "Talyp paneli",
  description: "Talyp paneli",
};

const StudentDashboardLayout = () => {
  return (
    <>
      <StudentDashboard />
      <BackToTop />
    </>
  );
};

export default StudentDashboardLayout;
