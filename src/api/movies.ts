import {ResponseTrendingType} from "../types/responseTypes";
import {BASE_URL} from "./config";

export const getMovies = async ()=>{
    
 try{

    const response = await fetch(BASE_URL);

    const data: ResponseTrendingType = await response.json();
    console.log(JSON.stringify(data.results));
    return data.results;
 }catch(error){

    console.error(error);
    return [];
 }

}