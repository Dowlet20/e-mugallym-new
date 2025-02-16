
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import { Ripple } from "react-css-spinners";

const TeamThree = () => {
  const [sources, setSources] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData =async () => {
      try {
        const response = await axiosInstance.get("/source");
        setSources(response.data);
        setLoading(false);
      }
      catch (err) {
        console.error(err)
      }
    } 
    fetchData();
  }, []);

  console.log(sources);

  if (loading) {
    return (
      <div className="d-flex bg-transparent"  style={{height: '100vh'}}>
        <Ripple
          color="rgba(12,235,115,1)"
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
                      <Link href={`/source/${source?.slug}`}>
                        <Image
                          src={source?.icon ? source?.icon : "/images/team/team-01.jpg"}
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
                        <Link href={`/source/${source?.slug}`}>
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
                          {/* {user?.biography}  */}
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Quisque feugiat metus ut orci placerat, nec rutrum eros tempus. Fusce at magna id velit luctus pretium. Donec vehicula, orci eu iaculis vehicula, risus leo maximus elit, vel egestas erat mi ut velit. Sed aliquet suscipit sollicitudin. Phasellus convallis arcu vel purus efficitur, sed eleifend libero tincidunt. Sed vitae ex ut nisi suscipit condimentum id ac justo. Etiam aliquam gravida felis. Suspendisse potenti. Aenean a suscipit orci. Vivamus tempus sapien in lectus sollicitudin, ut facilisis arcu porttitor.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
            )})}
        </div>
      </div>
    </>
  );
};

export default TeamThree;
