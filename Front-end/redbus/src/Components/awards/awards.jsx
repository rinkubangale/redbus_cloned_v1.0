import styles from './awards.css'

export default function Awards() {
    
    return (<>
        <div className="main-div" style={{ marginTop:'30px'}}>
            <section>
                <div className='aw'>
                    <div className='ah'>{'AWARDS & RECOGNITION'}</div>
                    <div className='awards-main' style={{ 
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}>
                        <div>
                            <div href="#">
                                <div>
                                    <div className="imgCont">
                                        <img src="https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png" alt="" />
                                    </div>
                                    <div className='label_1'>Most Innovative Company</div>
                                </div>
                            </div>
                        </div>
                        <div className='appear-second' style={{
                                marginTop:'25px'
                        }}>
                            <div href="#">
                                <div>
                                    <div className="imgCont">
                                        <img src="https://s1.rdbuz.com/web/images/home/awards/Brand_Trust_Report.png" alt="" />
                                    </div>
                                    <div className='label_1'>Most Trusted Brand</div>
                                </div>
                            </div>
                        </div>
                        <div className='appear-third'>
                            <div href="#">
                                <div>
                                    <div className="imgCont">
                                        <img src="https://s3.rdbuz.com/web/images/home/awards/Eye_for_Travel1.png" alt="" />
                                    </div>
                                    <div className='label_1'>Mobile Inovation Award</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>)
}