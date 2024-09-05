import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      {/*<header className="bg-gray-100 p-4">

      </header>*/}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
