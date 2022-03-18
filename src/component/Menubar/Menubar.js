import './Menubar.css'

const Menubar = ({ num }) => {
    return (
        <div className='bg-primary p-3 fixed-top'>
            <div className="container">
                <div className="row text-white">
                    <div className="col-md-2">Logo</div>
                    <div className="col-md-10">
                        <div className='list d-flex'>
                            <li>Home</li>
                            <li>Contact</li>
                            <li className='position-relative'>Cart <sup>{num}</sup></li>
                            <li>Login</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;