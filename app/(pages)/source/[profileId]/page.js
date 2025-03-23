import ProtectedRoute from "@/components/ProtectedRoute";
import SingleProfile from "../index";

export const metadata = {
  title: "Profile - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SingleProfileLayout = ({ params }) => {
  return (
    <>
    <ProtectedRoute>
      <SingleProfile getParams={params} />
    </ProtectedRoute>
    </>
  );
};

export default SingleProfileLayout;
