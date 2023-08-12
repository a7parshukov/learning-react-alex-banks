
// const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
// const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

import { Fetch } from "./Fetch"

// eslint-disable-next-line react/prop-types
const UserDetails = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const {avatar_url, login, name, location} = data;
  return (
    <div>
      <img
        src={avatar_url}
        alt={login}
        style={{ width: 200 }}
      />
      <div>
        <h1>{login}</h1>
        {name && <p>{name}</p>}
        {location && <p>{location}</p>}
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
export const GitHubUser = ({ login }) => {
  const URI = `https://api.github.com/users/${login}`;

  return(
    <Fetch
      URI={URI}
      renderSuccess={UserDetails}
    />
  )
}