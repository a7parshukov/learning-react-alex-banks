# Основы

Минимальная страница с React и подключением CDN:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pure React Samples</title>
</head>
<body>

<!-- Target Container -->
<div id="react-container"></div>

<!-- React Library & React DOM-->
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src='https://unpkg.com/@babel/standalone/babel.min.js'></script>

<script>

    // Pure React and JavaScript Code

</script>

</body>
</html>
```

Создание элемента React без использования JSX:
```js
const dish = React.createElement(
  "h1",
  {id: "recipe-0", 'data-type': "title"},
  "Baked Salmon"
)

ReactDOM.render(
  dish,
  document.getElementById('react-container')
)
```

Обертка для тегов React выглядит следующим образом:
```js
function Cat({name}) {
  return(
    <React.Fragment>
      <h1>The cat`s name is {name}</h1>
      <p>He is good</p>
    </React.Fragment>
  )
}
```
Без `React.Fragment` в приложении будут ошибки.
Сокращенная версия для `Fragment`: 
```js
function Cat({name}) {
  return(
    <>
      <h1>The cat`s name is {name}</h1>
      <p>He is good</p>
    </>
  )
}
```