import useFetch from "./hooks/useFetch"

export const Fetch = ({
  URI,
  renderSuccess,
  loadingFallback = () => (<p>loading...</p>),
  renderError = error => (
    <pre>{JSON.stringify(error, null, 2)}</pre>
  )
}) => {
  const { loading, data, error } = useFetch(URI);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data })
}