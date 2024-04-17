import { useNavigate, useParams } from "react-router-dom";
import Shortner from "../components/Shortner/Shortner";
import { getPerticularUrl } from "../services/serverApi";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const { urlId } = useParams();

  useEffect(() => {
    if (urlId) {
      const search = getPerticularUrl(urlId);
      search.then((res) => {
        console.log("res", res);

        // window.location.href = res;
        navigate((window.location.href = res));
      });
    }
  }, [navigate, urlId]);

  return <div className="mt-5">{!urlId && <Shortner />}</div>;
};

export default HomePage;
