import { Corporate } from '../Components/Rpool/Corporate';
import { RAWs } from '../Components/Rpool/RAWs';
import { FAQ } from '../Components/Rpool/FAQ';
import Divone from '../Components/Rpool/Divone';
import Navigationbar from '../Components/Rpool/Navigationbar';

export const Rpool = () => {
    return (
        <div>
             <Divone/>
             <Navigationbar />
            <Corporate />
            <RAWs />
            <FAQ/>
        </div>
    )
}
