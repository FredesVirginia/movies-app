import MainSlideshow from "@/presentation/componentes/movies/MainSlideshow";
import MoviesHorizontal from "@/presentation/componentes/movies/MoviesHorizontal";
import { useMovies } from "@/presentation/hook/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { queryNowMoviesPlaying , queryPopularMoviesPlaying , queryTopRatedMoviesPlaying , queryUpCommingMoviesPlaying } = useMovies();
  //ESTE HOOK ES PARA QUE QUE REACT NATIVE SEPA CUANTO PADDIN O MARGIN SE TIENE QUE DAR EN CADA DISPOSITOVO

  const safeArea = useSafeAreaInsets()
  console.log("DATA", queryNowMoviesPlaying);

  if (queryNowMoviesPlaying.isLoading) {
    <View className=" flex-1  justify-center items-center ">
      <ActivityIndicator color="purple" size={90} />
    </View>;
  }

  return (
   <ScrollView>
     <View className="mt-2 pb-10" style={{ paddingTop : safeArea.top}}>
      <Text className="text-3xl font-bold px-4 mb-2">Movie App</Text>

      {/**CARRUSEL */}
      <MainSlideshow movies={queryNowMoviesPlaying.data?? []}/>

       {/**MOVIES HORIZONTAL */}
       <MoviesHorizontal title="Populares" movies={queryPopularMoviesPlaying.data ?? []}/>


    

       {/**MOVIES HORIZONTAL */}
       <MoviesHorizontal title="Top Rated" movies={queryTopRatedMoviesPlaying.data ?? []}/>

         {/**MOVIES HORIZONTAL */}
       <MoviesHorizontal title="Up Comming" movies={queryUpCommingMoviesPlaying.data ?? []}/>
    </View>
   </ScrollView>
  );
};

export default HomeScreen;
