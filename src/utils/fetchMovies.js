const fetchMovies = async (api, controller, setStatusMessage) => {
  setStatusMessage("Loading...");
  try {
    const response = await fetch(api, {
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });
    const data = response.json();
    setStatusMessage("");
    return data;
  } catch (error) {
    console.log(error);
    setStatusMessage("An error occured. Try again later.");
  }
};

export default fetchMovies;
