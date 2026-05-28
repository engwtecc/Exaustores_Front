const API = "https://exaustores-production.up.railway.app"

async function login(){

    const usuario = document.getElementById("usuario").value
    const senha = document.getElementById("senha").value

    const erro = document.getElementById("erro")

    erro.innerHTML = ""

    try{

        const res = await fetch(`${API}/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                usuario,
                senha
            })
        })

        const data = await res.json()

        if(!res.ok){

            erro.innerHTML = data.detail
            return
        }

        localStorage.setItem(
            "token",
            data.token
        )

        localStorage.setItem(
            "tipo",
            data.tipo
        )

        if(data.tipo === "morador"){

            window.location.href = "morador.html"

        }else{

            window.location.href = "sindico.html"

        }

    }catch(e){

        erro.innerHTML = "Erro ao conectar servidor"

    }

}