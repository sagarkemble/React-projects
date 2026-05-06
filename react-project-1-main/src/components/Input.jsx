import '../index.css'

export default function Input({ placeholder, value, type, onChange, id, className }) {
	return (
		<input
			id={id}
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			className={`py-1 px-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${className || ''}`}
		/>
	)
}