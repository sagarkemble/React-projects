import '../index.css'

export default function Button({
    onClick, // title
    children // the content that should be inside the button
}) {
    return (
        <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors" >
            {children}
        </button>
    )
}