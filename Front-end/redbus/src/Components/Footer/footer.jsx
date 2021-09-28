import styles from './footer.css';

export default function footer() {
    
    return (
        <>
        <div className='footerDiv'>
            <div className='footerDiv footer-links'>
                <div className='row'>
                    <div className='dib'>About redBus</div>
                    <div>
                        <a>About Us</a>
                        <a>Contact Us</a>
                        <a>Mobile Version</a>
                        <a>redBus on Mobile</a>
                        <a>Sitemap</a>
                        <a>Offers</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Info</div>
                    <div>
                        <a>T & C </a>
                        <a>Privacy Policy</a>
                        <a>FAQ </a>
                        <a>Blog </a>
                        <a>Bus Operator Registration</a>
                        <a>Agent Registration</a>
                        <a>Insurance Partner</a>
                        <a>User Agreement</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Global Sites</div>
                    <div>
                        <a>India</a>
                        <a>Singapore</a>
                        <a>Malaysia</a>
                        <a>Indonesia</a>
                        <a>Peru</a>
                        <a>Colombia</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Our Partners</div>
                    <div>
                        <a>Goibibo</a>
                        <a>Makemytrip</a>
                    </div>
                </div>
                <div className='rights-cont'>
                    <div>
                        <img src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" alt="logo" />
                    </div>
                    <div>
                            <a>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</a>
                            <div className="socialMedia">
                                <a href="">
                                    <span className='fbicon icon-Facebook'></span>
                                </a>
                                <a href="">
                                    <span className='twittericon icon-Twitter'></span>
                                </a>
                            </div>
                    </div>
                    <a>
                        Ⓒ 2021 ibibogroup All rights reserved
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}