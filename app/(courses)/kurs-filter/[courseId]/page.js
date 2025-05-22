import BackToTop from "@/app/backToTop";
import SingleCoursePage from "./index";

export const metadata = {
  title:
    "Kurs filter",
  description: "Kurs filter",
};

const Page = ({ params }) => {
  return (
    <>
      <SingleCoursePage getParams={params} />

      <BackToTop />
    </>
  );
};

export default Page;
