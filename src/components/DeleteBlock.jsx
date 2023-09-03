import axios from "axios";

const DeleteBlock = ({ documentId }) => {
  const deleteTicket = async () => {
    const response = await axios.delete(
      `${process.env.DEPLOYED_URL}/tickets/${documentId}`
    );
    const success = response.status == 200;
    if (success) window.location.reload();
  };

  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>
        ✖
      </div>
    </div>
  );
};

export default DeleteBlock;
