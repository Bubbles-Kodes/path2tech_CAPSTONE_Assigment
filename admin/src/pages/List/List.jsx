import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const url = "https://musical-dollop-q7pxpqp4rj5ph9x5p-4000.app.github.dev";
  // const url = "http://localhost:4000";

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching the list");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while fetching the list");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id });
      if (response.data.success) {
        toast.success("Item deleted successfully");
        fetchList(); // Refresh the list after deletion
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Img</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length === 0 ? (
          <p>No items found.</p>
        ) : (
          list.map((item) => (
            <div className="list-table-format" key={item._id}>
              <img src={`https://musical-dollop-q7pxpqp4rj5ph9x5p-4000.app.github.dev/images/${item.img}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;