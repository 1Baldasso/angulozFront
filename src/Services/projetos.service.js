import axios from "axios"
const ENDPOINT_API = process.env.REACT_APP_ENDPOINT_API;
export default class ProjetosService{
    async getAll(lang){
        const response = await axios.get(ENDPOINT_API + "/Projetos/" + lang);
        if(response.status === 200){
            return response.data;
        }
    }
    async getOne(id,lang){
        const response = await axios.get(ENDPOINT_API + `/projetos/${id}/${lang}`);
        if(response.status === 200){
            console.log(response.data);
            return response.data;
        }
        else{
            console.log(response);
        }
    }
    async create(data){

        return await axios.post(ENDPOINT_API + "/Projetos",data);
    }
    async update(id,data){
        return await axios.put(ENDPOINT_API + "/Projetos/" + id,data);
    }
    async delete(id){
        return await axios.delete(ENDPOINT_API + "/Projetos/" + id);
    }
}