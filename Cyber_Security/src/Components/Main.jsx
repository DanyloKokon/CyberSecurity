import BorderGlow from './Bits/BorderGlow/BorderGlow'
function Main({ toShow }) {
    return (<main className="main">

        {toShow === 1 && <div className="md1">
            <h2 className="main-1-h2 m1h">What is Cybersecurity?</h2>
            <ul className="mdu1">
                <li className="main-1-li">
                    {/* <p className="main-1-p">The Digital Shield: Cybersecurity is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious digital attacks. It is no longer just an IT issue; it is a fundamental part of daily life, acting as the invisible armor protecting our identity, privacy, and finances.</p> */}
                    <BorderGlow
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={28}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated={false}
                        colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                        <div style={{ padding: '2em' }}>

                            <p className='main-1-p'>The Digital Shield: Cybersecurity is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious digital attacks. It is no longer just an IT issue; it is a fundamental part of daily life, acting as the invisible armor protecting our identity, privacy, and finances.</p>
                        </div>
                    </BorderGlow>
                    <img className="main-img-1" src="https://eu-images.contentstack.com/v3/assets/blt69509c9116440be8/blt8ffb90a2f64bacfa/6776f4544b281ca5e2bc465a/cybersecurity_NicoElNino-AlamyStockPhoto.jpg" alt="" /></li>
                <li className="main-1-li">
                    <img className="main-img-1" src="https://businessdesign.scene7.com/is/image/businessdesign/column-security-05-hero?ts=1768361104369&dpr=off" alt="" />
                    <BorderGlow
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={28}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated={false}
                        colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                        <div style={{ padding: '2em' }}>
                            <p className='main-1-p'>The Attacker's Motive: Cybercriminals are rarely chaotic agents; they are usually motivated by profit. Their primary goals include stealing sensitive data (like identity or credit card info), extorting money through ransomware (locking your files until you pay), or sabotaging business operations to cause disruption.</p>
                        </div>
                    </BorderGlow>
                </li>
                <li className="main-1-li">
                    <BorderGlow
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={28}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated={false}
                        colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                        <div style={{ padding: '0.5em' }}>

                            <p className='main-1-p'>The Core Mission of Security: Cybersecurity relies on a foundational concept known as the CIA Triad. This framework balances Confidentiality (keeping sensitive data shielded from unauthorized eyes), Integrity (ensuring your files haven't been altered or tampered with), and Availability (guaranteeing your systems and data remain up and accessible whenever you need them).</p>
                        </div>
                    </BorderGlow>
                    <img className="main-img-1" src="https://certiprof.com/cdn/shop/articles/Cybersecurity_certiprof.webp?v=1741879682" alt="" />
                </li>
            </ul>
        </div>}
        {toShow === 2 && <div className="md2">
            <h2 className='main-1-h2'>How to make sure you are CyberSecured?</h2>
            <ul className="mein-2-ul">

                <li className="mein-2-li l21">
                    <BorderGlow
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={28}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated={false}
                        colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                        <div style={{ padding: '2em' }}>

                            <p >Audit Your Assets: You can't protect what you don't track. Take inventory of your devices, accounts, and where your most sensitive data (like financial or personal info) is stored.</p>
                        </div>
                    </BorderGlow></li>
                <li className="mein-2-li l22">
                    <BorderGlow
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={28}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated={false}
                        colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                        <div style={{ padding: '2em' }}>

                            <p >Lock the Front Door: Ensure every single account uses a strong, unique password and that Multi-Factor Authentication (MFA) is turned on. This adds a vital second layer of defense even if someone steals your password.</p>
                        </div>
                    </BorderGlow></li>
                <li className="mein-2-li l23">
                    <BorderGlow
                        edgeSensitivity={30}
                        glowColor="40 80 80"
                        backgroundColor="#120F17"
                        borderRadius={28}
                        glowRadius={40}
                        glowIntensity={1}
                        coneSpread={25}
                        animated={false}
                        colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
                        <div style={{ padding: '2em' }}>

                            <p >Keep Everything Updated: Turn on automatic updates for your operating systems, apps, and routers. Software updates frequently patch critical security vulnerabilities that hackers actively exploit.</p>
                        </div>
                    </BorderGlow></li>
            </ul>

        </div>}
        {toShow === 3 && <div><p>3</p></div>}
    </main>);
}

export default Main;