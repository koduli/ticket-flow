import { FaRegClipboard } from "react-icons/fa6";
import { ImTicket } from "react-icons/im";
import { FaTasks } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav
      className="flex justify-between bg-nav w-full"
      style={{ padding: "15px 150px" }}
    >
      {" "}
      <Link href="/" legacyBehavior>
        <a className="flex items-center space-x-2">
          <FaRegClipboard className="icon" style={{ fontSize: "2rem" }} />
          <span style={{ color: "white" }}>Board</span>
        </a>
      </Link>
      <Link href="/Backlog" legacyBehavior>
        <a className="flex items-center space-x-2">
          <FaTasks className="icon" style={{ fontSize: "2rem" }} />
          <span style={{ color: "white" }}>Backlog</span>
        </a>
      </Link>
      <Link href="/Item/new" legacyBehavior>
        <a className="flex items-center space-x-2">
          <ImTicket className="icon" style={{ fontSize: "2rem" }} />
          <span style={{ color: "white" }}>New ticket</span>
        </a>
      </Link>
      <Link href="/Search" legacyBehavior>
        <a className="flex items-center space-x-2">
          <IoSearchSharp className="icon" style={{ fontSize: "2rem" }} />
          <span style={{ color: "white" }}>Search</span>
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
