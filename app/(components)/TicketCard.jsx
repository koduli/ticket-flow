import Delete from './Delete';
import Priority from './Priority';
import Progress from './Progress';
import Link from 'next/link';
import { FaBug } from 'react-icons/fa'; // Import the bug icon
import { RiTaskLine } from 'react-icons/ri'; // Import the task icon
import { MdHistoryEdu } from 'react-icons/md'; // Import the user story icon

const Ticket = ({
  _id,
  title,
  description,
  priority,
  status,
  createdAt,
  progress,
  category, // Ensure category is passed as a prop
  fetchTickets,
  iconSize = '24px', // Default icon size
}) => {
  const getStatusBgColor = (status) => {
    switch (status) {
      case 'todo':
        return 'bg-blue-500/50';
      case 'in_progress':
        return 'bg-yellow-500/50';
      case 'done':
        return 'bg-green-500/50';
      default:
        return 'bg-stone-700/50';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'bug':
        return <FaBug style={{ fontSize: '22px', color: 'white' }} />;
      case 'task':
        return <RiTaskLine style={{ fontSize: iconSize, color: 'white' }} />;
      case 'user_story':
        return <MdHistoryEdu style={{ fontSize: '30px', color: 'white' }} />;
      default:
        return null;
    }
  };

  const getCategoryFlag = (category) => {
    const className = 'text-lg font-bold text-white'; // Set the desired font size and weight, and color
    switch (category) {
      case 'bug':
        return <span className={className}>Bug</span>;
      case 'task':
        return <span className={className}>Task</span>;
      case 'user_story':
        return <span className={className}>User Story</span>;
      default:
        return '';
    }
  };

  return (
    <div
      className={`flex flex-col ${getStatusBgColor(
        status
      )} hover:bg-stone-600 rounded-md shadow-lg p-4 m-2`}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          {getCategoryIcon(category)}
          {getCategoryFlag(category)}
        </div>
        <Delete id={_id} fetchTickets={fetchTickets} />
      </div>
      <Link href={`Item/${_id}`} style={{ display: 'contents' }}>
        <h4>{title}</h4>
        <hr className="h-1 border-0 bg-gray-300 mb-2 rounded" />
        <p className="whitespace-pre-wrap">{description}</p>
        <div className="flex-grow"></div>
        <div className="flex justify-between items-center mt-2">
          <div
            className="flex items-center space-x-2"
            style={{ minWidth: '120px' }}
          >
            <p className="text-xs my-1">
              {new Date(createdAt).toLocaleString()}
            </p>
          </div>
          <div
            className="flex items-center space-x-2"
            style={{ minWidth: '100px' }}
          >
            <Priority priority={priority} />
          </div>
          <div className="flex items-center space-x-2">
            <Progress progress={progress} className="w-3/4" />
            <span className="ml-2 text-sm">{`${progress}%`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Ticket;
