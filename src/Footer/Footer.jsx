import './Footer.css'
import LogoPampa from '../assets/LogoPampaWhite.png'
import Logo22 from '../assets/Home/logo.svg'


function Footer() {
    return (
        <>
            <footer className='text-white py-4'>
                <div className='container'>
                    <nav className='row'>
                        <div className='col-12 col-md-3 d-flex align-items-center justify-content-center mt-5'>
                            <img className='mx-2 pb-4' width='110' src={Logo22} alt="" />
                        </div>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold text-center pb-4'>
                                <h4>Col 2</h4>
                            </li>
                            <li className='text-center'>
                                En este sitio web podrás encontrar info sobre tu serie favorita
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold text-center pb-4'>
                                <h4>Col 3</h4>
                            </li>
                            <li className='text-center'>
                                En este sitio web podrás encontrar info sobre tu serie favorita
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold text-center pb-4'>
                                <h4>Col 4</h4>
                            </li>
                            <li className='d-flex justify-content-center'>
                                <i className='bi bi-facebook p-2'></i>
                                <i className='bi bi-instagram p-2'></i>
                                <i className='bi bi-twitter p-2'></i>
                                <i className='bi bi-youtube p-2'></i>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
            <div className='text-center mt-5 bg-danger'>By <img src={LogoPampa} width="70" alt="" /></div>
        </>
    )
}

export default Footer