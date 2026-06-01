function Switcher({funct, current}) {

        const handleChange = (event) => {
            funct(event.target.checked);
        }

    return (
    <label className="switch">
        <input type="checkbox" onChange={handleChange} checked={current}/>
            <span className="slider round"></span>
            
    </label>
    );
}

export default Switcher;