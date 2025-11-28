import { useInfiniteQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

async function fetchPopularMovies({ pageParam = 1, token }) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=${pageParam}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }

    const data = await response.json();

    if (data.success === false) {
      throw new Error(
        data.status_message ?? "영화 데이터를 불러오지 못했습니다."
      );
    }

    return data;
  } catch (error) {
    toast.error(`영화 불러오기 실패! ${error.message}`);
    throw error;
  }
}

export const useTanstackInfinite = (token) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["movies", token],
      queryFn: ({ pageParam }) => fetchPopularMovies({ pageParam, token }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const nextPage = (lastPage?.page ?? 0) + 1;
        if (!lastPage?.total_pages) return undefined;
        return nextPage <= lastPage.total_pages ? nextPage : undefined;
      },
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    });

  const movies = data?.pages.flatMap((page) => page.results ?? []) ?? [];

  return { isLoading, isError, fetchNextPage, hasNextPage, movies };
};
