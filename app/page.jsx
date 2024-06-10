import Ticket from "./(components)/Ticket";

const Dashboard = () => {
  return (
    <div className="padding-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
};

export default Dashboard;
