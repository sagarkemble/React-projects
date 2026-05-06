import '../index.css'
import Label from "./Label"
import Input from "./Input"

export default function InputComponent({
    id,
    value,
    placeholder,
    onChange,
    type,
    className,
    label
}) {
    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                className={className}
            />
        </div>
    )
}