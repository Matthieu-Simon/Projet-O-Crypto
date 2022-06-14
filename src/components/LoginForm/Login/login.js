// import React, { useState } from 'react';

// function Login() {
//   const [usermail, setUsermail] = useState('');
//   const [password, setPassword] = useState('');

//   // POST LOGIN AN USER
//   // const login = () => {
//   //   Axios.post('/login', {
//   //     email: usermail,
//   //     password: password
//   //   })
//   //     .then((response) => {
//   //       console.log(response.data);
//   //     });
//   // };
//   return (
//     <div className="register-right">
//       <h2 className="login">Connexion</h2>
//       <div className="form-example">
//         <input
//           className="input-form"
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Email"
//           onChange={(e) => {
//             setUsermail(e.target.value);
//           }}
//         />
//       </div>
//       <div className="form-example">
//         <input
//           className="input-form"
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Mot de passe"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//       </div>
//       <button className="btn-form" type="submit" /*onClick={login}*/>Connexion</button>
//       <div className="input-reset">
//         <input type="checkbox" id="memories" />
//         <a className="a-form" href="#">Se souvenir de moi</a>
//         <a className="a-form" href="#">Mot de passe oublié ?</a>
//       </div>
//     </div>
//   );
// }

// export default React.memo(Login);
