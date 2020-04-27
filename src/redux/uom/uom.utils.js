
export const addUOM = (uomList, uom) => {
    const existingUOM = uomList.find(
        unit => unit.name === uom.name
    );

    if(!existingUOM) {
        return [...uomList, uom];  
    }
    else{
        return uomList;
    }
}