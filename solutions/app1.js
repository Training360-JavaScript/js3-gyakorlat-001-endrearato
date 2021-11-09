
const array = [1,2,3,4,5,5,3];
function removeDuplicatesFromArray() {
    const uniqueNum = [...new Set(array)];
    return uniqueNum
    //console.log(uniqueNum);
};
//removeDuplicatesFromArray(array);


export default removeDuplicatesFromArray;
