import { useState } from "react";
function Languages({ currentLang, setCurrentLang }) {
    const [isOpen, setIsopen] = useState(false)
    
    const handleCklick = () => {
        setIsopen(!isOpen)
    }

    const handleCurrent = (lang) => {
        
         setCurrentLang(lang)

    }

    return (<div>
        <div className="dropdown">
            <button onClick={handleCklick} className="dropbtn">{currentLang}</button>
            {isOpen ? (<div id="myDropdown" className="dropdown-content">
                <div onClick={() => handleCurrent('Polski')}><p >Polski</p></div>
                <div onClick={() => handleCurrent('English')}><p >English</p></div>
            </div>) : null}
        </div>
    </div>);
}

export default Languages;