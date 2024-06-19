import Delete from "./Delete";
import Priority from "./Priority";
import Progress from "./Progress";
import Status from "./Status";
import Link from "next/link";

const Ticket = ({
  _id,
  title,
  description,
  priority,
  status,
  createdAt,
  progress,
  fetchTickets,
}) => {
  const getStatusBgColor = (status) => {
    switch (status) {
      case "todo":
        return "bg-blue-500/50";
      case "in_progress":
        return "bg-yellow-500/50";
      case "done":
        return "bg-green-500/50";
      default:
        return "bg-stone-700/50";
    }
  };

  return (
    <div
      className={`flex flex-col ${getStatusBgColor(
        status
      )} hover:bg-stone-600 rounded-md shadow-lg p-4 m-2`}
    >
      <div className="flex mb-3">
        <Priority priority={priority} />
        <div className="ml-auto">
          <Delete id={_id} fetchTickets={fetchTickets} />
        </div>
      </div>
      <Link href={`Item/${_id}`} style={{ display: "contents" }}>
        <h4>{title}</h4>
        <hr className="h-1 border-0 bg-gray-300 mb-2 rounded" />{" "}
        {/* Updated line with rounded edges */}
        <p className="whitespace-pre-wrap">{description}</p>
        <div className="flex-grow"></div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs my-1">{new Date(createdAt).toLocaleString()}</p>
          <div className="flex items-center">
            <Progress progress={progress} className="w-3/4" />{" "}
            {/* Make progress bar shorter */}
            <span className="ml-2 text-sm">{`${progress}%`}</span>{" "}
            {/* Display progress percentage */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Ticket;
