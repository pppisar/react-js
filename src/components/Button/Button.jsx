import classes from './Button.module.css'

export default function Button({ children, onClick, isActive }) { 
    // const handleMouseEnter = () => console.log('entered')

    return (
        <button className={isActive ? `${classes.button} ${classes.active}` : classes.button}
            onClick={onClick}>{children}</button>
    )
}