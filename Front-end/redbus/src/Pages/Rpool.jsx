import { Corporate } from '../Components/Rpool/Corporate';
import { RAWs } from '../Components/Rpool/RAWs';
import Divone from "../Components/Rpool/Divone";
import Navigationbar from "../Components/Rpool/Navigationbar";
import {FAQ} from '../Components/Rpool/FAQ';
import Howitworks from "../Components/Rpool/Howitworks";
import Videodiv from "../Components/Rpool/Videodiv"
import { FAQ } from '../Components/Rpool/FAQ';
import Divone from '../Components/Rpool/Divone';
import Navigationbar from '../Components/Rpool/Navigationbar';

export const Rpool = () => {
    return (
        <div>
             <Divone/>
             <Navigationbar />
             <Howitworks />
             <Videodiv />
            <Corporate />
            <RAWs />
            <FAQ/>
        </div>
    )
}
