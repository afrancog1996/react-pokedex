const END_POINT_POKE_API: string = 'https://pokeapi.co/api/v2/pokemon/';
const ABILITIES: string = 'ability';
const MIN: number = 1; // you can modify this constant to min limit
const MAX: number = 20; // you can modify this contant to max limit
let pokeData: any = [];
let id: number = 0;

export async function searchByName(ref: any, setData: any) {
    if (ref?.current?.value !== '') {
        try {
            pokeData = await getInfo(ref?.current?.value, setData);
            setData(pokeData);
        } catch (e) {
            setData({
                id: 'UPS!!!!',
                name: 'Parece que no existe!! 404'
            })
        }
    } else {
        setData({
            id: 'desconocido',
            name: 'Llene el input weon :D'
        })
    }

}

export async function getRandom(setData: any) {
    const index = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    pokeData = await getInfo(index.toString());
    if (pokeData) {
        setData(pokeData);
    }
}

export async function getNext(data: any, setData: any) {
    let nextId = data?.id + 1;
    if (nextId <= MAX) {
        pokeData = await getInfo(nextId.toString());
    } else if (nextId > MAX) {
        pokeData = await getInfo(MIN.toString());
    }

    if (pokeData) {
        setData(pokeData);
    }
}

export async function getPrevius(data: any, setData: any) {
    let nextId = data?.id - 1;
    if (nextId >= MIN) {
        pokeData = await getInfo(nextId.toString());
    } else if (nextId < MIN) {
        pokeData = await getInfo(MAX.toString());
    }

    if (pokeData) {
        setData(pokeData);
    }
}


async function getInfo(param: string = '', setData?: any) {
    if (param !== '') {
        const response = await fetch(END_POINT_POKE_API + param);
        const json = await response.json();
        return json;
    }
    const response = await fetch(END_POINT_POKE_API);
    const json = await response.json();
    return json;
}