import Delete from "./Delete";
import Priority from "./Priority";
import Progress from "./Progress";
import Status from "./Status";

const Ticket = ({
  title,
  description,
  priority,
  progress,
  status,
  category,
  createdAt,
}) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Priority priority={priority} />
        <div className="ml-auto">
          <Delete />
        </div>
      </div>
      <h4>{title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{new Date(createdAt).toLocaleString()}</p>
          <Progress progress={progress} />
        </div>
        <div className="ml-auto flex items-end">
          <Status status={status} />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
