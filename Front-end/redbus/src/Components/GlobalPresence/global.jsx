import styles from './global.css'

export default function Global() {
    
    return (<>
        <div className="our_distribution_div">
            <div className='main-body'>
                <section className='main-body'>
                    <div className='header1'>OUR GLOBAL PRESENCE</div>
                </section>
                <ul className='flag-cont'>
                    <li className="country-flags">
                        <span>
                            <span className='flagicon icon-COL'></span>
                        </span>
                        <span className='flag-name'>COLOMBIA</span>
                    </li>
                    <li className="country-flags">
                        <span>
                            <span className='flagicon icon-IND'></span>
                        </span>
                        <span className='flag-name'>INDIA</span>
                    </li>
                    <li className="country-flags">
                        <span>
                            <span className='flagicon icon-IDN'></span>
                        </span>
                        <span className='flag-name'>INDONESIA</span>
                    </li>
                    <li className="country-flags">
                        <span>
                            <span className='flagicon icon-MYS'></span>
                        </span>
                        <span className='flag-name'>MALAYSIA</span>
                    </li>
                    <li className="country-flags">
                        <span>
                            <span className='flagicon icon-PER'></span>
                        </span>
                        <span className='flag-name'>PERU</span>
                    </li>
                    <li className="country-flags">
                        <span>
                            <span className='flagicon icon-SGP'></span>
                        </span>
                        <span className='flag-name'>SINGAPORE</span>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}