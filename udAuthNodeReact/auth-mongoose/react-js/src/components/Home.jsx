import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/authSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.value);
  const [message, setMessage] = useState(""); //You are not authenticated

  useEffect(() => {
    (async () => {
      try {
        let resp = await fetch("/api/user", { //http://localhost:8000
          credentials: "include"}); console.log(resp); //mode:"cors",
        if(!resp.ok){
          resp = await fetch("/api/refresh", { //http://localhost:8000
            method:"POST", credentials: "include"}); console.log(resp); //, mode:"cors"
          resp = await fetch("/api/user", {credentials:"include"}); //http://localhost:8000
          console.log(resp);
        }
        if(resp.ok) { dispatch(setAuth(true));
          const data = await resp.json(); console.log(data);
          setMessage(`Hi, ${data.first_name} ${data.last_name}`); //user
        }
      } catch(e) { dispatch(setAuth(false));
        //setMessage("You are not authenticated");
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <h2 style={{textAlign: "center"}}>{auth? message: "You are not authenticated"}</h2>
    </div>
  );
};
