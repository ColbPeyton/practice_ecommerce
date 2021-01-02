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

export function randomProduct(id, currCollection = []){
    let random;
    do{
        random = Math.floor(Math.random() * completeData.length)
        // check if number is random and not currently in the similar array or === to the currently viewed item
    }while(completeData[random].id === id || currCollection.includes(completeData[random]))
    
    return completeData[random];
}