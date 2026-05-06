import '../index.css'

export default function H2({ children }) {
    return (
        <h2 className="text-2xl font-bold text-center text-gray-800">
            {children}
        </h2>
    )
}