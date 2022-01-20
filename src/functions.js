
async function setOneRandom(data, showData, setId) {
    var item = data[Math.floor(Math.random() * data.length)];
    var pokeData = await getPokemonData(item?.url);
    
    var res = {
        name: item?.name,
        ...pokeData
    };
    console.log(res)
    if(res){
        showData(res);
        setId(res?.id);
    }
}

function setNext(data, showData, setId) {

}

function setPrevious(data, showData, setId) {

}

function setAbilities(id, data) {
    return [];
}

async function getPokemonData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}



export {
    setOneRandom,
    setNext,
    setPrevious,
    setAbilities
}