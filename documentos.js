// formulario.addEventListener('submit', function(){
//     let v1 = formulario.valor1.value
//     let v2 = formulario.valor2.value

//     let resultado = parseFloat(v1) + parseFloat(v2)

//     container.innerHTML = `
//         <h1>${v1} + ${v2} = ${resultado}</h1>
//     `
// })

/* 
<form action="">
    <div class="input-group mt-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Nome</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class="input-group mt-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Nome</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class="input-group mt-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Nome</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class="input-group mt-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Nome</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class=" d-md-flex justify-content-end m-4">
        <button class="btn btn-primary" type="button">Submit</button>
    </div>
</form>
*/



fetch("http://cafepradev.com.br:21020/animals/insert", {
    method : "POST",
    headers : {
        "Content-type" : "application/json; charset=UTF-8"
    },
    body : JSON.stringify({
            name: "teste",
            species: "teste",
            color: "teste",
            size: "teste"
    }) 
})
    .then(result => result.json())
    .then((res) => {
        if(res.error){
            console.log(res.error.message);
        }else{
            console.log(res.message);
        }
    })
    .catch(err => console.log(err))


/* 
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>@mdo</td>
</tr>
*/