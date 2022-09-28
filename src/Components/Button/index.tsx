import './style.css'

interface ButtonType{
    text: string
    variant?: "text" | 'outlined' | 'contained'
    disabled?: boolean
    onClick? : () => void

}

const Button: React.FC<ButtonType> = ({text, variant, disabled,onClick}) => {
    return(
        <div>
            <button  
                className = {disabled ? `btn-${variant} button `  : variant ?  `button ${variant} ` : 'contained button' }
                disabled = {disabled}
                onClick = {onClick}
            >
                
                {text}
                
            </button>
        </div>
    )
}
export default Button