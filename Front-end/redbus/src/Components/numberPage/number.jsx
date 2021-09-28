import styles from './number.css';

export default function numbers() {
    
    return (<>
        <div>
            <div className="numTitle heading-1">THE NUMBERS ARE GROWING!</div>
            <div className="numFlex numTitle">
                <div>
                    <div className="sp">CUSTOMERS</div>
                    <div className="sv">36 M</div>
                    <div className='common-desc'>redBus is trusted by over 36 million happy customers globally</div>
                </div>
                <div>
                    <div className="sp">OPERATORS</div>
                    <div className="sv">3500</div>
                    <div className='common-desc'>network of over 3500 bus operators worldwide</div>
                </div>
                <div>
                    <div className="sp">BUS TICKETS</div>
                    <div className="sv">220+ M</div>
                    <div className='common-desc'>Over 220 million trips booked using redBus</div>
                </div>
            </div>
        </div>
    </>)
}