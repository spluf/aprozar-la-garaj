
export const addCategory = (categoryList, category) => {
    const existingCategory = categoryList.find(
        cat => cat.name === category.name
    );

    if(!existingCategory) {
        return [...categoryList, category];  
    }
    else{
        return categoryList;
    }
}