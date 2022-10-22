import "./button.component.scss"

const BUTTON_TYPE_CLASSES = {
    google : "google",
    inverted : "inverted"

}

const Button = ({children , button_type , ...otherProps})=>{
    return(
        <button className={`button_component ${BUTTON_TYPE_CLASSES[button_type]}`} {...otherProps}>{children}</button>
    )
}

export default Button