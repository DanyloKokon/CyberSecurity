function Account({user, setIsReg}) {
    return (<>
        {/* {user === null && <button className="btn-reg" onClick={() => setIsReg(true)}>
            <span className="sinup-text">Register</span>
        </button>} */}

        {/* {user !== null && <div className="acc"><p className='name-user'>Hi {user.name}</p></div>} */}
        <div className="acc"><p className='name-user'>Hi Velvet</p></div>
    </>);
}

export default Account;