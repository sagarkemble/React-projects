import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Loader from "../components/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";

export function getStoredUser() {
    try {
        const item = localStorage.getItem("user");
        return item && item !== "undefined" ? JSON.parse(item) : null;
    } catch {
        return null;
    }
}

export default function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            const resolved = location.state?.user || getStoredUser();
            setUser(resolved);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <Loader text="Loading your dashboard..." />
            </div>
        )
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <p className="text-gray-400 text-sm">
                    No user found.{" "}
                    <span
                        className="text-indigo-400 underline cursor-pointer"
                        onClick={() => navigate("/login")}
                    >
                        Login again
                    </span>
                </p>
            </div>
        )
    }

    const joinedDate = user.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-US", {
            year: "numeric", month: "long", day: "numeric"
        })
        : "—"

    function logout() {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <Logo
                avatarUrl={user.avatar?.url}
                username={user.username}
                role={user.role}
            />

            <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">

                <div>
                    <h1 className="text-2xl font-bold">Welcome back, {user.username} 👋</h1>
                    <p className="text-gray-400 text-sm mt-1">Here's what's going on with your account.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <StatCard label="Role" value={user.role} />
                    <StatCard label="Login type" value={user.loginType?.replace("_", " ")} />
                    <StatCard
                        label="Email verified"
                        value={user.isEmailVerified ? "Yes" : "No"}
                        sub={user.isEmailVerified ? "Account verified" : "Verification pending"}
                    />
                </div>

                <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-sm uppercase tracking-widest text-gray-400">Profile details</h2>

                    <div className="flex items-center gap-4">
                        {user.avatar?.url ? (
                            <img
                                src={user.avatar.url}
                                alt={user.username}
                                className="w-16 h-16 rounded-full object-cover ring-2 ring-indigo-500"
                            />
                        ) : (
                            <div className="w-16 h-16 rounded-full bg-indigo-700 flex items-center justify-center text-2xl font-bold">
                                {user.username?.slice(0, 2).toUpperCase()}
                            </div>
                        )}
                        <div>
                            <p className="text-lg font-semibold">{user.username}</p>
                            <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-4 grid grid-cols-2 gap-y-3 text-sm">
                        <div>
                            <p className="text-gray-500 text-xs">Member since</p>
                            <p className="text-white">{joinedDate}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs">Account ID</p>
                            <p className="text-white font-mono text-xs truncate">{user._id}</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={logout}
                    className="w-full py-2.5 rounded-xl border border-red-700 text-red-400 hover:bg-red-950 transition text-sm font-medium"
                >
                    Log out
                </button>

            </main>
        </div>
    )
}