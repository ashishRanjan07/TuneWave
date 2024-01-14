import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext, useEffect } from "react";
import color from "../misc/color";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import PlayerButton from "../components/PlayerButton";
import { AudioContext } from "../context/AudioProvider";
import { pause, play, playNext, resume } from "../misc/AudioController";
import { storeAudioForNextOpening } from "../misc/helper";

const { width } = Dimensions.get("window");

const Player = () => {
  const context = useContext(AudioContext);
  const { playbackPosition, playbackDuration } = context;
  const calculateSeekbar = () => {
    if (playbackPosition !== null && playbackDuration !== null) {
      return playbackPosition / playbackDuration;
    }
    return 0;
  };
  useEffect(() => {
    context.loadPreviousAudio();
  }, []);

  const handlePlayPause = async () => {
    //Play
    if (context.soundObj === null) {
      const audio = context.currentAudio;
      const status = await play(context.playbackObj, audio.uri);
      context.playbackObj.setOnPlaybackStatusUpdate(
        context.onPlaybackStatusUpdate
      );
      return context.updateState(context, {
        soundObj: status,
        currentAudio: audio,
        isPlaying: true,
        currentAudioIndex: context.currentAudioIndex,
      });
    }
    //Pause
    if (context.soundObj && context.soundObj.isPlaying) {
      const status = await pause(context.playbackObj);
      return context.updateState(context, {
        soundObj: status,
        isPlaying: false,
      });
    }
    //resume
    if (context.soundObj && !context.soundObj.isPlaying) {
      const status = await resume(context.playbackObj);
      return context.updateState(context, {
        soundObj: status,
        isPlaying: true,
      });
    }
  };
  const handleNext = async () => {
    const { isLoaded } = await context.playbackObj.getStatusAsync();
    const isLastAudio =
      context.currentAudioIndex + 1 === context.totalAudioCount;
    let audio = context.audioFiles[context.currentAudioIndex + 1];
    let index;
    let status;

    if (!isLoaded && !isLastAudio) {
      index = context.currentAudioIndex + 1;
      status = await play(context.playbackObj, audio.uri);
    }
    if (isLoaded && !isLastAudio) {
      index = context.currentAudioIndex + 1;
      status = await playNext(context.playbackObj, audio.uri);
    }
    if (isLastAudio) {
      index = 0;
      audio = context.audioFiles[index];
      if (isLoaded) {
        status = await playNext(context.playbackObj, audio.uri);
      } else {
        status = await play(context.playbackObj, audio.uri);
      }
    }
    context.updateState(context, {
      currentAudio: audio,
      playbackObj: context.playbackObj,
      soundObj: status,
      isPlaying: true,
      currentAudioIndex: index,
      playbackPosition:null,
      playbackDuration:null,
    });
    storeAudioForNextOpening(audio, index);
  };
  const handlePrevious = async () => {
    const { isLoaded } = await context.playbackObj.getStatusAsync();
    const isFirstAudio = context.currentAudioIndex <= 0;
    let audio = context.audioFiles[context.currentAudioIndex - 1];
    let index;
    let status;

    if (!isLoaded && !isFirstAudio) {
      index = context.currentAudioIndex - 1;
      status = await play(context.playbackObj, audio.uri);
    }
    if (isLoaded && !isFirstAudio) {
      index = context.currentAudioIndex - 1;
      status = await playNext(context.playbackObj, audio.uri);
    }
    if (isFirstAudio) {
      index = context.totalAudioCount - 1;
      audio = context.audioFiles[index];
      if (isLoaded) {
        status = await playNext(context.playbackObj, audio.uri);
      } else {
        status = await play(context.playbackObj, audio.uri);
      }
    }
    context.updateState(context, {
      currentAudio: audio,
      playbackObj: context.playbackObj,
      soundObj: status,
      isPlaying: true,
      currentAudioIndex: index,
      playbackPosition:null,
      playbackDuration:null,
    });
    storeAudioForNextOpening(audio, index);
  };

  if (!context.currentAudio) return null;
  return (
    <View style={styles.view1}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flex: 0.1,
        }}
      >
        <TouchableWithoutFeedback>
          <Ionicons name="arrow-back" size={24} color="orange" />
        </TouchableWithoutFeedback>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "orange" }}>
          Music Player
        </Text>
        <MaterialCommunityIcons name="dots-grid" size={24} color="orange" />
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
          width: "80%",
          alignSelf: "center",
          flex: 0.5,
        }}
      >
        <MaterialCommunityIcons
          name="music-circle"
          size={300}
          color={context.isPlaying ? color.ACTIVE_BG : color.FONT_MEDIUM}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 0.1,
        }}
      >
        <Text>{`Total number of song: ${context.currentAudioIndex + 1}/${
          context.totalAudioCount
        }`}</Text>
        <Text
          numberOfLines={1}
          style={{ fontSize: 22, fontWeight: "bold", color: "gray" }}
        >
          {context.currentAudio.filename}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flex: 0.05,
          width: "95%",
          alignSelf: "center",
        }}
      >
        <Text>1:20</Text>
        <Slider
          style={{ width: width * 0.8, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          value={calculateSeekbar()}
          minimumTrackTintColor={color.FONT_MEDIUM}
          maximumTrackTintColor={color.ACTIVE_BG}
        />
        <Text>1:20</Text>
      </View>

      <View style={styles.audioControllers}>
        <PlayerButton iconType="PREV" onPress={handlePrevious} />
        <PlayerButton
          onPress={handlePlayPause}
          style={{ marginHorizontal: 30 }}
          iconType={context.isPlaying ? "PLAY" : "PAUSE"}
        />
        <PlayerButton iconType="NEXT" onPress={handleNext} />
      </View>

      <View
        style={{
          position: "relative",
          flex: 0.1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="share-social-sharp" size={24} color="black" />
        <MaterialCommunityIcons name="equalizer" size={24} color="black" />
        <MaterialIcons name="repeat" size={24} color="black" />
        <Entypo name="shuffle" size={24} color="black" />
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  audiocount: {
    textAlign: "right",
    padding: 15,
    color: color.FONT_LIGHT,
    fontSize: 14,
  },
  midBannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  audioTitle: {
    fontSize: 16,
    color: color.ACTIVE_FONT,
    padding: 15,
  },
  audioController: {
    width: width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  view1: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  audioControllers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    alignSelf: "center",
    padding: 15,
  },
});
