import './Testmonials.css'
import TestmonialsInfo from './Testmonialsinfo';
import { FiCommand } from 'react-icons/fi';


function Testmonials () {

    return <div className="Testmonials" id='Testimonials'>
        <h2>Testmonials</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi ad veniam elit. Possimus commodi ad veniam </p>
        <div className='row '>
            {

TestmonialsInfo.map(item => <div className='Testmonials-container-main col-6'><div className='Testmonials-container'>
<FiCommand className='comma'/>
<p>{item.p}</p>
<div>
    <img src={item.src} alt="" />
    <h3>{item.name}</h3>
</div>
</div>
</div>)
            }
        </div>
    </div>
}


export default Testmonials ;