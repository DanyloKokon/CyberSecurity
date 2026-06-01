function Account({user, setIsReg}) {
    return (<>
        {user === null && <button className="btn-reg" onClick={() => setIsReg(true)}>
            <span className="sinup-text">Register</span>
        </button>}

        {user !== null && <p className='name-user'>Hi {user.name}</p>}
    </>);
}

export default Account;