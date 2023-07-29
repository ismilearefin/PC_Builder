import { BsCpu,BsMotherboard,BsFillDiagram3Fill } from 'react-icons/bs';
import { GiPowerGenerator } from 'react-icons/gi';
import { MdStorage,MdMonitor } from 'react-icons/md';
export const category = [
    {
        name:'CPU',
        icon:<BsCpu></BsCpu>
    },
    {
        name: 'Mother Board',
        icon:<BsMotherboard></BsMotherboard>
    },
    {
        name: 'RAM',
        icon:<BsFillDiagram3Fill></BsFillDiagram3Fill>
    },
    {
        name: 'Power supply Unit',
        icon:<GiPowerGenerator></GiPowerGenerator>
    },
    {
        name: 'Storage Device',
        icon:<MdStorage></MdStorage>
    },
    {
        name: 'Monitor',
        icon:<MdMonitor></MdMonitor>
    }
]