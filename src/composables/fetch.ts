import { Todo } from "../global";

export const useFetch = async (url: string) => {
  let data: Todo[] = [] as Todo[];
  let error: { value: string | null } = { value: null };

  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (err) {
    error.value = "Error Occurred!";
  }

  return { data, error };
};
