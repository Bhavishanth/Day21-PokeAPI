try{
    for(var i=1;i<10;i++)
{

fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)

.then((response) =>
{
    return response.json()
})

.then((next) =>
{
    
    console.log(next.forms[0].name);
    document.getElementById("div1").innerHTML += `Name of the Pokemon: ${next.forms[0].name}`;
    document.getElementById("div1").innerHTML += "<br>";
    document.getElementById("div1").innerHTML += `Ability of the Pokemon: ${next.abilities[0].ability.name}`;
    document.getElementById("div1").innerHTML += "<br>";
    document.getElementById("div1").innerHTML += `Base Experience: ${next.base_experience}`;
    document.getElementById("div1").innerHTML += "<br><br>";
    

    
})




}
}

catch(err)
{
    console.log(err);
    
}


