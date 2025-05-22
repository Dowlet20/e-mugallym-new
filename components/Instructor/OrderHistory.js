import Link from "next/link";

const OrderHistory = ({
    analytics
  }) => {
    console.log(analytics);

    const formattedDate = (isoString) => {
      const date = new Date(isoString);
      const day = String(date.getUTCDate()).padStart(2, '0');
      const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = date.getUTCFullYear();
      const hours = String((date.getUTCHours() + 5) % 24).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  
      const formatDate = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
      return formatDate;
    }
  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">
              Soňky giren kurslarym
            </h4>
          </div>

          <div className="rbt-dashboard-table table-responsive mobile-table-750">
            <table className="rbt-table table table-borderless">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Kurs ady</th>
                  <th>Topic ady</th>
                  <th>Sapak ady</th>
                  <th>Giren wagty</th>
                </tr>
              </thead>

              <tbody>
                {analytics.map((analytic, index)=> (
                  <tr key={index}>
                    <th>{index+1}</th>
                    <td 
                      style={{
                        maxWidth:'300px',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                    }}>
                      <Link 
                        href={`/sapak/${analytic.lesson.slug}/${analytic.course.slug}`}
                      >
                        {analytic.course.title}
                      </Link>
                    </td>
                    <td 
                      style={{
                        maxWidth:'300px',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                    }}>
                      <Link 
                        href={`/sapak/${analytic.lesson.slug}/${analytic.course.slug}`}
                      >
                        {analytic.topic.title}
                      </Link>
                    </td>
                    <td 
                      style={{
                        maxWidth:'300px',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                    }}>
                      <Link href={`/sapak/${analytic.lesson.slug}/${analytic.course.slug}`}>
                        {analytic.lesson.title}
                      </Link>
                    </td>
                    <td>
                      <Link href={`/sapak/${analytic.lesson.slug}/${analytic.course.slug}`}>
                        {formattedDate(analytic.updated_at)}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
