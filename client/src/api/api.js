// import axios from "axios";

// const baseURL = "http://localhost:8000/"; // Replace 'your_port' with your actual port number

// const axiosInstance = axios.create({
//   baseURL: baseURL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Function to handle API requests
// const api = {
//   // Get all items
//   getAllItems: async () => {
//     const response = await axiosInstance.get("/airlines");
//     return response.data;
//   },

//   // Get a single item by ID
//   getItemById: async (itemId) => {
//     const response = await axiosInstance.get(`/items/${itemId}`);
//     return response.data;
//   },

//   // Create a new item
//   createItem: async (newItem) => {
//     const response = await axiosInstance.post("/items", newItem);
//     return response.data;
//   },

//   // Update an existing item
//   updateItem: async (itemId, updatedItem) => {
//     const response = await axiosInstance.put(`/items/${itemId}`, updatedItem);
//     return response.data;
//   },

//   // Delete an item
//   deleteItem: async (itemId) => {
//     const response = await axiosInstance.delete(`/items/${itemId}`);
//     return response.data;
//   },
// };

// export default api;
