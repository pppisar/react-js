import './Button.css'

export default function Button({ children, onClick, isActive }) { 
    // const handleMouseEnter = () => console.log('entered')

    return (
        <button className={isActive ? 'button active' : 'button'} onClick={onClick}>{ children }</button>
    )
}