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
        <Link href="/board" legacyBehavior>
          <a className="flex items-center space-x-2">
            <FaRegClipboard
              className={`icon ${getLinkClass('/board')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/board')}>Board</span>
          </a>
        </Link>
        <Link href="/ticket/new" legacyBehavior>
          <a className="flex items-center space-x-2">
            <ImTicket
              className={`icon ${getLinkClass('/ticket/new')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/ticket/new')}>New ticket</span>
          </a>
        </Link>
        <Link href="/search" legacyBehavior>
          <a className="flex items-center space-x-2">
            <IoSearchSharp
              className={`icon ${getLinkClass('/search')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/search')}>Search</span>
          </a>
        </Link>
        <Link href="/analysis" legacyBehavior>
          <a className="flex items-center space-x-2">
            <TbBrandGoogleAnalytics
              className={`icon ${getLinkClass('/analysis')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/analysis')}>Analysis</span>
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
