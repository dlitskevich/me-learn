export default {
  initializeApp: () => {},
  auth: Object.assign(() => ({
    currentUser: true,
  }), {
    GoogleAuthProvider: {
      PROVIDER_ID: 1,
    },
  }),
}
