import ProtectedRoute from "@/components/ProtectedRoute";
import SingleProfile from "../index";

export const metadata = {
  title: "Çeşme barada we çesmä degişli kurslar",
  description: "Çeşme barada we çesmä degişli kurslar",
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
