import {completeData} from '../_data/products';


export function findItem(id){
    let temp;
        for(const item of completeData){
        if(Number(item.id) === Number(id)){
            temp = item;
            break;
        };
    };

    return temp
}

export function getIDFromPath(path){
    return path.match(/[^products/]*$/g);
}
export function checkIfProductPath(path){
    const regex = /(products\/[1-9]{5})/g;
    return regex.test(path);
}

export function randomProduct(id){
    let random;
    do{
        random = Math.floor(Math.random() * completeData.length)
    }while(random === id)
    
    return completeData[random];
}