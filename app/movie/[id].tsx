import MovieCast from "@/presentation/componentes/movies/MovieCast";
import MovieDescription from "@/presentation/componentes/movies/MovieDescription";
import MovieHeader from "@/presentation/componentes/movies/MovieHeader";
import { useMovie } from "@/presentation/hook/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MovieScreenDetails = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery , castQuery} = useMovie(+id);

  if (movieQuery.isLoading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Un Momento Podfavor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }
  return (
    <SafeAreaView>
      <MovieHeader
        originalTitle={movieQuery.data?.title ?? ""}
        poster={movieQuery.data?.poster ?? ""}
        title={movieQuery.data?.title ?? ""}
      />

      <MovieDescription movie={movieQuery.data!} />
      <MovieCast cast={castQuery.data ?? []}/>
    </SafeAreaView>
  );
};

export default MovieScreenDetails;
