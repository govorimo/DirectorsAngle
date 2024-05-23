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
  const response = await fetch(url, {...fetchOptions, ...options});

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json() as Promise<T>;
};
