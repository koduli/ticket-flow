// Ticket.jsx
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
  progress,
  status,
  category,
  createdAt,
  fetchTickets,
}) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Priority priority={priority} />
        <div className="ml-auto">
          <Delete id={_id} fetchTickets={fetchTickets} />{" "}
        </div>
      </div>
      <Link href={`Item/${_id}`} style={{ display: "contents" }}>
        <h4>{title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">
              {new Date(createdAt).toLocaleString()}
            </p>
            <Progress progress={progress} />
          </div>
          <div className="ml-auto flex items-end">
            <Status status={status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Ticket;
