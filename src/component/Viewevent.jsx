import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Headerad from './Headerad';

const Viewevent = () => {
  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const [newItem, setNewItem] = useState({ name: '', image: '', type: '' });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems('events');
    fetchItems('venues');
    fetchItems('food');
  }, []);

  const fetchItems = async (type) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/${type}`);
      if (type === 'events') setEvents(response.data);
      else if (type === 'venues') setVenues(response.data);
      else if (type === 'food') setFoodItems(response.data);
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
    }
  };

  const handleAddItem = async () => {
    try {
      await axios.post(`http://localhost:8080/api/${newItem.type}`, newItem);
      setNewItem({ name: '', image: '', type: '' });
      fetchItems(newItem.type);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleEditItem = (item, type) => {
    setEditingItem({ ...item, type });
  };

  const handleUpdateItem = async () => {
    try {
      await axios.put(`http://localhost:8080/api/${editingItem.type}/${editingItem.id}`, editingItem);
      setEditingItem(null);
      fetchItems(editingItem.type);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async (id, type) => {
    try {
      await axios.delete(`http://localhost:8080/api/${type}/${id}`);
      fetchItems(type);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const renderTable = (items, type) => (
    <div style={{ marginBottom: '20px' }}>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '300px', textAlign: 'center', boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}>
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{item.name}</h3>
            <img src={item.image} alt={item.name} style={{ width: '280px', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
            <div style={{ marginTop: '10px' }}>
              <button onClick={() => handleEditItem(item, type)} style={{ marginRight: '10px', padding: '10px 20px', border: 'none', backgroundColor: '#f8f9fa', color: '#343a40', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
              <button onClick={() => handleDeleteItem(item.id, type)} style={{ padding: '10px 20px', border: 'none', backgroundColor: '#343a40', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTablev = (items, type) => (
    <div style={{ marginBottom: '20px' }}>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '300px', textAlign: 'center', boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}>
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{item.placename}</h3>
            <img src={item.placeimage} alt={item.placename} style={{ width: '280px', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
            <div style={{ marginTop: '10px' }}>
              <button onClick={() => handleEditItem(item, type)} style={{ marginRight: '10px', padding: '10px 20px', border: 'none', backgroundColor: '#f8f9fa', color: '#343a40', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
              <button onClick={() => handleDeleteItem(item.id, type)} style={{ padding: '10px 20px', border: 'none', backgroundColor: '#343a40', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTablef = (items, type) => (
    <div style={{ marginBottom: '20px' }}>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', width: '300px', textAlign: 'center', boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}>
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{item.snackname}</h3>
            <img src={item.snackimage} alt={item.snackname} style={{ width: '280px', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
            <div style={{ marginTop: '10px' }}>
              <button onClick={() => handleEditItem(item, type)} style={{ marginRight: '10px', padding: '10px 20px', border: 'none', backgroundColor: '#f8f9fa', color: '#343a40', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
              <button onClick={() => handleDeleteItem(item.id, type)} style={{ padding: '10px 20px', border: 'none', backgroundColor: '#343a40', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Headerad />
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>Manage Events, Venues, and Food</h1>

        {/* Add Item Form */}
        <div style={{ marginBottom: '20px' }}>
          <h2>Add New Item</h2>
          <select
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
            style={{ padding: '8px', marginRight: '10px' }}
          >
            <option value="">Select Type</option>
            <option value="events">Event</option>
            <option value="venues">Venue</option>
            <option value="food">Food</option>
          </select>
          <input
            type="text"
            placeholder="Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newItem.image}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <button onClick={handleAddItem} style={{ padding: '8px 16px', backgroundColor: '#f8f9fa', color: '#343a40', border: 'none', borderRadius: '4px' }}>Add</button>
        </div>

        {/* Edit Item Form */}
        {editingItem && (
          <div style={{ marginBottom: '20px' }}>
            <h2>Edit {editingItem.type.charAt(0).toUpperCase() + editingItem.type.slice(1)}</h2>
            <input
              type="text"
              placeholder="Name"
              value={editingItem.name}
              onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
              style={{ padding: '8px', marginRight: '10px' }}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={editingItem.image}
              onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
              style={{ padding: '8px', marginRight: '10px' }}
            />
            <button onClick={handleUpdateItem} style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: '#f8f9fa', color: '#343a40', border: 'none', borderRadius: '4px' }}>Update</button>
            <button onClick={() => setEditingItem(null)} style={{ padding: '8px 16px', backgroundColor: '#343a40', color: '#fff', border: 'none', borderRadius: '4px' }}>Cancel</button>
          </div>
        )}

        {/* Render Cart Views for Events, Venues, and Food */}
        {renderTable(events, 'events')}
        {renderTablev(venues, 'venues')}
        {renderTablef(foodItems, 'food')}
      </div>
      <Footer />
    </>
  );
};

export default Viewevent;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Footer from './Footer';
// import Headerad from './Headerad';

// const Viewevent = () => {
//   const [events, setEvents] = useState([]);
//   const [venues, setVenues] = useState([]);
//   const [foodItems, setFoodItems] = useState([]);

//   const [newItem, setNewItem] = useState({ name: '', image: '', type: '' });
//   const [editingItem, setEditingItem] = useState(null);

//   useEffect(() => {
//     fetchItems('events');
//     fetchItems('venues');
//     fetchItems('food');
//   }, []);

//   const fetchItems = async (type) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/${type}`);
//       if (type === 'events') setEvents(response.data);
//       else if (type === 'venues') setVenues(response.data);
//       else if (type === 'food') setFoodItems(response.data);
//     } catch (error) {
//       console.error(`Error fetching ${type}:`, error);
//     }
//   };

//   const handleAddItem = async () => {
//     try {
//       await axios.post(`http://localhost:8080/api/${newItem.type}`, newItem);
//       setNewItem({ name: '', image: '', type: '' });
//       fetchItems(newItem.type);
//     } catch (error) {
//       console.error('Error adding item:', error);
//     }
//   };

//   const handleEditItem = (item, type) => {
//     setEditingItem({ ...item, type });
//   };

//   const handleUpdateItem = async () => {
//     try {
//       await axios.put(`http://localhost:8080/api/${editingItem.type}/${editingItem.id}`, editingItem);
//       setEditingItem(null);
//       fetchItems(editingItem.type);
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   };

//   const handleDeleteItem = async (id, type) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/${type}/${id}`);
//       fetchItems(type);
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const renderTable = (items, type) => (
//     <div style={{ marginBottom: '20px' }}>
//       <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id}>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
//               </td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 <button onClick={() => handleEditItem(item, type)} style={{ marginRight: '10px' }}>Edit</button>
//                 <button onClick={() => handleDeleteItem(item.id, type)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
//   const renderTablev = (items, type) => (
//     <div style={{ marginBottom: '20px' }}>
//       <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id}>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.placename}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 <img src={item.placeimage} alt={item.name} style={{ width: '100px', height: '100px' }} />
//               </td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 <button onClick={() => handleEditItem(item, type)} style={{ marginRight: '10px' }}>Edit</button>
//                 <button onClick={() => handleDeleteItem(item.id, type)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
//   const renderTablef = (items, type) => (
//     <div style={{ marginBottom: '20px' }}>
//       <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Image</th>
//             <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id}>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.snackname}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 <img src={item.snackimage} alt={item.name} style={{ width: '100px', height: '100px' }} />
//               </td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>
//                 <button onClick={() => handleEditItem(item, type)} style={{ marginRight: '10px' }}>Edit</button>
//                 <button onClick={() => handleDeleteItem(item.id, type)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <>
//     <Headerad/>
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1 style={{ textAlign: 'center' }}>Manage Events, Venues, and Food</h1>

//       {/* Add Item Form */}
//       <div style={{ marginBottom: '20px' }}>
//         <h2>Add New Item</h2>
//         <select
//           value={newItem.type}
//           onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
//           style={{ padding: '8px', marginRight: '10px' }}
//         >
//           <option value="">Select Type</option>
//           <option value="events">Event</option>
//           <option value="venues">Venue</option>
//           <option value="food">Food</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Name"
//           value={newItem.name}
//           onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//           style={{ padding: '8px', marginRight: '10px' }}
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={newItem.image}
//           onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
//           style={{ padding: '8px', marginRight: '10px' }}
//         />
//         <button onClick={handleAddItem} style={{ padding: '8px 16px' }}>Add</button>
//       </div>

//       {/* Edit Item Form */}
//       {editingItem && (
//         <div style={{ marginBottom: '20px' }}>
//           <h2>Edit {editingItem.type.charAt(0).toUpperCase() + editingItem.type.slice(1)}</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={editingItem.name}
//             onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
//             style={{ padding: '8px', marginRight: '10px' }}
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={editingItem.image}
//             onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
//             style={{ padding: '8px', marginRight: '10px' }}
//           />
//           <button onClick={handleUpdateItem} style={{ padding: '8px 16px', marginRight: '10px' }}>Update</button>
//           <button onClick={() => setEditingItem(null)} style={{ padding: '8px 16px' }}>Cancel</button>
//         </div>
//       )}

//       {/* Render Tables for Events, Venues, and Food */}
//       {renderTable(events, 'events')}
//       {renderTablev(venues, 'venues')}
//       {renderTablef(foodItems, 'food')}
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Viewevent;
