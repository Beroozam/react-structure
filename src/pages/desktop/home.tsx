import {Link} from "react-router-dom";
import {useState} from "react";

const Home = () => {
  const [load,setLoad] = useState(false)
  return (
      <div className={`absolute top-[200px]`}>
        Home Page desktop
          <Link to={'about'} className={`underline`}>About</Link>
          <button className={`flex mt-10 bg-gray-50 m-10 p-5`} onClick={()=>setLoad(true)}>load component</button>
      </div>
  );
};

export default Home;