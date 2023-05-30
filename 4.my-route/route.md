# React Router Dom

1. Отвечает библиотека `react-router-dom`;
2. Родительский компонент обернуть в `BrowserRouter`:
```js
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```
3. Ссылки `<a href="">` меняются на `<Link to="">`;
4. Сами роуты вносятся в родительский компонент `Routes`:
```js
<>
  <header>
    <Link to="/">Home</Link>
    <Link to="/blog">Blogs</Link>
    <Link to="/about">About</Link>
  </header>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog" element={<BlockPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</>
```
5. Структура App приложения может быть переписана под использование `Outlet`:
```js
<>
  <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<HomePage />} />
      <Route path="blog" element={<BlockPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
    </>
```
Элемент `<Layout />` выглядит так: 
```js
<>
  <header>
    <Link to="/">Home</Link>
    <Link to="/blog">Blogs</Link>
    <Link to="/about">About</Link>
  </header>
  <main>
    <Outlet />
  </main?
  <footer>2023</footer>
    </>
```
6. Для работы с ссылками и активным state можно получать объект при помощи хука `useMatch()`.