import styles from './footer.css';

export default function footer() {
    
    return (
        <>
        <div className='footerDiv'>
            <div className='footerDiv footer-links'>
                <div className='row'>
                    <div className='dib'>About redBus</div>
                    <div>
                        <a href='#'>About Us</a>
                        <a href='#'>Contact Us</a>
                        <a href='#'>Mobile Version</a>
                        <a href='#'>redBus on Mobile</a>
                        <a href='#'>Sitemap</a>
                        <a href='#'>Offers</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Info</div>
                    <div>
                        <a href='#'>T & C </a>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>FAQ </a>
                        <a href='#'>Blog </a>
                        <a href='#'>Bus Operator Registration</a>
                        <a href='#'>Agent Registration</a>
                        <a href='#'>Insurance Partner</a>
                        <a href='#'>User Agreement</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Global Sites</div>
                    <div>
                        <a href='#'>India</a>
                        <a href='#'>Singapore</a>
                        <a href='#'>Malaysia</a>
                        <a href='#'>Indonesia</a>
                        <a href='#'>Peru</a>
                        <a href='#'>Colombia</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Our Partners</div>
                    <div>
                        <a href='#'>Goibibo</a>
                        <a href='#'>Makemytrip</a>
                    </div>
                </div>
                <div className='rights-cont'>
                    <div>
                        <img src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" alt="logo" />
                    </div>
                    <div>
                            <a href='#'>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</a>
                            <div className="socialMedia">
                                <a href="">
                                    <span className='fbicon icon-Facebook'></span>
                                </a>
                                <a href="">
                                    <span className='twittericon icon-Twitter'></span>
                                </a>
                            </div>
                    </div>
                    <a href='#'>
                        Ⓒ 2021 ibibogroup All rights reserved
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}