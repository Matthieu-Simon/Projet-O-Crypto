// import React, { useState } from 'react';
// import Axios from 'axios';

// function Signin() {
//   const [usernameReg, setUserNameReg] = useState('');
//   const [usermailReg, setUserMailReg] = useState('');
//   const [passwordReg, setPasswordReg] = useState('');

//   // POST REGISTER AN USER
//   // const register = () => {
//   //   Axios.post('/register', {
//   //     username: usernameReg,
//   //     email: usermailReg,
//   //     password: passwordReg
//   //   })
//   //     .then((response) => {
//   //       console.log(response);
//   //     });
//   // };
//   return (
//     <div className="register-left">
//       <h2 className="signin">Inscription</h2>
//       <form action="" method="get" className="form-inscription">
//         <div className="form-example">
//           <input
//             className="input-form"
//             type="text"
//             placeholder="Pseudo"
//             onChange={(e) => {
//               setUserNameReg(e.target.value);
//             }}
//           />
//         </div>
//         <div className="form-example">
//           <input
//             className="input-form"
//             type="email"
//             placeholder="Email"
//             onChange={(e) => {
//               setUserMailReg(e.target.value);
//             }}
//           />
//         </div>
//         <div className="form-example">
//           <input
//             className="input-form"
//             type="password"
//             placeholder="Mot de passe"
//             onChange={(e) => {
//               setPasswordReg(e.target.value);
//             }}
//           />
//         </div>
//         <button className="btn-form" type="submit" /*onClick={register}*/>S'enregistrer</button>
//       </form>
//     </div>
//   );
// }

// export default React.memo(Signin);