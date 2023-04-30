const fetchMovies = async (api, controller) => {
  try {
    const response = await fetch(api, {
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchMovies;
