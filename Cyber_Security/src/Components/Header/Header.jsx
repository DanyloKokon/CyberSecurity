import GlassIcons from "../GlassIcons/GlassIcons";
import Languages from "./Languages";
import Switcher from "./Switcher";
import { CiBellOn } from "react-icons/ci";

function Header() {


    const items = [
        { icon: <CiBellOn />,  color: 'pink', label: 'Notifications' },
        
    ];

    return (
        <header>
            <form action="">
                <input type="text" name="" id="" />
            </form>
            <GlassIcons items={items}></GlassIcons>
        </header>
    );
}

export default Header;