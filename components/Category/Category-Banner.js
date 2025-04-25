import Link from "next/link";

const CategoryBanner = ({ category }) => {
  return (
    <>
      <div className="rbt-banner-content-top">
        <div className="container">
          {category && (
            <div className="row">
              <div className="col-lg-12">
                <ul className="page-list">
                  <li className="rbt-breadcrumb-item">
                    <Link href="/">Baş sahypa</Link>
                  </li>
                  <li>
                    <div className="icon-right">
                      <i className="feather-chevron-right"></i>
                    </div>
                  </li>
                  <li className="rbt-breadcrumb-item active">
                    {category && category.category
                      ? category.category
                      : "Ähli kurslar"}
                  </li>
                </ul>
                <div className=" title-wrapper">
                  <h1 className="title mb--0">
                    {category && category.category
                      ? category.category
                      : "Ähli kurslar"}
                  </h1>
                </div>
                <p className="description">
                  {category && category.desc
                    ? category.desc
                    : `"Geljegiňi Döret!"
                    E-Mugallym: Tölegli kurslary mugt eden platforma
                    Geliň, sanly bilim dünýäsi bilen geljegiňiz üçin esas dörediň!
                     Biz size iň ýokary hilli okuw kurslaryny hödürleýäris – mugt!
                     Maksadyňyz näme bolsa-da, E-Mugallym bilen maksatlaryňyza ýakynlaşyň.
                    🎓 Bilim mugt.
                    📚 Geljek siziň eliňizde.
                    💻 Häzirki zaman tehnologiýasy bilen okaň.`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
