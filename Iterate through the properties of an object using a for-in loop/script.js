const myobjects={
   name:'Tayyab Khan',
   city:'Karachi',
   age:'24'
};
for(const key in myobjects){
    if(myobjects.hasOwnProperty(key)){
        console.log(`${key}: ${myobjects[key]}`);
    }
}