import '../index.css'

export default function Error({ message, className }) {
    return (
        <p className={`text-red-500 text-sm text-center ${className}`}>{message}</p>
    )
}