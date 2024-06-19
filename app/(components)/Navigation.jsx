import { FaRegClipboard } from "react-icons/fa6";
import { ImTicket } from "react-icons/im";
import { FaTasks } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav
      className="flex flex-row justify-between items-center bg-stone-950 w-full"
      style={{ padding: "15px 80px" }}
    >
      <div className="flex space-x-12">
        {/* Grouping left items */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center space-x-2">
            <FaRegClipboard className="icon" style={{ fontSize: "1.5rem" }} />
            <span style={{ color: "white" }}>Board</span>
          </a>
        </Link>
        <Link href="/Backlog" legacyBehavior>
          <a className="flex items-center space-x-2">
            <FaTasks className="icon" style={{ fontSize: "1.5rem" }} />
            <span style={{ color: "white" }}>Backlog</span>
          </a>
        </Link>
        <Link href="/Item/new" legacyBehavior>
          <a className="flex items-center space-x-2">
            <ImTicket className="icon" style={{ fontSize: "1.5rem" }} />
            <span style={{ color: "white" }}>New ticket</span>
          </a>
        </Link>
        <Link href="/Search" legacyBehavior>
          <a className="flex items-center space-x-2">
            <IoSearchSharp className="icon" style={{ fontSize: "1.5rem" }} />
            <span style={{ color: "white" }}>Search</span>
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <img
          src="/ticket_flow_logo.png"
          alt="TicketFlow Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
        <p className="text-white" style={{ fontSize: "2rem" }}>
          TicketFlow
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
