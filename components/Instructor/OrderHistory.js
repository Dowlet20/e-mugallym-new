const OrderHistory = ({
    analytics
  }) => {
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
                  <th>giren wagty</th>
                </tr>
              </thead>

              <tbody>
                {analytics.map((analytic, index)=> (
                  <tr>
                    <th>{index+1}</th>
                    <td 
                      style={{
                        maxWidth:'300px',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                    }}>
                      {analytic.course.title}
                    </td>
                    <td 
                      style={{
                        maxWidth:'300px',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                    }}>
                      {analytic.topic.title}
                    </td>
                    <td 
                      style={{
                        maxWidth:'300px',
                        wordWrap: 'break-word',
                        whiteSpace: 'normal'
                    }}>
                      {analytic.lesson.title}
                    </td>
                    <td>Mart 29, 2025</td>
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
