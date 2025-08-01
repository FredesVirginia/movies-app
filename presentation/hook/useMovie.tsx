import { getMovieCastAction } from "@/core/actions/movies/get-movie-cast-actios";
import { getMovieIdActions } from "@/core/actions/movies/get-movie-id-actios";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id : number)=>{
    const movieQuery = useQuery({
        queryKey : ["movie" , id],
        queryFn : ()=> getMovieIdActions(id),
        staleTime : 1000 * 60 * 60 * 24,
    });

    const castQuery = useQuery({
        queryKey : ["movie" , id , "cast"],
        queryFn :()=> getMovieCastAction(id),
        staleTime : 1000 * 60 * 60 * 24
    })

    return {
        movieQuery,
        castQuery
    }
}