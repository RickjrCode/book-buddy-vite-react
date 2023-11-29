const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function registerUser(userObj) {
  try {
    const resp = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    const json = await resp.json();
    return json.token;
  } catch (err) {
    console.error(err);
  }
}

export async function loginUser(userObj) {
  try {
    const resp = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    const json = await resp.json();
    return json.token;
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(token) {
  try {
    const resp = await fetch(`${API_URL}/users/me`, {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await resp.json();
    console.log(json);
  } catch (err) {
    console.error(err);
  }
}
