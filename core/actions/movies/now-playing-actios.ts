import { movieApi } from "@/core/api/movie-api";
import { IResMovieResponse } from "@/infractuture/interfase/movieDb";
import { MovieMapper } from "@/infractuture/mapers/movie.mapper";

export const nowPlayActions = async()=>{
    try{

        const { data } = await movieApi.get<IResMovieResponse>('/now_playing' , {
            headers: {
                accept:  'application/json',    
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjRkNjRlYzBlYzc5YzVkZjZhYjZkNGU1ZmQwYWFlMSIsIm5iZiI6MTc1Mzg1NzgxMS41MDEsInN1YiI6IjY4ODliZjEzZWRhNTQ4NDNhNWQwMjM2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ee_LORC2hHC3FURQ7rmptGlyxMTYmKOm-u57w4Y4oWM"
            }
        });
       const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
       console.log("Data" , movies)

        return movies
    }catch(error){
        console.log("El error fue" , error)
        throw "No se puede reproducir Ahora"

    }
}


