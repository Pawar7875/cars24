import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        //<div style={style}>
        <nav style={{ backgroundColor: '#db0f62' }}
            className='navbar navbar-expand-lg navbar-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/home'>
                    CARs-30
                </Link>

                {/* <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button> */}

                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link active' aria-current='page' to='/home'>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                className='nav-link active'
                                aria-current='page'
                                to='/signin'>
                                Signin
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        //</div >

    )
}
const style = {
    backgroundImage:
        "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: '100vh',
    marginTop: '-70px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}
export default Navbar