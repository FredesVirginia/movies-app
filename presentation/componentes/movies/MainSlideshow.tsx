import { Movie } from "@/infractuture/interfase/movie.interface";
import React, { useRef } from "react";
import { useWindowDimensions, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

export interface Props {
    movies : Movie[]
}

const MainSlideshow = ({movies} : Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;
  return (
    <View>
      <Carousel 
      ref={ref}
      data={movies}
      renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster}/>}
      width={200}
      height={350}
      style={{
        width: width,
        height:350,
        justifyContent : "center",
        alignItems: "center"
       }
      }

      mode="parallax"
      modeConfig={{
        parallaxScrollingScale:0.9,
        parallaxScrollingOffset:50
      }}
      />
    </View>
  );
};

export default MainSlideshow;
