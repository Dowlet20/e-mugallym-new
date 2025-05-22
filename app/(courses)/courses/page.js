import BackToTop from "@/app/backToTop";
import CourseFilteTwoTogglePage from "./index";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "E-Mugallym",
  description: "E-Mugallym",
};

const CourseFilteTwoToggleLayout = () => {
  return (
    <>
    <ProtectedRoute>
      <CourseFilteTwoTogglePage />
      <BackToTop />
    </ProtectedRoute>
    </>
  );
};

export default CourseFilteTwoToggleLayout;
