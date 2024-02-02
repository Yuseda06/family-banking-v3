import { Slot, useRouter, useSegments } from "expo-router";
import "../global.css";
import { useEffect } from "react";
import { AuthContextProvider, useAuth } from "../context/authContext";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Check if isAuthenticated is still undefined and return early
    if (typeof isAuthenticated === "undefined") return;

    const inApp = segments[0] === "(app)";

    console.log("inApp", inApp);

    // Use strict equality check (===) for consistency
    if (isAuthenticated && !inApp) {
      router.replace("home");
    } else if (!isAuthenticated) {
      // Use explicit check for false
      router.replace("signIn");
    }
  }, [isAuthenticated, segments, router]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};

export default RootLayout;
