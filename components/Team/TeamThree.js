
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import { Ripple } from "react-css-spinners";

const TeamThree = () => {
  const [sources, setSources] = useState();
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/source/");
        setSources(response.data.data);
        setLoading(false);
      }
      catch (err) {
        console.error(err)
      }
    }
    fetchData();
  }, []);



  if (loading) {
    return (
      <div className="d-flex bg-transparent" style={{ height: '100vh' }}>
        <Ripple
          color="rgba(162,145,247,1)"
          size={115}
          thickness={7}
          className="mx-auto align-self-center"
        />
      </div>
    );
  }
  

  return (
    <>
      <div className="container">

        <div className="row row--15 mt_dec--30">
          {sources?.map((source, innerIndex) => {
            if (!source?.title && !source?.icon) return;
            return (
              <div className="col-lg-4 col-md-6 col-12 mt--30" key={innerIndex}>
                <div
                  className="rbt-team team-style-default rbt-hover-02"
                >
                  <div className="inner">
                    <div className="thumbnail">
                      <Link href={`/cesme/${source?.slug}`}>
                        <img
                          src={source?.icon ? `${baseUrl.replace("/gateway", "")}${source?.icon}` : "/images/team/team-01.jpg"}
                          width={415}
                          height={555}
                          priority
                          alt="Corporate Template"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <h2 className="title">
                        <div className="rbt-card-text" style={{
                          width: '100%',
                          height: '1.5em',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 1,
                          textOverflow: 'ellipsis',
                          lineHeight: '1.5em'
                        }}>
                          <Link href={`/cesme/${source?.slug}`}>
                            {source.title}
                          </Link>
                        </div>
                      </h2>
                      <div className="description">
                        <div className="rbt-card-text" style={{
                          width: '100%',
                          margin: '10px auto',
                          height: '6em',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 4,
                          textOverflow: 'ellipsis',
                          lineHeight: '1.5em'
                        }}>
                          {source?.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default TeamThree;
