
import BackToTop from "@/app/backToTop";
import InstructorPage from "./(team)";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "Çeşmeler",
  description: "Çeşmeler",
};

const InstructorLayout = () => {
  return (
    <>
      <ProtectedRoute>
        <InstructorPage />
        <BackToTop />
      </ProtectedRoute>
    </>
  );
};

export default InstructorLayout;
