import React,{useState, useEffect, useRef} from 'react';

import '../styles/ProductCarousel.scss';

function ProductCarousel(props){

    const [index, setIndex] = useState(0);
    const [cycle, setCycle] = useState(true);

    // const cycleOnOwn = useRef(setInterval(()=>{ cycleRight();}, 2500));

    // useEffect(()=>{
    //     if(!cycle){
    //         clearInterval(cycleOnOwn);
    //     }
    // }, [cycle])

    // useEffect(() => {
    //     return () => {
    //         clearInterval(cycleOnOwn);
    //     };
    //   }, []);
    function cycleLeft(){
        if(index <= 0){
            setIndex(props.products.length - 1);
        }else{
            setIndex(index - 1);
        }

        setCycle(false);
    }
    function cycleRight(){
        if(index >= props.products.length - 1){
            setIndex(0);
        }else{
            setIndex(index + 1);

        }
        setCycle(false);
    }

    function renderPosition(){
        return props.products.map((el, pos) => {
            return <i className={`fas fa-circle ${index >= pos ? 'active' : ''}`} key={pos}></i>
        })
    }
        
    return(
        <div className='product-carousel'>
            <div className='container'>
                <div className='product'>
                    {props.products[index]}
                </div>
                <div className='controls'>
                <div className='arrow'>
                    <button onClick={()=> cycleLeft()}> 
                        <i className="fas fa-arrow-left"></i>
                    </button>
                </div>
                <div className='position'>
                    {renderPosition()}
                </div>
                <div className='arrow'>
                    <button onClick={()=> cycleRight()}> 
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default ProductCarousel;