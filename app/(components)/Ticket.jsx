import Delete from "./Delete";
import Priority from "./Priority";
import Progress from "./Progress";
import Status from "./Status";

const Ticket = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Priority />
        <div className="ml-auto">
          <Delete />
        </div>
      </div>
      <h4>Ticket title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">Ticket description goes here.</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">10/06/2024 8:47PM</p>
          <Progress />
        </div>
        <div className="ml-auto flex items-end">
          <Status />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
