# Episode - 01

## Q-1: What is CDN ?

## Q-1: What is crossorigin ?

## Write react code using core react.

```
const heading = React.createElement("h1", {}, "Namaste react from core react")

const root = RactDOM.createRoot(document.getElementById("root"))

root.render(heading)

```

- heading is a react element who gives us object, we can see it in console.

- the render() method change react element(object) into html who browser understand.

```
/index.html

<div class="root"></div>
```

- inside this root div if we write any other element, when will come core react code inside this root div it `replace the other element` who present before.

```
Ex.
/index.html

<div class="root">
 <h1>this h1 element will replace by the react code</h1>
</div>
```
