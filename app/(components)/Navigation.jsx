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
        <Link href="/pages" legacyBehavior>
          <a className="flex items-center space-x-2">
            <FaRegClipboard
              className={`icon ${getLinkClass('/pages')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/pages')}>Board</span>
          </a>
        </Link>
        <Link href="/pages/Item/new" legacyBehavior>
          <a className="flex items-center space-x-2">
            <ImTicket
              className={`icon ${getLinkClass('/pages/Item/new')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/pages/Item/new')}>New ticket</span>
          </a>
        </Link>
        <Link href="/pages/Search" legacyBehavior>
          <a className="flex items-center space-x-2">
            <IoSearchSharp
              className={`icon ${getLinkClass('/pages/Search')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/pages/Search')}>Search</span>
          </a>
        </Link>
        <Link href="/pages/Analysis" legacyBehavior>
          <a className="flex items-center space-x-2">
            <TbBrandGoogleAnalytics
              className={`icon ${getLinkClass('/pages/Analysis')}`}
              style={{ fontSize: '1.5rem' }}
            />
            <span className={getLinkClass('/pages/Analysis')}>Analysis</span>
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
