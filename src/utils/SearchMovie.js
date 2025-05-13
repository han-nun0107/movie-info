export const fetchSearchedMovies = async (query, token) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&language=ko-KR&page=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      }
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log("데이터 생성 실패", error);
  }
};
