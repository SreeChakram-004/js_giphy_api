fetch("https://api.giphy.com/v1/gifs/search?api_key=R6h4nNntR8nZtaQcts9Z4lZQrRDgZYbc&q=whey&limit=5&offset=0&rating=g&lang=en")
.then((response)=>{response.json()})
.then((result)=>{display(result)})
.catch((err)=>{console.log(err)});
function display(data){
    let i1=document.createElement('iframe');
    i1.setAttribute('src','https://api.giphy.com/v1/gifs/search?api_key=R6h4nNntR8nZtaQcts9Z4lZQrRDgZYbc&q=whey&limit=5&offset=0&rating=g&lang=en')
    document.body.append(i1);
    data.forEach(element => {
        console.log(element.type);
    });

}