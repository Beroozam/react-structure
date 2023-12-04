import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div className={`absolute top-[200px]`}>
        Home Page desktop
          <Link to={'about'} className={`underline`}>About</Link>
      </div>
  );
};

export default Home;