import { VscLightbulbEmpty } from "react-icons/vsc";
import { VscShield } from "react-icons/vsc";
import { VscSparkleFilled } from "react-icons/vsc";

function Panel({setToShow}) {
    return (<div className="panel">
        <div className="logo-wrap">
            <h1 className="logo">Velvet</h1>
        </div>
        <h4 className="panel-h4">Cybersecurity</h4>
        <ul className="panel-list">
            <li onClick={()=>setToShow(1)} className="pan-list-li"><VscSparkleFilled /> <p  >CyberSecurity</p></li>
            <li onClick={()=>setToShow(2)} className="pan-list-li"><VscShield /> <p>How to make sure you are CyberSecured</p></li>
            <li onClick={()=>setToShow(3)} className="pan-list-li"><VscLightbulbEmpty /> <p>Cybersecurity tips</p></li>
        </ul>
    </div>);
}

export default Panel;