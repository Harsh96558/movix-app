import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3"

const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmVmMjNkNWYzNWEwZjhhZmQyNmJkODhkYTk3MGZjMiIsInN1YiI6IjY0NTM5ZTI2MDkxZTYyMDEyMzRmYjVmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gXMpiBBHftd-UY7_2SXcpXcY3KOZtycLxczO2XLqp8I";

const headers={
    Authorization:"bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi=async (url,params)=>{
    try {
        const {data}=await axios.get(BASE_URL + url,
            {
                headers,
                params
            })
            return data;
        
    } catch (error) {
        console.log(error)
        return error;
    }
}
