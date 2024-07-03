'use client';

import { usePathname } from 'next/navigation';
import { FaRegClipboard } from 'react-icons/fa6';
import { ImTicket } from 'react-icons/im';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { IoSearchSharp } from 'react-icons/io5';
import Link from 'next/link';

const Navigation = () => {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    return pathname === path ? 'text-blue-500' : 'text-white';
  };

  return (
    <nav
      className="flex flex-row justify-between items-center bg-stone-950 w-full"
      style={{ padding: '15px 80px' }}
    >
      <div className="flex space-x-12">
        {/* Grouping left items */}
        <Link href="/Board" legacyBehavior>
          <a className="flex items-center space-x-2">
            <FaRegClipboard
              className={`icon ${getLinkClass('/Board')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/Board')}>Board</span>
          </a>
        </Link>
        <Link href="/Item/new" legacyBehavior>
          <a className="flex items-center space-x-2">
            <ImTicket
              className={`icon ${getLinkClass('/Item/new')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/Item/new')}>New ticket</span>
          </a>
        </Link>
        <Link href="/Search" legacyBehavior>
          <a className="flex items-center space-x-2">
            <IoSearchSharp
              className={`icon ${getLinkClass('/Search')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/Search')}>Search</span>
          </a>
        </Link>
        <Link href="/Analysis" legacyBehavior>
          <a className="flex items-center space-x-2">
            <TbBrandGoogleAnalytics
              className={`icon ${getLinkClass('/Analysis')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/Analysis')}>Analysis</span>
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <img
          src="/ticket_flow_logo.png"
          alt="TicketFlow Logo"
          style={{ height: '50px', marginRight: '10px' }}
        />
        <p className="text-white" style={{ fontSize: '2rem' }}>
          TicketFlow
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
