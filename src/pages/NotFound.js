import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  document.title = "404 Not found";
  useEffect(() => {
    setTimeout(() => {
      //   navigate("/");
      navigate(-1); //    jako kdybych dal zpet, můžu i -2, ...
    }, 2500);
  }, [navigate]);

  return (
    <div>
      <p>404 error</p>
      <p>Route not found</p>
    </div>
  );
};
export default NotFound;
