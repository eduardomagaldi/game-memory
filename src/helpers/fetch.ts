import { CardType } from "@/common/interfaces";

const apiUrl = "http://localhost:8081";

declare global {
  interface Window {
    location: Location;
  }
}

export default {
  get,
  post,
  delete: deleteFetch,
};

async function get(url: string): Promise<CardType[]> {
  const response = await fetch(apiUrl + url, { ...getOptions() });

  if (handleErrors(response)) {
    return [];
  }

  return await parseBody(response);
}

async function post(url: string, data: Record<symbol, unknown>): Promise<null> {
  const response = await fetch(apiUrl + url, {
    ...getOptions(),
    method: "POST",
    body: JSON.stringify(data || {}),
  });

  if (handleErrors(response)) {
    return null;
  }

  return await parseBody(response);
}

async function deleteFetch(url: string, data: string): Promise<string | null> {
  const response = await fetch(apiUrl + url, {
    ...getOptions(),
    method: "DELETE",
    body: JSON.stringify(data || {}),
  });

  if (handleErrors(response)) {
    return null;
  }

  return await parseBody(response);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleErrors(response: any) {
  let error = false;

  for (const entry of response.headers.entries()) {
    if (entry[0] === "location") {
      window.location.href = entry[1];
      error = true;
      break;
    }
  }

  if (response.status !== 200) {
    console.error(
      "Looks like there was a problem. Status Code: " + response.status
    );
  }

  return error;
}

function getOptions(): RequestInit {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
    mode: "cors",
    credentials: "include",
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function parseBody(response: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = await response.json().catch((e: any) => {
    console.error("e", e);
  });

  return data;
}
