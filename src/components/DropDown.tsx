import { DownIcon } from "../assets/icons";

// Define the types for the options array
interface Option {
    id: string | number; // Assuming id can be a string or number
    value: string;
    title: string;
}

// Define the props for the DropDown component
interface DropDownProps {
    name: string;
    id: string;
    options: Option[];
}

const DropDown: React.FC<DropDownProps> = ({ name, id, options }) => {
  return (
    <div className="relative">
        <select 
            name={name} 
            id={id}
            className="select"
        >
            {options.map((option) => (
                <option value={option.value} key={option.id}>{option.title}</option>
            ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-700">
            <DownIcon />
        </div>
    </div>
  );
}

export default DropDown;
