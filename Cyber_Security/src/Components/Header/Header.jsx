import GlassIcons from "../GlassIcons/GlassIcons";
import { CiSearch } from "react-icons/ci";
import Account from "./Account";
import Languages from "./Languages";
import Switcher from "./Switcher";
import { CiBellOn } from "react-icons/ci";


function Header( {cr, scur, setIsReg, user }) {


    const items = [
        { icon: <CiBellOn />,  color: '#ECCCFF', label: 'Notifications' },
        
    ];

    return (
        <header className="header">
            <form action="">
            <CiSearch />
                <input className="header-inp" placeholder="Search" type="text" name="" id="" />
            </form>
            <Switcher></Switcher>
            <Languages currentLang={cr} setCurrentLang={scur}></Languages>
            <GlassIcons items={items}></GlassIcons>
            <Account setIsReg={setIsReg} user={user}></Account>

        </header>
    );
}

export default Header;