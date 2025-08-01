import { getMovieIdActions } from "@/core/actions/movies/get-movie-id-actios";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id : number)=>{
    const movieQuery = useQuery({
        queryKey : ["movie" , id],
        queryFn : ()=> getMovieIdActions(id),
        staleTime : 1000 * 60 * 60 * 24,
    });

    return {
        movieQuery
    }
}