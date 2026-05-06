import { useState } from "react"
import Button from "../components/Button"
import Error from "../components/Error"
import H2 from "../components/H2"
import InputComponent from "../components/InputComponent"
import '../index.css'
import { redirect, useNavigate } from "react-router-dom"

export default function Register() {
	const [userName, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [message, setMessage] = useState("")
	const [isSuccess, setIsSuccess] = useState(false)
	const navigate = useNavigate();

	function login() {
		navigate("/login")
	}

	async function registerUser() {
		if (!userName || !email || !password) {
			setIsSuccess(false)
			setMessage("Please fill in all fields")
			return;
		}

		const user = {
			email,
			password,
			username: userName.toLowerCase().replace(" ", "")
		};

		try {
			const res = await fetch('https://api.freeapi.app/api/v1/users/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(user)
			});

			const data = await res.json();

			if (res.ok) {
				setMessage("User Registered Successfully!");
				localStorage.setItem("user", JSON.stringify(data.data.user));
				navigate("/dashboard");	
			} else {
				setIsSuccess(false)
				setMessage(data.message || "Something went wrong")
			}

		} catch (err) {
			console.error(err);
			setIsSuccess(false)
			setMessage("Network error")
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 px-4">

			<div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 flex flex-col">

				<H2>Create Account</H2>

				<div className="space-y-4">

					<InputComponent
						id="name"
						value={userName}
						placeholder="Enter your name"
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						className="focus:ring-2 focus:ring-blue-500"
						label="User Name"
					/>

					<InputComponent
						id="email"
						value={email}
						placeholder="Enter your email"
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						className="focus:ring-2 focus:ring-blue-500"
						label="Email"
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

				<Button
					onClick={registerUser}
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
				>
					Register
				</Button>

				{message && (
					<Error
						message={message}
						className={isSuccess ? "text-green-600" : "text-red-600"}
					/>
				)}

				<p className="text-sm text-center text-gray-500">
					Already have an account? <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => login()}>Login</span>
				</p>

			</div>
		</div>
	)
}
