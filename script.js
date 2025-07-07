function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("divison error"); 
    }
    const result = a / b;
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message); 
  } finally {
    console.log("complete."); 
  }
}


divideNumbers(5, 8);
divideNumbers(1, 5);  
divideNumbers(0, 2);


//fetch data 

async function fetchData(data) {
try {
 const response = await fetch(`https://httpstat.us/500.`);

   if (response.ok) {
    throw new error(`network error: ${response.status}`);
   }
    const data = await response.json();
    console.Log(`data:`,data);


} catch (error) {
    console.error(`fetch error:`, error.message);
}

}
fetchData();





// debug


function greet(name) {
    try {
        if (name === undefined) {
            throw new Error("Name is undefined");
        }
        console.log("Hello, " + name);
    } catch (error) {
        console.error("hello, guest:", error.message);
    }
}

greet();