import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default
  [
    index("pages/Presentation.tsx"),

    route("feedback", "routes/Feedback.tsx"),
    route("comand", "pages/Team.tsx"),
    route("privacy", "routes/PrivacyPolicy.tsx"),
    route("ptsd_info", "routes/PTSDInfo.tsx"),




    route("prototype", "pages/Home.tsx", [
      index("routes/InteractiveExercises.tsx"),
      route("test", "routes/PTSDTest.tsx"),
      route("meditation", "routes/Meditation.tsx"),
      route("psinstrument", "routes/MoodTracker.tsx"),
      route("mindfulex", "routes/MindfulnessExercise.tsx"),
      route("breathing", "routes/BreathingExercise.tsx"),
    ]),



  ] satisfies RouteConfig;
