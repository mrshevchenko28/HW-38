
function Button(props){
    let count = 0;
    const handleClick = () => {
        if (count < 3) {
            count++;
            console.log(`${props.name} you clicked me ${count} times`)   
        }
        else { 
            console.log(`${props.name} stop clicking me!`)
        }

    };
    const handleDoubleClick = (e) => e.target.textContent = props.funnyText;
    return (<button className="button" onClick={handleClick} onDoubleClick={handleDoubleClick}>{props.text}</button>);
}

export default Button
