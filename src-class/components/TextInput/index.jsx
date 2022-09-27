import './style.css';

export const TextInput = ({searchValue, onChange }) => {
    return (
        <input 
          className="text-input"
          type="search" 
          value={searchValue}
          onChange={onChange}  
          placeholder="Type your search"
        />
    );
}