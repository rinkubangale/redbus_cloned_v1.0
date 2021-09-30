import styles from './statusbar.css'

export default function tatusbar() {
    return (<>
        <div style={{
            backgroundColor: '#f8f4f4'
                }}>
            <div>
                <div>
                    <span>
                        <ul className="st-flex">
                            <li>
                                <h6>Home
                                {' >  '}
                                </h6>
                            </li>
                            <li>
                                <h6 style={{
                                    fontWeight: '400',
                                    pading: '10px'
                                }}>Bus Tickets
                                {' >  '}
                                </h6>
                            </li>
                            <li>
                                <h6 style={{
                                    fontWeight: '400'
                                }}>Nagpur Bus
                                {' >  '}
                                </h6>
                            </li>
                            <li>
                                <h6 style={{
                                    color: 'red',
                                    fontWeight: '400'
                                }}>Nagpur To Pune Bus</h6>
                            </li>
                        </ul>
                    </span>
                </div>
                <div>
                    <span style={{
                        paddingLeft: '1em',
                        fontSize: '14px'
                    }}>Fare Starts From INR 800</span>
                </div>
            </div>
        </div>
    </>)
}