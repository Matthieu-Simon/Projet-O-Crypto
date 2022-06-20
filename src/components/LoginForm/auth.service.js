import heroku from '../../config/api/heroku';

const signup = (pseudo, email, password) => heroku
  .post('/sign-in', {
    pseudo,
    email,
    password
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });

//   post to get the token
const login = (email, password) => heroku
  .post('/log-in', {
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    else {
      console.log(response.data.message);
    }
    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

const setCurrentUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const authService = {
  setCurrentUser,
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
