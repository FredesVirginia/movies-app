import { nowPlayActions } from "@/core/actions/movies/now-playing-actios"
import { popularPlayActions } from "@/core/actions/movies/popular-movies-actios"
import { topRaterPlayActions } from "@/core/actions/movies/top-rater.actions"
import { upcomingPlayActions } from "@/core/actions/movies/uncoming-actions"
import { useQuery } from "@tanstack/react-query"

export const useMovies = ()=>{
    const queryNowMoviesPlaying = useQuery({
        queryKey :["movies" , "noPlaying"],
        queryFn : nowPlayActions,
        staleTime : 1000 * 60 * 60 * 24
    })


     const queryPopularMoviesPlaying = useQuery({
        queryKey :["movies" , "popular"],
        queryFn : popularPlayActions,
        staleTime : 1000 * 60 * 60 * 24
    })


     const queryTopRatedMoviesPlaying = useQuery({
        queryKey :["movies" , "topRated"],
        queryFn : topRaterPlayActions,
        staleTime : 1000 * 60 * 60 * 24
    })

       const queryUpCommingMoviesPlaying = useQuery({
        queryKey :["movies" , "upcomming"],
        queryFn : upcomingPlayActions,
        staleTime : 1000 * 60 * 60 * 24
    })

    return {
        queryNowMoviesPlaying,
        queryPopularMoviesPlaying,
        queryTopRatedMoviesPlaying,
        queryUpCommingMoviesPlaying
    }
}