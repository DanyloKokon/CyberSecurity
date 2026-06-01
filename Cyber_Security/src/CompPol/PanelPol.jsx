import { VscLightbulbEmpty } from "react-icons/vsc";
import { VscShield } from "react-icons/vsc";
import { VscSparkleFilled } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";

function PanelPol({ setToShow, setSet }) {
    return (<div className="panel">
        <div className="logo-wrap">
            <h1 className="logo">Velvet</h1>
        </div>
        <h4 className="panel-h4">Cybersecurity</h4>
        <ul className="panel-list">
            <li onClick={() => setToShow(1)} className="pan-list-li"><VscSparkleFilled /> <p  >CyberBezpieczeństwo</p></li>
            <li onClick={() => setToShow(2)} style={{ width: '40px', gap: '5px' }} className="pan-list-li"><VscShield /> <p>Jak upewnić się, że jesteś chroniony cyberbezpieczeństwem</p></li>
            <li onClick={() => setToShow(3)} className="pan-list-li"><VscLightbulbEmpty /> <p>Wskazówki dotyczące cyberbezpieczeństwa</p></li>
        </ul>
        <br />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 1em', cursor: 'pointer' }} className="pan-list-li" onClick={() => setSet(true)}>
            <CiSettings />
            <p className="pan-list-li">Settings</p>
        </div>
    </div>);
}

export default PanelPol;