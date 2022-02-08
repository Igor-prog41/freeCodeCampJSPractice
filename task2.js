 var myName;  // javascript training


// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line



// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line   (val) 
  const lookup = {
   "alpha": "Adams",    
    "bravo": "Boston",
   "charlie": "Chicago",
   "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
