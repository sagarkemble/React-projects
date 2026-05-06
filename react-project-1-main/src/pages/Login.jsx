import { useState } from "react"
import Button from "../components/Button"
import Error from "../components/Error"
import H2 from "../components/H2"
import InputComponent from "../components/InputComponent"
import Loader from "../components/Loader"
import '../index.css'
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    async function loginUser() {
        if (!username || !password) {
            setIsSuccess(false)
            setMessage("Please fill in all fields")
            return;
        }

        setIsLoading(true);
        setMessage("");

        const user = { username, password };

        try {
            const res = await fetch('https://api.freeapi.app/api/v1/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });

            const data = await res.json();

            if (res.ok) {
                setIsSuccess(true)
                setMessage("User logged in successfully")

                localStorage.setItem("user", JSON.stringify(data.data.user))
                navigate("/dashboard", { state: { user: data.data.user } })
                
            } else {
                setIsSuccess(false)
                setMessage(data.message || "Something went wrong")
            }

        } catch (err) {
            console.error(err);
            setIsSuccess(false)
            setMessage("Network error")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 flex flex-col">

                <H2>Login</H2>

                <div className="space-y-4">
                    <InputComponent
                        id="name"
                        value={username}
                        placeholder="Enter your name"
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className="focus:ring-2 focus:ring-blue-500"
                        label="Name"
                    />

                    <InputComponent
                        id="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="focus:ring-2 focus:ring-blue-500"
                        label="Password"
                    />
                </div>

                {isLoading ? (
                    <div className="py-2">
                        <Loader text="" />
                    </div>
                ) : (
                    <Button
                        onClick={loginUser}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Login
                    </Button>
                )}

                {message && (
                    <Error
                        message={message}
                        className={isSuccess ? "text-green-600" : "text-red-600"}
                    />
                )}

                <p className="text-sm text-center text-gray-500">
                    Don't have an account?{" "}
                    <span
                        className="text-blue-600 cursor-pointer hover:underline"
                        onClick={() => navigate("/")}
                    >
                        Register
                    </span>
                </p>

            </div>
        </div>
    )
}
