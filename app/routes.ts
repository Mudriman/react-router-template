import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default 
[
    index("pages/Presentation.tsx"),
    route("about", "routes/about.tsx"),
    route("feedback", "pages/FeedbackPage.tsx"),
    route("prototype", "pages/Home.tsx"),
    route("comand", "pages/Team.tsx"),
    route("prototype/test", "pages/PTSDTest.tsx"),
    route("prototype/meditation", "pages/MeditationPage.tsx"),
    
] satisfies RouteConfig;
