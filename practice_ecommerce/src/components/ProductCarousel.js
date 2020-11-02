import React,{useState, useEffect} from 'react';

import '../styles/ProductCarousel.scss';

function ProductCarousel(props){

    const [index, setIndex] = useState(0);
    const [cycle, setCycle] = useState(true);

    // const cycleOnOwn = useRef(setInterval(()=>{ cycleRight();}, 2500));

    useEffect(()=>{
        if(cycle){
            const id = setTimeout(()=> cycleRight(), 4000);
            return () => clearTimeout(id);
        }else{
            const id = setTimeout(()=> setCycle(true), 4000);
            return () => clearTimeout(id);
        }
    }, [index, cycle])

 
    function cycleLeft(user = false){
        if(index <= 0){
            setIndex(props.products.length - 1);
        }else{
            setIndex(index - 1);
        }

        if(user){
            setCycle(false)
        }
    }
    function cycleRight(user = false){
        if(index >= props.products.length - 1){
            setIndex(0);
        }else{
            setIndex(index + 1);

        }
        if(user){
            setCycle(false)
        }
    }


    function renderPosition(){
        return props.products.map((el, pos) => {
            return <button key={pos} onClick={()=>{setIndex(pos)}}>
                        <i className={`fas fa-circle ${index >= pos ? 'active' : ''}`} ></i>
                    </button>
        })
    }
        
    return(
        <div className='product-carousel' >
            <div className='container'>
                <div className='product'>
                    {props.products[index]}
                </div>
                <div className='controls'>
                <div className='arrow'>
                    <button onClick={()=> cycleLeft(true)}> 
                        <i className="fas fa-arrow-left"></i>
                    </button>
                </div>
                <div className='position'>
                    {renderPosition()}
                </div>
                <div className='arrow'>
                    <button onClick={()=> cycleRight(true)}> 
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default ProductCarousel;