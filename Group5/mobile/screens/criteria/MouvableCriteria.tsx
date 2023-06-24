import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Criteria from "./Criteria";

const clamp = (value: number, lowerBound: number, upperBound: number) => {
  "worklet";

  return Math.max(lowerBound, Math.min(value, upperBound));
};

const objectMove = (
  object: Record<string, number>,
  from: number,
  to: number
) => {
  "worklet";

  const newObject = { ...object };

  for (const id in object) {
    if (object[id] === from) newObject[id] = to;

    if (object[id] === to) newObject[id] = from;
  }

  return newObject;
};

type CriteriaProps = {
  criteria: string;
  id: number;
  positions: SharedValue<Record<string, number>>;
  scrollY: SharedValue<number>;
  criteriaCount: number;
};

export default function MouvableCriteria({
  criteria,
  id,
  positions,
  scrollY,
  criteriaCount,
}: CriteriaProps) {
  const CRITERIA_HEIGHT = 80;

  // Local state
  const [moving, setMoving] = useState(false);

  console.log({ positions, id });

  // Animated values
  const top = useSharedValue(positions.value[id] * CRITERIA_HEIGHT + 20);

  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== previousPosition) {
        top.value = withSpring(currentPosition * CRITERIA_HEIGHT + 20);
      }
    }
  );

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      runOnJS(setMoving)(true);
    },

    onActive: (event, ctx: any) => {
      const positionY = event.absoluteY + scrollY.value;

      top.value = withTiming(positionY - CRITERIA_HEIGHT, { duration: 16 });

      const newPosition = clamp(
        Math.floor((positionY - CRITERIA_HEIGHT) / CRITERIA_HEIGHT),
        0,
        criteriaCount - 1
      );

      if (newPosition !== positions.value[id]) {
        positions.value = objectMove(
          positions.value,
          positions.value[id],
          newPosition
        );
      }
    },

    onEnd: (event, ctx: any) => {
      runOnJS(setMoving)(false);

      console.log(positions)

      top.value = withSpring(positions.value[id] * CRITERIA_HEIGHT + 20);
    },
  });

  const animatedStyle = useAnimatedStyle(
    () => ({
      top: top.value,
      zIndex: withSpring(moving ? 1 : 0),
      elevation: withSpring(moving ? 1 : 0),
    }),
    [moving]
  );

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={{ maxWidth: "100%" }}>
          <Criteria criteria={criteria} />
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
  },
});
