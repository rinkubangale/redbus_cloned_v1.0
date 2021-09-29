import { Corporate } from '../Components/Rpool/Corporate';
import { RAWs } from '../Components/Rpool/RAWs';
import Divone from "../Components/Rpool/Divone";
import Navigationbar from "../Components/Rpool/Navigationbar";

export const Rpool = () => {
    return (
        <div>
             <Divone/>
             <Navigationbar />
            <Corporate />
            <RAWs/>
        </div>
    )
}
