export const fetchFirebaseData = async (path) => {
  const dataRef = ref(database, path);
  try {
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      console.log(`Data fetched from path '${path}':`, snapshot.val());
      return snapshot.val();
    } else {
      console.log(`No data found at path: ${path}`);
      return null;
    }
  } catch (error) {
    console.error("Firebase fetch error:", error);
    // You could throw the error here to be handled by the caller
    // throw error;
    return null;
  }
};
