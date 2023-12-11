// NavItem.js
import Link from "next/link";
import { useRouter } from 'next/router';

const NavItem = ({ navItemText, link }) => {
  const router = useRouter();

  const handleNavItemClick = () => {
    router.push(link);
  };

  return (
    <div className="nav-item" onClick={handleNavItemClick}>
      <Link href={link}>
        <div className="nav-item-content">{navItemText}</div>
      </Link>
      <style jsx>{`
        .nav-item-content {
          padding: 12px; 
          color: white;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s ease-in-out;
        }

        .nav-item-content:hover {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default NavItem;
