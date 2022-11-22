export const useFirebaseUser = () => useState("firebaseUser", () => { }); // TODO: Was null
export const useContent = () => useState("content", () => []);
export const useUserObject = () => useState("userObject", () => ({})); // TODO: Was null
export const useUid = () => useState("userUid", () => ({
  uid: "Signed Out"
})); // TODO: Was null
