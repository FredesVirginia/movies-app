import { movieApi } from "@/core/api/movie-api";
import { MovieDBMovieResponse } from "@/infractuture/interfase/movie-response-interface";
import { CompleteMovie } from "@/infractuture/interfase/movie.interface";
import { MovieMapper } from "@/infractuture/mapers/movie.mapper";

export const getMovieIdActions = async(id : number | string) :Promise <CompleteMovie>=>{
    try{

        const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}` , {
            headers: {
                accept:  'application/json',    
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjRkNjRlYzBlYzc5YzVkZjZhYjZkNGU1ZmQwYWFlMSIsIm5iZiI6MTc1Mzg1NzgxMS41MDEsInN1YiI6IjY4ODliZjEzZWRhNTQ4NDNhNWQwMjM2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ee_LORC2hHC3FURQ7rmptGlyxMTYmKOm-u57w4Y4oWM"
            }
        });
       
       console.log("Data" , data)

        return MovieMapper.fromTheMovieDBToCompleteMovie(data)
    }catch(error){
        console.log("El error fue" , error)
        throw "No se puede reproducir Ahora"

    }
}