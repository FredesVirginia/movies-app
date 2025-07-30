import MainSlideshow from "@/presentation/componentes/movies/MainSlideshow";
import { useMovies } from "@/presentation/hook/useMovies";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { queryNowMoviesPlaying } = useMovies();
  //ESTE HOOK ES PARA QUE QUE REACT NATIVE SEPA CUANTO PADDIN O MARGIN SE TIENE QUE DAR EN CADA DISPOSITOVO

  const safeArea = useSafeAreaInsets()
  console.log("DATA", queryNowMoviesPlaying);

  if (queryNowMoviesPlaying.isLoading) {
    <View className=" flex-1  justify-center items-center ">
      <ActivityIndicator color="purple" size={90} />
    </View>;
  }

  return (
    <View className="mt-2 " style={{ paddingTop : safeArea.top}}>
      <Text className="text-3xl font-bold px-4 mb-2">Home Screem</Text>

      {/**CARRUSEL */}
      <MainSlideshow movies={queryNowMoviesPlaying.data?? []}/>
    </View>
  );
};

export default HomeScreen;
