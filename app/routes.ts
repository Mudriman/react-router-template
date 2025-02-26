import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default 
[
    index("pages/Presentation.tsx"),
    route("feedback", "pages/FeedbackPage.tsx"),
    route("prototype", "pages/Home.tsx", [
        index("routes/InteractiveExercises.tsx"),
        route("test", "pages/PTSDTest.tsx"),
        route("meditation", "pages/MeditationPage.tsx"), 
        route("psinstrument", "routes/MoodTracker.tsx"),
      ]),
    route("comand", "pages/Team.tsx"),
   

] satisfies RouteConfig;
