import { VscChromeClose } from "react-icons/vsc";
import ElectricBorder from "./Bits/ElectricBorder/ElectricBorder";
import Switcher from "./Header/Switcher";


function Settings({ spcur, setSpcur, setSet }) {
    return (<div className="outframe">
        <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 16, width: '600px', padding: '1em', backgroundColor: '#1e1e1e' }}
        >
            <div className="modal">
                <button className='modal-close' onClick={() => setSet(false)}><VscChromeClose /></button>
                <h2>Settings</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '1em' }}>
                    <p>Special Cursor</p>
                    <Switcher funct={setSpcur} current={spcur} />
                </div>

            </div>
        </ElectricBorder >
    </div>


    );
}

export default Settings;