const Status = ({ status = "unknown" }) => {
  const getColor = (status) => {
    let color = "";
    switch (status.toLowerCase()) {
      case "todo":
        color = "bg-red-500";
        return color;
      case "in_progress":
        color = "bg-yellow-500";
        return color;
      case "done":
        color = "bg-green-500";
        return color;
      default:
        color = "bg-slate-700";
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default Status;
