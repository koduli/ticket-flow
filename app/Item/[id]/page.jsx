import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  let res; // Declare res outside of the try-catch block
  try {
    res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      // Check if the response was successful
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return null; // Return null or appropriate value to indicate failure
  }
  return res.json(); // This is now safe as res is defined in the function scope
};

const Item = async ({ params }) => {
  const EDIT_MODE = params.id !== "new"; // Simplified condition
  let updateTicketData = {};

  if (EDIT_MODE) {
    updateTicketData = await getTicketById(params.id);
    if (!updateTicketData) {
      console.error("Failed to fetch ticket data.");
      return <div>Error fetching ticket data</div>;
    }
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
      title: "",
      description: "",
      priority: "low",
      status: "open",
    };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default Item;
