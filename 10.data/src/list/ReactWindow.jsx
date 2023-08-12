/*
Используется react-window - для отображения виртуализованных списков

yarn add react-window
*/

import { FixedSizeList } from "react-window";
import { faker } from "@faker-js/faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

export const ReactWindow = () => {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>{bigList[index].name} - {bigList[index].email}</p>
    </div>
  )
  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  )
}