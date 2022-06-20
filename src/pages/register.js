import { useCallback, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, } from "firebase/auth";
import { Navigate, useNavigate} from "react-router-dom";
import { auth } from "../firebase";

export default function Register() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [error, setError] = useState(""); 
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const handleRegisterEmailChange = (e) => {
        setRegisterEmail(e.target.value);
    }

    const handleRegisterPasswordChange = (e) => {
        setRegisterPassword(e.target.value);
    }

    const handleRegisterSubmit = useCallback(
        (e) => {
            e.preventDefault();
            // Login with firebase
            createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/');
                // ...
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });
            }, 
            [registerEmail, registerPassword, setError]
        );


        return (


            <div>
            <div>
            <h1>Login</h1>
                <form onSubmit={handleRegisterSubmit}>
                    <label>
                        Email : 
                        <input type="email" name="email" onChange={handleRegisterEmailChange} />
                    </label>
                    <label className='input'>
                        Password : 
                        <input type="password" name="password" onChange={handleRegisterPasswordChange}/>
                    </label>
                    {error && <p>{error}</p>}
                    <div align='center'>
                        <button type="submit">
                            <span>Login </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );


        }