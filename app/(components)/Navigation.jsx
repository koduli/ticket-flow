import { GrTask } from "react-icons/gr";
import { ImTicket } from "react-icons/im";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-between bg-nav p-6">
      <div className="flex items-center space-x-10">
        <Link href="/" legacyBehavior>
          <a>
            <GrTask className="icon" style={{ fontSize: "2rem" }} />
          </a>
        </Link>
        <Link href="/Item/new" legacyBehavior>
          <a>
            <ImTicket className="icon" style={{ fontSize: "2rem" }} />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
