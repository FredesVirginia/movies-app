import { nowPlayActions } from "@/core/actions/movies/now-playing-actios"
import { useQuery } from "@tanstack/react-query"

export const useMovies = ()=>{
    const queryNowMoviesPlaying = useQuery({
        queryKey :["movies" , "noPlaying"],
        queryFn : nowPlayActions,
        staleTime : 1000 * 60 * 60 * 24
    })

    return {
        queryNowMoviesPlaying
    }
}