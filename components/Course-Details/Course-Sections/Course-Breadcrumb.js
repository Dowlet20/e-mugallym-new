import Image from "next/image";
import Link from "next/link";

const CourseBreadcrumb = ({ getMatchCourse, course }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="content text-start">
          <ul className="page-list">
            <li className="rbt-breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li>
              <div className="icon-right">
                <i className="feather-chevron-right"></i>
              </div>
            </li>
            <li className="rbt-breadcrumb-item active">
              {course?.category?.[0]?.title} 
            </li>
          </ul>
          <h2 className="title">{course.title}</h2>
          <p className="description">{course.short_description}</p>

          <div className="rbt-author-meta mb--20">
            <div className="rbt-avater">
              <Link href={`/source/${course?.source?.slug}`}>
                {getMatchCourse.userImg && (
                  <Image
                    width={40}
                    height={40}
                    src={course?.source?.icon ? course?.source?.icon : "/images/banner/gallery-banner-03.jpg"}
                    alt={course?.source?.title}
                  />
                )}
              </Link>
            </div>
            <div className="rbt-author-info">
              <Link href={`/source/${course?.source?.slug}`}>
                {course?.source?.title}
              </Link>
            </div>
          </div>

          <ul className="rbt-meta">
            <li>
              <i className="feather-globe"></i>
              {course?.language?.title}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseBreadcrumb;
