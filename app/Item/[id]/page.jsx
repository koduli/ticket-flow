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
      // Handle the case where ticket data couldn't be fetched
      console.error("Failed to fetch ticket data.");
      return <div>Error fetching ticket data</div>; // Show error or handle appropriately
    }
    console.log(updateTicketData);
    // Pass updateTicketData to TicketForm as props if needed
    return <TicketForm ticketData={updateTicketData} />;
  }
  // Handle the case for new ticket creation
  return <TicketForm />;
};

export default Item;
