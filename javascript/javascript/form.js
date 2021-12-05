
document.addEventListener("DOMContentLoaded", () =>{
    var MyForm = document.getElementById("myForm")
    MyForm.addEventListener("submit", (e) => {

        e.preventDefault()
        let form = new FormData(e.target) 
        let data = Object.fromEntries(form.entries())
        
        fetch('http://0.0.0.0:8001/new', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)

        }) 
    
    })
})