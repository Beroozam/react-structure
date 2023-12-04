import React from 'react';
import {Outlet} from "react-router-dom";

const SharedLayout = () => {
  return (
      <div>
        <div className={`fixed top-0 right-0 left-0 w-full h-fit p-10 bg-gray-800 text-white flex justify-center items-center`}>this is a header</div>
        <section className={`pt-32 px-10`}>
          <Outlet />
        </section>
        <div className={`fixed bottom-0 right-0 left-0 w-full h-fit p-10 bg-gray-800 text-white flex justify-center items-center`}>this is a footer</div>
      </div>
  );
};

export default SharedLayout;