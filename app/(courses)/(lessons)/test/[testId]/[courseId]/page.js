import BackToTop from "@/app/backToTop";
import PaginationQuizLayout from "../../(pagination)";
import ProtectedRoute from "@/components/ProtectedRoute";


export const metadata = {
  title: "Test",
  description: "Test",
};

const LessonLayout = () => {
  return (
    <>
      <PaginationQuizLayout />
      <BackToTop />
    {/* <ProtectedRoute>
    </ProtectedRoute> */}
    </>
  );
};

export default LessonLayout;
