export default function StatCard({ label, value, sub }) {
    return (
        <div className="bg-gray-800 rounded-xl p-5 flex flex-col gap-1 border border-gray-700">
            <p className="text-gray-400 text-xs uppercase tracking-widest">{label}</p>
            <p className="text-white text-2xl font-bold">{value}</p>
            {sub && <p className="text-gray-500 text-xs">{sub}</p>}
        </div>
    )
}
