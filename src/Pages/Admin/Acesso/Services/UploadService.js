import axios from 'axios';
export default class UploadService {
    constructor() {
        this.url = process.env.REACT_APP_ENDPOINT_API;
        this.userSecret = localStorage.getItem('token');
    }

    async PostProjeto(projeto) {
        let request = {
            titulo: projeto.titulo,
            descricao: projeto.descricao,
            categoria: projeto.categoria,
        }
        let id = '';
        await axios.post(this.url + "/Projetos", request,
            {
                headers: {
                    'userSecret': this.userSecret
                }
            }).then(response => {
                id = response.data;
            }
            ).catch(error => {
                throw error;
            });
        return id;
    }
    async PostImagem(idProjeto, imagens) {
        const formData = new FormData();
        for (let i = 0; i < imagens.length; i++) {
            formData.append("imageFiles", imagens[i]);
        }
        try {

            const response = await axios.post(this.url + "/Projetos/Images/Add/" + idProjeto, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'userSecret': this.userSecret
                    }
                });
            if (response.status === 200) {
                return response.data;
            }
        }
        catch (error) {
            
            await axios.delete(this.url + "/Projetos/" + idProjeto,
                {

                    headers: {
                        userSecret: this.userSecret
                    }
       
                });
                throw error;
            }
       
    }
}