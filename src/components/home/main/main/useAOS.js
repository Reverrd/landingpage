import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

const useAOS = ()=>{
useEffect(()=>{
    Aos.init({duration:2500});
},[])
};
export default useAOS;