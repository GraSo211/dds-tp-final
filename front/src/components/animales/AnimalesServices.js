import axios from "axios";

async function alta(data){
    return await axios.post('http://localhost:3500/api/animales', data)
};

async function baja(id){
    const res = await axios.delete('http://localhost:3500/api/animales/'+id.toString())
    return res.status === 200
};


async function modificacion(data){
    return await axios.put('http://localhost:3500/api/animales', data)
};

async function consulta(data){
    return await axios.get('http://localhost:3500/api/animales', {
        params: data,
    });
};

export { alta, baja, modificacion, consulta,}