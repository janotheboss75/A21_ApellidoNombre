const NACIONALIDADES_ACEPTADAS = [
    {key: 'AU', name: "Australia"},
    {key: 'BR', name: "Brasil"},
    {key: 'CA', name: "Canadá"},
    {key: 'CH', name: "Suiza"},
    {key: 'DE', name: "Alemania"},
    {key: 'DK', name: "Dinamarca"},
    {key: 'ES', name: "España"},
    {key: 'FI', name: "Finlandia"},
    {key: 'FR', name: "Francia"},
    {key: 'GB', name: "Reino Unido"},
    {key: 'IE', name: "Irlanda"},
    {key: 'IN', name: "India"},
    {key: 'IR', name: "Irán"},
    {key: 'MX', name: "México"},
    {key: 'NL', name: "Países Bajos"},
    {key: 'NO', name: "Noruega"},
    {key: 'NZ', name: "Nueva Zelanda"},
    {key: 'RS', name: "Serbia"},
    {key: 'TR', name: "Turquía"},
    {key: 'UA', name: "Ucrania"},
    {key: 'US', name: "Brasil"},
];

window.onload = function(){
    const form = document.getElementsByTagName("form");
    const inputs = form[0].getElementsByTagName("input");
    const selects = form[0].getElementsByTagName("select");
    const labels = form[0].getElementsByTagName("label");

    for(let input of inputs){
        input.onfocus = resaltar;
        input.addEventListener('blur', noResaltar);
    }

    for(let select of selects){
        select.onfocus = resaltar;
        select.addEventListener('blur', noResaltar);
    }

    //Resaltar los labels de los inputs
    const inputsArray = Array.from(inputs);
    inputsArray.forEach((input, i) => {
        input.addEventListener("focus", () => resaltarLabel(labels,i));
        input.addEventListener("blur", () => noResaltarLabel(labels,i));
    });

    
    llenarNacionalidad();
}

function llenarNacionalidad(){
    const nacionalidad = document.getElementById("nationality");
    for(let{key, name} of NACIONALIDADES_ACEPTADAS){
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = name;
        nacionalidad.appendChild(option);
    }
}

function resaltarLabel(labels,i){
    labels[i].classList.add("label-selected");
}

function noResaltarLabel(labels, i){
    labels[i].classList.remove("label-selected");
}

function resaltar(evento){
    evento.target.classList.add("selected");
}

function noResaltar(evento){
    const clase = evento.target.classList.contains("selected");
    if(clase){
        evento.target.classList.remove("selected");
    }
}