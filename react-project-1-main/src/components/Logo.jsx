export default function Logo({ avatarUrl, username, role }) {
    const initials = username
        ? username.slice(0, 2).toUpperCase()
        : "??"

    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-indigo-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                </div>
                <span className="text-white font-semibold text-sm tracking-wide">AppName</span>
            </div>

            <div className="flex items-center gap-3">
                <div className="text-right">
                    <p className="text-white text-sm font-medium leading-none">{username}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{role}</p>
                </div>
                {avatarUrl ? (
                    <img
                        src={avatarUrl}
                        alt={username}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500"
                    />
                ) : (
                    <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center ring-2 ring-indigo-400">
                        <span className="text-white text-sm font-semibold">{initials}</span>
                    </div>
                )}
            </div>
        </nav>
    )
}
