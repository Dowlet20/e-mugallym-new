import SingleProductPage from "../index";

export const metadata = {
  title: "Bir kurs",
  description: "Bir kurs",
};

const SingleProductLayout = ({ params }) => {
  return (
    <>
      <SingleProductPage getParams={params} />
    </>
  );
};

export default SingleProductLayout;
