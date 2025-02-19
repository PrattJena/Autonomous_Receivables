import axios from 'axios';


export function fetchData(pageNumber){
    return axios
        .get(
            `http://localhost:8080/Summer_Internship_Backend/getData?page=${pageNumber}`
        )
        .then((response)=>{
            return response.data
        })
        .catch((error)=>{
            console.log(error)
        })
}

