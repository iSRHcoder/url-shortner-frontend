import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPerticularUrl } from "../services/serverApi";

const EmptyDiv = () => {
  const navigate = useNavigate();
  const { urlId } = useParams();

  useEffect(() => {
    if (urlId) {
      const search = getPerticularUrl(urlId);
      search.then((res) => {
        navigate((window.location.href = res));
      });
    }
  }, [navigate, urlId]);
  return <div></div>;
};

export default EmptyDiv;
