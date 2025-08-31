import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default
  [
    index("features/presentation/Presentation.tsx"),

    route("comand", "features/team/Team.tsx"),
    route("privacy", "features/legal/PrivacyPolicy.tsx"),
    route("ptsd_info", "features/ptsd/PTSDInfo.tsx"),

    route("login", "features/auth/Login.tsx"),
    route("register", "features/auth/Register.tsx"),
    route("forgot_password", "features/auth/ForgotPassword.tsx"),
    route("reset_password", "features/auth/ResetPassword.tsx"),

    route("admin", "features/admin/AdminLayout.tsx", [
      index("features/admin/UserManagement.tsx"),
    ]),

    route("prototype", "features/routes/ProtectedLayout.tsx", [
      index("features/exercises/InteractiveExercises.tsx"),
      route("profile", "features/profile/Profile.tsx"),
      route("test", "features/ptsd/PTSDTest.tsx"),
      route("meditation", "features/exercises/Meditation.tsx"),
      route("mindfulex", "features/exercises/MindfulnessExercise.tsx"),
      route("breathing", "features/exercises/BreathingExercise.tsx"),
      route("feedback", "features/feedback/Feedback.tsx"),
      route("feedback-success", "features/feedback/FeedbackSuccess.tsx"), 
    ]),

    
    route("*", "features/routes/NotFound.tsx"),


  ] satisfies RouteConfig;
