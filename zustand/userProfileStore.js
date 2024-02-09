import { create } from "zustand";

// Create a store with Zustand for user profile
const useProfileStore = create((set) => ({
  userProfile: {
    // Your initial user state
    profileUrl: "", // Add other profile properties as needed
  },
  updateProfile: (newUserData) =>
    set((state) => ({ userProfile: { ...state.userProfile, ...newUserData } })),
}));

const usePictureTakenStore = create((set) => ({
  pictureTaken: {
    isTaken: false,
  },
  updatePictureTaken: (userData) =>
    set((state) => ({ pictureTaken: { ...state.pictureTaken, ...userData } })),
}));

const usePictureGrabbedStore = create((set) => ({
  pictureGrabbed: {
    isGrabbed: false,
  },
  updatePictureGrabbed: (userData) =>
    set((state) => ({
      pictureGrabbed: { ...state.pictureGrabbed, ...userData },
    })),
}));

export { useProfileStore, usePictureTakenStore, usePictureGrabbedStore }; // Export the stores for other components
