export const fetchOptions: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const fetcher = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const response = await fetch(url, {...fetchOptions, ...options});

    if (!response.ok) {
      throw new Error(
        `Error fetching data from ${url}: ${response.statusText}`,
      );
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error(`Network error fetching data from ${url}`, error);
    throw error;
  }
};
