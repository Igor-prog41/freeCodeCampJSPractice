function lookUpProfile(name, prop) {
  // Only change code below this line
const obj = contacts.find((cerrentEl)=>{
   return cerrentEl.firstName === name;
 }); 

 return !obj ?  'No such contact'
    : obj[prop] ?  obj[prop]
                : 'No such property';
}
