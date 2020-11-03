import productData from '../_data/products';


export function findItem(id){
    let temp;
        for(const item of productData){
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