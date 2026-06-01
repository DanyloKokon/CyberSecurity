import BorderGlow from './Bits/BorderGlow/BorderGlow'
function MainPol({ toShow }) {
    return (<main className="main">

        {toShow === 1 && <div className="md1">
            <h2 className="main-1-h2 m1h">Czym jest cyberbezpieczeństwo?</h2>
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
                        <div style={{ padding: '1em' }}>

                            <p className='main-1-p'>Tarcza Cyfrowa: Cyberbezpieczeństwo to praktyka ochrony komputerów, serwerów, urządzeń mobilnych, systemów elektronicznych, sieci i danych przed złośliwymi atakami cyfrowymi. Nie jest to już tylko problem IT; to fundamentalny element codziennego życia, działający jak niewidzialna zbroja chroniąca naszą tożsamość, prywatność i finanse.</p>
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
                        <div style={{ padding: '1em' }}>
                            <p className='main-1-p'>Motyw atakującego: Cyberprzestępcy rzadko są chaotyczni; zazwyczaj kierują się chęcią zysku. Ich główne cele to kradzież poufnych danych (takich jak dane osobowe lub karty kredytowe), wyłudzanie pieniędzy za pomocą oprogramowania ransomware (blokowanie plików do czasu zapłaty) lub sabotowanie działalności biznesowej w celu wywołania zakłóceń.</p>
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

                            <p className='main-1-p'>Podstawowa misja: Cyberbezpieczeństwo opiera się na Triadzie CIA, czyli strukturze zapewniającej równowagę między poufnością (ochroną poufnych danych przed nieautoryzowanym dostępem), integralnością (zapewnieniem, że pliki nie zostaną zmienione ani sfałszowane) i dostępnością (gwarancją, że Twoje dane będą dostępne zawsze, gdy ich potrzebujesz).</p>
                        </div>
                    </BorderGlow>
                    <img className="main-img-1" src="https://certiprof.com/cdn/shop/articles/Cybersecurity_certiprof.webp?v=1741879682" alt="" />
                </li>
            </ul>
        </div>}



        {toShow === 2 && <div className="md2">
            <h2 className='main-1-h2'>Jak mieć pewność, że jesteś chroniony cyberbezpieczeństwem?</h2>
            <ul className="mein-2-ul">

                <li className="main-1-li l21">
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
                        <div style={{ padding: '1em' }}>

                            <p className='main-1-p' >Audit Twoich Zasobów: Nie możesz chronić tego, czego nie śledzisz. Zrób spis swoich urządzeń, kont i miejsc, gdzie przechowywane są najwrażliwsze dane (np. informacje finansowe lub osobiste).</p>
                        </div>
                    </BorderGlow>
                    <img className='main-img-1' src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/mckinsey%20explainers/what%20is%20cybersecurity/what-is-cybersecurity-1370511057-standard-1536x1536.jpg?mw=677&car=42:25" alt="" />
                    </li>
                <li className="main-1-li l22">

                    <img className='main-img-1' src="https://www.investopedia.com/thmb/DdAng1hBQWDl-jSTkK7o1RWBLyc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Investing_in_Cybersecurity-Heres_What_You_Need_to_Know-574441a7f167488c8271bd08debd0a27.jpg" alt="" />
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
                        <div style={{ padding: '1em' }}>

                            <p className='main-1-p' >Zamknij Przód: Upewnij się, że każde konto używa silnego, unikalnego hasła i że Wielofaktorowa Autoryzacja (MFA) jest włączona. Dodaje to ważną drugą warstwę obrony, nawet jeśli ktoś ukradnie Twoje hasło.</p>
                        </div>
                    </BorderGlow></li>
                <li className="main-1-li l23">
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
                        <div style={{ padding: '1em' }}>

                            <p className='main-1-p' >Aktualizuj Wszystko: Włącz automatyczne aktualizacje dla systemów operacyjnych, aplikacji i routerów. Aktualizacje oprogramowania często naprawiają krytyczne luki w zabezpieczeniach, które hakerzy aktywnie wykorzystują.</p>
                        </div>
                    </BorderGlow>
                     <img className='main-img-1' src="https://api.edoxi.com/assets/studyhub/01-A_Comprehensive_Guide_to_Cybersecurity-735X335-_jan1.webp" alt="" />
                    </li>
            </ul>

        </div>}





        {toShow === 3 && <div ><h2>Quick Cybersecurity Tips</h2>
            <ul className="mein-2-ul">
                <li className="main-1-li l21">
                    <img className='main-img-1'  src="https://atos.net/wp-content/uploads/slider/cache/ce12b7a0b4edaf6e1f6e484b788e2cea/atos-cybersecurity-white-paper-hero.jpg" alt="" />
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

                            <p className='main-1-p' >Zastanów się, zanim klikniesz: phishing to najczęstszy sposób, w jaki hakerzy atakują komputery. Zachowaj szczególną ostrożność w przypadku pilnych wiadomości e-mail, niespodziewanych wiadomości SMS lub dziwnych linków, w których proszą o podanie danych osobowych, nawet jeśli wyglądają, jakby pochodziły od zaufanej marki.</p>
                        </div>
                    </BorderGlow>
                </li>

                <li className="main-1-li l22">
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

                            <p className='main-1-p' >Zabezpiecz swoje Wi-Fi: Nigdy nie przeprowadzaj wrażliwych działań biznesowych ani nie loguj się na konta bankowe w publicznym Wi-Fi bez VPN (Wirtualna Prywatna Sieć). W domu upewnij się, że Twój router ma silne, niestandardowe hasło.</p>
                        </div>
                    </BorderGlow>
                    <img className='main-img-1' src="https://www.1stformationsblog.co.uk/wp-content/uploads/2021/10/shutterstock_505066678.jpg" alt="" />
                </li>


                <li className="main-1-li l23">
                    <img className='main-img-1' src="https://cybersecurity.bureauveritas.com/uploads/media/_1200x630_crop_center-center_none/Bureau-Veritas-Cybersecurity-Hero.png" alt="" />
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

                            <p className='main-1-p' >Zrób Kopię Zapasową: Regularnie twórz kopie zapasowe ważnych plików na zewnętrzny dysk twardy lub bezpieczną usługę chmurową. Jeśli zostaniesz zaatakowany przez ransomware, odświeżona kopia zapasowa oznacza, że nie stracisz swoich danych.</p>
                        </div>
                    </BorderGlow>
                </li>
            </ul>
        </div>}
    </main>);
}

export default MainPol;