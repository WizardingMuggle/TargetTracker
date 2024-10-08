import axios from 'axios'

//const API_URL = '/api/users/'
// const API_URL = 'http://localhost:8000/api/users/'
 const API_URL = 'https://targettracker.onrender.com/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data;
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user');
  console.log("User deleted");
}

const authService = {
  register,
  logout,
  login,
}

export default authService
