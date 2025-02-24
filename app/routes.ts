import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default 
[
    index("pages/Presentation.tsx"),
    route("about", "routes/about.tsx"),
    route("feedback", "pages/FeedbackPage.tsx"),
    route("prototype", "pages/Home.tsx"),
    route("comand", "pages/Team.tsx"),
    route("test", "pages/PTSDTest.tsx"), // Тест ПТСР (вложенный в /prototype/test)
    route("meditation", "pages/MeditationPage.tsx"), // Медитация (вложенный в /prototype/meditation)
   
    
] satisfies RouteConfig;
