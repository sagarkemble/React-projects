export default function Loader({ text = "Loading..." }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-gray-700 border-t-indigo-500 animate-spin" />
            {text && <p className="text-gray-400 text-sm">{text}</p>}
        </div>
    )
}
