import { TbUrgent } from "react-icons/tb";

const Priority = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <TbUrgent
        size="35px"
        className={`pr-1 ${priority > 0 ? "text-red-400" : "text-grey-400"}`}
      />
      <TbUrgent
        size="35px"
        className={`pr-1 ${priority > 1 ? "text-red-400" : "text-grey-400"}`}
      />
      <TbUrgent
        size="35px"
        className={`pr-1 ${priority > 2 ? "text-red-400" : "text-grey-400"}`}
      />
      <TbUrgent
        size="35px"
        className={`pr-1 ${priority > 3 ? "text-red-400" : "text-grey-400"}`}
      />
    </div>
  );
};

export default Priority;
