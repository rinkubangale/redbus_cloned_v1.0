import styles from './footer.css';

export default function footer() {
    
    return (
        <>
        <div className='footerDiv'>
            <div className='footerDiv footer-links'>
                <div className='row'>
                    <div className='dib'>About redBus</div>
                    <div>
                        <div className='a-tag' href='#'>About Us</div>
                        <div className='a-tag' href='#'>Contact Us</div>
                        <div className='a-tag' href='#'>Mobile Version</div>
                        <div className='a-tag' href='#'>redBus on Mobile</div>
                        <div className='a-tag' href='#'>Sitemap</div>
                        <div className='a-tag' href='#'>Offers</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Info</div>
                    <div>
                        <div className='a-tag' href='#'>{'T & C'} </div>
                        <div className='a-tag' href='#'>Privacy Policy</div>
                        <div className='a-tag' href='#'>FAQ </div>
                        <div className='a-tag' href='#'>Blog </div>
                        <div className='a-tag' href='#'>Bus Operator Registration</div>
                        <div className='a-tag' href='#'>Agent Registration</div>
                        <div className='a-tag' href='#'>Insurance Partner</div>
                        <div className='a-tag' href='#'>User Agreement</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Global Sites</div>
                    <div>
                        <div className='a-tag' href='#'>India</div>
                        <div className='a-tag' href='#'>Singapore</div>
                        <div className='a-tag' href='#'>Malaysia</div>
                        <div className='a-tag' href='#'>Indonesia</div>
                        <div className='a-tag' href='#'>Peru</div>
                        <div className='a-tag' href='#'>Colombia</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='dib'>Our Partners</div>
                    <div>
                        <div className='a-tag' href='#'>Goibibo</div>
                        <div className='a-tag' href='#'>Makemytrip</div>
                    </div>
                </div>
                <div className='rights-cont'>
                    <div>
                        <img src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" alt="logo" />
                    </div>
                    <div>
                            <div className='a-tag' href='#'>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</div>
                            <div className="socialMedia">
                                <div href="">
                                    <span className='fbicon icon-Facebook'></span>
                                </div>
                                <div href="">
                                    <span className='twittericon icon-Twitter'></span>
                                </div>
                            </div>
                    </div>
                    <div className='a-tag' href='#'>
                        Ⓒ 2021 ibibogroup All rights reserved
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}