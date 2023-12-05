import React from 'react';
import {Outlet} from "react-router-dom";

const SecondLayout = () => {
  return (
      <div>
        <div className={`fixed top-10 right-0 left-0 w-full h-fit p-10 bg-gray-200 text-white flex justify-center items-center`}>this is a header from another layout</div>
        <section className={`pt-36 px-10`}>
          <Outlet />
        </section>
        <div className={`fixed bottom-10 right-0 left-0 w-full h-fit p-10 bg-gray-200 text-white flex justify-center items-center`}>this is a footer another layout</div>
      </div>
  );
};

export default SecondLayout;