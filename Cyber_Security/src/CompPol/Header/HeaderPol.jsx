import GlassIcons from "../Bits/GlassIcons/GlassIcons";
// import { CiSearch } from "react-icons/ci";
import AccountPol from "./AccountPol";
import Languages from "./Languages";

import { CiBellOn } from "react-icons/ci";


function HeaderPol( {cr, scur, setIsReg, user }) {


    const items = [
        { icon: <CiBellOn />,  color: '#ECCCFF', label: 'Notifications' },
        
    ];

    return (
        <header className="header">
            <form className="header-form" action="">
           
                <input className="header-inp"   placeholder="Search" type="text" name="" id="" />
            </form>
            
            <Languages currentLang={cr} setCurrentLang={scur}></Languages>
            <GlassIcons items={items}></GlassIcons>
            <AccountPol setIsReg={setIsReg} user={user}></AccountPol>

        </header>
    );
}

export default HeaderPol;