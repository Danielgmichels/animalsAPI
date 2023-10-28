const conteudo = document.querySelector(".conteudo")
const form = document.querySelector("form")

const insert = document.querySelector("#btn-insert")
const list = document.querySelector("#btn-list")
const del = document.querySelector("#btn-del")
const atualizar = document.querySelector("#btn-atualizar")

const btnInsert = document.querySelector("#insertSubmit")

//-----Funções para listar itens-----
list.addEventListener("click", function(){
    del.classList.remove("bg-primary")
    del.classList.remove("text-white")

    insert.classList.remove("bg-primary")
    insert.classList.remove("text-white")

    list.classList.add("bg-primary")
    list.classList.add("text-white")

    atualizar.classList.remove("bg-primary")
    atualizar.classList.remove("text-white")
    
    let lista = ""

    fetch("http://cafepradev.com.br:21020/animals/list")
        .then(result => result.json())
        .then( (dados) => {
            conteudo.innerHTML = 
            `
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Species</th>
                            <th scope="col">Color</th>
                            <th scope="col">Size</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                        
                </table>
            `

            const tableBody = document.querySelector("tbody")
            for(dado of dados){
                tableBody.innerHTML += 
                `
                    <tr>
                        <th scope="row">${dado.id}</th>
                        <td>${dado.name}</td>
                        <td>${dado.species}</td>
                        <td>${dado.color}</td>
                        <td>${dado.size}</td>
                    </tr>
                `
            }
        })
})


//-----Funções para inserir----
insert.addEventListener("click", function(){
    del.classList.remove("bg-primary")
    del.classList.remove("text-white")

    insert.classList.add("bg-primary")
    insert.classList.add("text-white")

    list.classList.remove("bg-primary")
    list.classList.remove("text-white")

    atualizar.classList.remove("bg-primary")
    atualizar.classList.remove("text-white")

    conteudo.innerHTML = `
        <form action="" onsubmit="return false">
            <div class="input-group mt-4">
                <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                <input id="name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="input-group mt-4">
                <span class="input-group-text" id="inputGroup-sizing-sm">Species</span>
                <input id="species" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="input-group mt-4">
                <span class="input-group-text" id="inputGroup-sizing-sm">Color</span>
                <input id="color" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>
                <div class="input-group mt-4">
                <span class="input-group-text" id="inputGroup-sizing-sm">Size</span>
                <input id="size" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            
            <div class=" d-md-flex justify-content-end m-4">
                <button id="insertSubmit" class="btn btn-primary" type="button" onClick="inserindo()">Submit</button>
            </div>
        </form>
        `
})
    
    function inserindo (){
        const name = document.querySelector("#name")
        const species = document.querySelector("#species")
        const color = document.querySelector("#color")
        const size = document.querySelector("#size")
        
            fetch(" http://cafepradev.com.br:21020/animals/insert", {
                method : "POST",
                headers : {
                    "Content-type" : "application/json; charset=UTF-8"
                },
                body : JSON.stringify({
                    name: name.value ,
                    species: species.value,
                    color: color.value,
                    size: size.value
                })
            })
            .then(result => result.json())
            .then((res) => {
                if(res.error){
                    console.log(res.error.message)
                }else{
                    // console.log(res.message);
                    alert("Inserido com sucesso")
                }
            })
            .catch(err => console.log(err))
    }
    


//-----Função para atualizar-----
atualizar.addEventListener("click", function(){
    del.classList.remove("bg-primary")
    del.classList.remove("text-white")

    insert.classList.remove("bg-primary")
    insert.classList.remove("text-white")

    list.classList.remove("bg-primary")
    list.classList.remove("text-white")

    atualizar.classList.add("bg-primary")
    atualizar.classList.add("text-white")

    conteudo.innerHTML = `
    <form action="" onsubmit="return false">
        <div class="input-group mt-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">ID</span>
            <input id="atualizarId" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group mt-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
            <input id="atualizarName" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group mt-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Species</span>
            <input id="atualizarSpecie" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group mt-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Color</span>
            <input id="atualizarColor" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="input-group mt-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Size</span>
            <input id="atualizarSize" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        
        <div class=" d-md-flex justify-content-end m-4">
            <button id="insertSubmit" class="btn btn-primary" type="button" onClick="atualizando()">Submit</button>
        </div>
    </form>`
})

function atualizando(){
    const atualizarId = document.querySelector("#atualizarId")
    const atualizarName = document.querySelector("#atualizarName")
    const atualizarSpecie = document.querySelector("#atualizarSpecie")
    const atualizarColor = document.querySelector("#atualizarColor")
    const atualizarSize = document.querySelector("#atualizarSize")

    fetch("http://cafepradev.com.br:21020/animals/update", {
        method : "PUT",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
        body : JSON.stringify({
            id: atualizarId.value,
            name: atualizarName.value,
            species: atualizarSpecie.value,
            color: atualizarColor.value,
            size: atualizarSize.value
        })
    })
    .then(result => result.json())
            .then((res) => {
                if(res.error){
                    console.log(res.error.message)
                }else{
                    // console.log(res.message);
                    alert("Atualizado com sucesso")
                }
            })
            .catch(err => console.log(err))
}

//-----Funções para deletar-----
del.addEventListener("click", function(){
    del.classList.add("bg-primary")
    del.classList.add("text-white")

    insert.classList.remove("bg-primary")
    insert.classList.remove("text-white")

    list.classList.remove("bg-primary")
    list.classList.remove("text-white")

    atualizar.classList.remove("bg-primary")
    atualizar.classList.remove("text-white")
    
    conteudo.innerHTML = `
        <form action="" onsubmit="return false">
            <div class="input-group mt-4">
                <span class="input-group-text" id="inputGroup-sizing-sm">ID</span>
                <input id="deleteId" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
            </div>

            <div class=" d-md-flex justify-content-end m-4">
                <button class="btn btn-primary" type="button" onClick="deletando()">Submit</button>
            </div>
        </form>
    `
})

function deletando (){
    const deleteId = document.querySelector("#deleteId")

    fetch("http://cafepradev.com.br:21020/animals/delete", {
    method : "DELETE",
    headers : {
        "Content-type" : "application/json; charset=UTF-8"
    },
    body : JSON.stringify({
        id : deleteId.value
    })
    })
        .then(result => result.json())
        .then( (res) => {
            if(res.error){
                console.log(res.error.message)
            }else{
                // console.log(res.message)
                alert("Deletado com sucesso")
            }
        })
        .catch(err => console.log(err))
    
    
}