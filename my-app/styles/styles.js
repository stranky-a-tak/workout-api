import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: "1",
    backgroundColor: "#000000",
    paddingTop: 20,
    paddingBottom: 50,
    paddingHorizontal: 15,
  },
  containerCenter: {
    backgroundColor: "#000000",
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
  },
  textWhite: {
    color: "#ffffff",
  },
  textLg: {
    fontSize: 18,
  },
  card: {
    backgroundColor: "#212121",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  cardHeadingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeading: {
    fontSize: 26,
    color: "#ffffff",
  },
  cardTimeStamp: {
    fontSize: 20,
    color: "#ffffff",
  },
  heading: {
    color: "#ffffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
  workoutRepsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  exerciseCard: {
    backgroundColor: "#212121",
    borderRadius: 15,
    minHeight: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  input: {
    width: 300,
    borderWidth: 2,
    borderColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  label: {
    color: "#ffffff",
    marginBottom: 8,
  },
});
