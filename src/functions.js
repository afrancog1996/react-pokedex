const MIN = 1;
const MAX = 600;
let pokeData = [];
let id = 0;

async function setOneRandom(setShowPoke, setCurrentId, setMessage, url) {
    let index = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    pokeData = await getPokemonData(url + index);

    if (pokeData) {
        setShowPoke(pokeData);
        setCurrentId(pokeData?.id);
        setMessage({
            msg: '',
            action: false
        });
    }

}

async function setNext(setShowPoke, currentId, setCurrentId, setMessage, url) {
    id = currentId + 1;
    if (
        id > MIN || id <= MAX
    ) {
        pokeData = await getPokemonData(url + id);
        if(pokeData){
            setShowPoke(pokeData);
            setCurrentId(id);
        }
    } else {
        setMessage({
            msg: 'Id fuera de rango',
            action: true
        });
    }
}

async function setPrevious(setShowPoke, currentId, setCurrentId, setMessage, url) {
    id = currentId - 1;
    if (
        id > MIN || id <= MAX
    ) {
        pokeData = await getPokemonData(url + id);
        if(pokeData){
            setShowPoke(pokeData);
            setCurrentId(id);
        }
    } else {
        setMessage({
            msg: 'Id fuera de rango',
            action: true
        });
    }
}

async function setAbilities(data) {
  return data?.abilities.map(async (current) => {
        let abilityInfo = await getPokemonData(current?.ability?.url);
        return abilityInfo;
   });
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