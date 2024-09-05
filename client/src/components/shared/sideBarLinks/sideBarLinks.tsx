import { Link } from 'react-router-dom';

export const SidebarLinks = () => {
  const links = [
    { name: 'Россия', path: '/table/online-table-rus' },
    { name: 'США', path: '/table/model-portfolio-usa' },
    { name: 'Китай', path: '/table/online-table-chn' }
  ];

  return (
    <div className="p-4">
      {links.map((link) => (
        <div className="my-2" key={link.path}>
          <Link className="text-green-600 hover:underline" to={link.path}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
