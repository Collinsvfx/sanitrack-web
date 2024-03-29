// File contains CRUD operations for staffs
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStaff = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const LOCAL_URL = import.meta.env.VITE_LOCAL_URL;

  const navigate = useNavigate()

  const [responseMessage, setResponseMessage] = useState();
  const [allStaffs, setAllStaffs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const access_token = localStorage.getItem("auth-token");

  const addStaff = async (username, password, role) => {
    await axios
      .post(`${BASE_URL}create-user`, {
        username: username,
        role: role,
        password: password,
      })
      .then((response) => {
        setResponseMessage("Staff Added.")
      })
      .catch((error) => {
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 && data && data.message) {
            setResponseMessage(data.message);
            console.log("An error occured", data.message);
          } else {
            console.log("Axios error:", error);
          }
        } else {
          console.log("Network error:", error.message);
        }
      });
  };

  const getStaffById = async (userId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}get-user?userId=${userId}`,
        { headers: { Authorization: `Bearer ${access_token}` } }
      );
      const userDetails = response.data; // Adjust based on your user data structure
      // console.log(`User Details for ID ${userId}:`, userDetails);
      return userDetails;
    } catch (error) {
      console.error(`Error fetching user details for ID ${userId}:`, error);
      return null;
    }
  };

  const getAllStaffs = async (page, itemPerPage) => {
    await axios
      .get(`${BASE_URL}get-all-users?page=${page}&documentCount=${itemPerPage}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((response) => {
        setAllStaffs(response.data.data.allUsers);
        setTotalPages(Math.ceil(response.data.data.totalUsers/itemPerPage))
      })
      .catch((error) => {
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 && data && data.message) {
            setResponseMessage(data.message);
            console.log("An error occurred", data.message);
          } else {
            console.log("Axios error:", error);
          }
        } else {
          console.log("Network error:", error.message);
        }
      });
  };

  const fireStaff = async (staffId) => {
    await axios
      .put(`${BASE_URL}delete-user`, {
        staffId: staffId
      }, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((response) => {
        console.log(response.data);
        navigate('/home/user')
      })
      .catch((error) => {
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 && data && data.message) {
            setResponseMessage(data.message);
            console.log("An error occurred", data.message);
          } else {
            console.log("Axios error:", error);
          }
        } else {
          console.log("Network error:", error.message);
        }
      });
  };

  const restoreStaff = async (staffId) => {
    await axios
      .put(`${BASE_URL}update-user-status`, {
        staffId: staffId
      }, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((response) => {
        console.log(response.data);
        navigate('/home/user')
      })
      .catch((error) => {
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 && data && data.message) {
            setResponseMessage(data.message);
            console.log("An error occurred", data.message);
          } else {
            console.log("Axios error:", error);
          }
        } else {
          console.log("Network error:", error.message);
        }
      });
  };
  return {
    addStaff,
    responseMessage,
    getStaffById,
    getAllStaffs,
    allStaffs,
    fireStaff, 
    restoreStaff, 
    totalPages
  };
};

export default useStaff;
