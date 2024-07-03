import TicketForm from '@/app/(components)/TicketForm';

const getTicketById = async (id) => {
  let res;
  try {
    res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: 'no-cache',
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error fetching ticket:', error);
    return null;
  }
  return res.json();
};

const Item = async ({ params }) => {
  const EDIT_MODE = params.id !== 'new';
  let updateTicketData = {};

  if (EDIT_MODE) {
    updateTicketData = await getTicketById(params.id);
    if (!updateTicketData) {
      console.error('Failed to fetch ticket data.');
      return <div>Error fetching ticket data</div>;
    }
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: 'new',
      title: '',
      description: '',
      priority: 'low',
      status: 'todo',
    };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default Item;
