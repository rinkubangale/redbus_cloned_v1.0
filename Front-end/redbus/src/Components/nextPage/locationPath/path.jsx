import styles from './path.css';

export default function Path() {
    
    return (<>
        <div className="sec-path">
            <div className="flex" style={{ width: '42%'}}>
                <ul className="flex" style={{ width: '85%', marginTop: '5px'}}>
                    <li>Nagpur (All Loca...)</li>
                    <li>🡢</li>
                    <li>Pune (All Locati...)</li>
                    <li>{` < `}</li>
                    <li>30 Sep 
                        <div style={{ fontSize: '10px', fontWeight: '600', textAlign:'center'}}>Thu</div>
                    </li>
                    <li>{` > `}</li>
                </ul>
                <div style={{marginLeft: '15px'}}>
                    <div className="g-button">Modify</div>
                </div>
            </div>
        </div>
    </>)
}