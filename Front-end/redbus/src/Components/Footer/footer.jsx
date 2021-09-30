import styles from './footer.css';

export default function footer() {
    
    return (
        <>
        <div className='footerDiv'>
            <div className='footerDiv footer-links'>
                <div className='row'>
                    <div className='dib'>About redBus</div>
                    <div>
                        <a className='a-tag' href='#'>About Us</a>
                        <a className='a-tag' href='#'>Contact Us</a>
                        <a className='a-tag' href='#'>Mobile Version</a>
                        <a className='a-tag' href='#'>redBus on Mobile</a>
                        <a className='a-tag' href='#'>Sitemap</a>
                        <a className='a-tag' href='#'>Offers</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Info</div>
                    <div>
                        <a className='a-tag' href='#'>{'T & C'} </a>
                        <a className='a-tag' href='#'>Privacy Policy</a>
                        <a className='a-tag' href='#'>FAQ </a>
                        <a className='a-tag' href='#'>Blog </a>
                        <a className='a-tag' href='#'>Bus Operator Registration</a>
                        <a className='a-tag' href='#'>Agent Registration</a>
                        <a className='a-tag' href='#'>Insurance Partner</a>
                        <a className='a-tag' href='#'>User Agreement</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Global Sites</div>
                    <div>
                        <a className='a-tag' href='#'>India</a>
                        <a className='a-tag' href='#'>Singapore</a>
                        <a className='a-tag' href='#'>Malaysia</a>
                        <a className='a-tag' href='#'>Indonesia</a>
                        <a className='a-tag' href='#'>Peru</a>
                        <a className='a-tag' href='#'>Colombia</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Our Partners</div>
                    <div>
                        <a className='a-tag' href='#'>Goibibo</a>
                        <a className='a-tag' href='#'>Makemytrip</a>
                    </div>
                </div>
                <div className='rights-cont'>
                    <div>
                        <img src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" alt="logo" />
                    </div>
                    <div>
                            <a className='a-tag' href='#'>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</a>
                            <div className="socialMedia">
                                <a href="">
                                    <span className='fbicon icon-Facebook'></span>
                                </a>
                                <a href="">
                                    <span className='twittericon icon-Twitter'></span>
                                </a>
                            </div>
                    </div>
                    <a className='a-tag' href='#'>
                        Ⓒ 2021 ibibogroup All rights reserved
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}