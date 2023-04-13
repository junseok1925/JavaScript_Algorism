
(function test(){
const testArray = [1,2,3,4,5];
const newArray = testArray.filter(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    });
})(); 
