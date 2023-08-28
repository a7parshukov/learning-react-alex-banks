// import { GitHubUser } from "./GitHubUser";

import { GitHubUser } from "./GitHubUser"
// import { ReactWindow } from "./list/ReactWindow";

import { GraphQLClient} from "graphql-request";

// GraphQL:
const query = `
  query findRepos($login: String!) {
    user(login: $login) {
      login
      name
      location
      avatar_url: avatarUrl
      repositories(first:100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;

const client = new GraphQLClient(
  "https://api.github.com/graphql",
  {
    headers: {
      Authorization: `Bearer <PERSONAL_ACCESS_TOKEN>`
    }
  }
);

client
  .request(query, {login: "moontahoe"})
  .then(results => JSON.stringify(results, null, 2))
  .then(console.log)
  .catch(console.error);

function App() {

  // запрос данных (API GitHub)
  // async function requestGithubUser(githubLogin) {
  //   try {
  //     const response = await fetch(`https://api.github.com/users/${githubLogin}`);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  // requestGithubUser("a7parshukov");

  // отправка данных с запросом
  // fetch("/create/user", {
  //   method: "POST",
  //   body: JSON.stringify({ username, password, bio })
  // })

  // загрузка файлов
  // const formData = new FormData();
  // formData.append("username", "moontahoe");

  // fetch("/create/user", {
  //   method: "POST",
  //   body: formData
  // });

  // const login = "moonhighway";

  // const tahoe_peaks = [
  //   { name: "Freel Peak", elevation: 10891 },
  //   { name: "Monument Peak", elevation: 10067 },
  //   { name: "Pyramid Peak", elevation: 9983 },
  //   { name: "Mt. Tallac", elevation: 9735 }
  // ];

  /*
<ul>
      {tahoe_peaks.map((peak, i) => (
        <li key={i}>{peak.name} - {peak.elevation}</li>
      ))}
    </ul>
  */

  // return (
  //   <List
  //     data={tahoe_peaks}
  //     renderEmpty={<p>This list is empty</p>}
  //     renderItem={item => (
  //       <>
  //         { item.name } - { item.elevation }
  //       </>
  //     )}
  //   />
  // )
  const login = "a7parshukov";

  return (
    <GitHubUser login={login} />
  )
}

export default App
