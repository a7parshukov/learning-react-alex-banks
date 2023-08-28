type AppProps = {
  item: string;
}

const App = ({item}: AppProps) => {
  return (
    <div>
      <h1>{item}</h1>
    </div>
  )
};

export { App };