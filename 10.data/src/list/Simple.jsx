import { faker } from "@faker-js/faker";

// eslint-disable-next-line react/prop-types
function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

const bigList = [...Array(5000)].map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

export const Simple = () => {
  
  const renderItem = item => (
    <div style={{ display: "flex" }}>
      <img
        src={item.avatar}
        alt={item.name}
        width={50}
      />
      <p>{item.name} - {item.email}</p>
    </div>
  );

  return <List data={bigList} renderItem={renderItem} />
}