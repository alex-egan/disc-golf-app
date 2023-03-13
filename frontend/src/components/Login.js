import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ReactSession }  from 'react-client-session';

function Login() {
    const [userName, setUsername] = useState('');

    function handleChange(e) {
        setUsername(e.target.value);
    }

    function tryLogin() {
        fetch(`http://localhost:5000/users/${userName}`)
            .then(res => res.json())
            .then(user => {
                if (user.username == userName) {
                    ReactSession.set("username", user.username);
                    window.location.replace("/");
                }
            })
            .catch((err) => console.log(err));
    }

    return (
      <div className="login align-items-center justify-content-center">
        <div className="col-md">
            <div className="row">
                <label for="username">User Name: </label>
                <input id="username" value={userName} onChange={handleChange}/>
            </div>
        </div>
        <div className="col-sm">
            <button type="submit" onClick={tryLogin}>Login</button>
        </div>
      </div>
    );
}
  
export default Login;