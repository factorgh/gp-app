import { Outlet } from "react-router-dom";

const BaseTemplate = () => {
  return (
    <div>
      <div className="flex flex-grow justify-center h-screen">
        <div className="p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseTemplate;
