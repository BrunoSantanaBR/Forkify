import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const webSiteAPI = 'https://forkify-api.herokuapp.com/api/search'       
    
        try{
            const res = await axios(`${webSiteAPI}?&q=${this.query}`);
            this.result = res.data.recipes;
        }catch (error){
            console.debug(error);
        }
    }

}



