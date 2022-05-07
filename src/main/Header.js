

const Header = () => {

    return (
        <div className="card" style={{width: '100'}}>
        <div className="card-header" style={{background: '#1e1412'}}>
            <ul className="nav nav-tabs card-header-tabs" style={{width: '100%'}}>
                <li className="nav-item">
                    <h1 style={{padding: '0px', margin: '1%', width: '270px'}}>English Project</h1>
                </li>
                <li className="nav-item" style={{fontFamily: 'sans-serif', fontSize: '30px', color: '#D1D5DB'}}><a className="nav-link text-end d-inline-block float-end d-xl-flex justify-content-xl-end" href="/" style={{fontFamily: 'sans-serif', color: '#D1D5DB', fontSize: '30px'}}>Game</a></li>
                <li className="nav-item" style={{fontFamily: 'sans-serif', fontSize: '30px', color: '#D1D5DB'}}><a className="nav-link text-end d-inline-block float-end d-xl-flex justify-content-xl-end" href="/essay" style={{fontFamily: 'sans-serif', color: '#D1D5DB', fontSize: '30px'}}>Paper</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Header;