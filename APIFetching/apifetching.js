const table = document.getElementById("data");
table.innerHTML = load();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    table.innerHTML = render(res);
  });

function render(result) {
  let table = "";
  result.forEach((data) => {
    table += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
             
                
                <td>
                  ${data.address.street},
                  ${data.address.suite}, 
                  ${data.address.city}
               
                 </td>
                 <td> ${data.phone}</td>
                 <td> ${data.website}</td>
              </tr>`;
  });
  return table;
}

function load() {
  return `<tr>
    <td colspan="6" class="text-center">Loading...</td>
  </tr>`;
}



    /*

    console.log("API Fetching")

    fetch("https://jsonplaceholder.typicode.com/users")
   
    .then((res) => res.json())
    .then((data) => console.log(data));


// Another Version

    console.log("API")

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(res){
       return res.json();
    }).then(function(data){
        console.log(data);
    })

    
    */ 

    //Simplified 