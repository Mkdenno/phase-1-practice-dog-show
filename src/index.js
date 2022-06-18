document.addEventListener('DOMContentLoaded', () => {
    fetchDog()
    
    const tableBody=document.getElementById('table-body')
    const tableRow=document.createElement('tr')
    function renderDogs(dogs){
        for( const item in dogs){
            tableRow.innerHTML=`
            <td>${item.name}</td>
            <td>${item.breed}</td>
            <td>${item.sex}</td>
            <td><button>Edit</button></td>
            `
            tableBody.appendChild(tableRow);
            console.log(item.name)
            
        } 
    }
    function fetchDog(){
        fetch("http://localhost:3000/dogs")
    .then(res => res.json())
    .then(dogData=> {

        dogData.forEach(dog => {
            renderDogs(dog)

            //console.log(dog)
        });
        
        
    }
        
    )
    
    }
})





