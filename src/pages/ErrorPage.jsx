import { useParams } from "react-router-dom";

const ErrorPage = () => {
  const { urlId } = useParams();
  return <>{urlId && <div>ErrorPage</div>}</>;
};

export default ErrorPage;
