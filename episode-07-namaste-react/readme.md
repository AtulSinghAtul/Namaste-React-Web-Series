# Episode-07 | Finding the Path

## Hooks We learned-

- **UseState()**
- **UseEffect()**
- **UseRouterError()**
- **UseParams()**

## In this episode we are going to creating pages and routes.

## useEffect(()=>{},[])

- The defination of use effect is, if every time my component render my use effect will call every time. But
  because we put in dependency array inside use effect so this dependency array changes the behaviour of it's render.

- **1:-** If we use useEffect without dependency array it will render every time if my component render.

  ```
  useEffect(()=>{});
  ```

- **2:-** If useEffect have empety dependency array then what? => So then useEffect is called only on first initial render not called again and again.

  ```
  useEffect(()=>{},[]);
  ```

  - **3:-** If we put something inside dependency array(`[loginlogoutBtn]`) then this useEffect called only when the array dependency(`[loginlogoutBtn]`) changes.

  ```
  useEffect(()=>{},[loginlogoutBtn]);
  ```

  **Note:-**

  - 1: Never write Hooks out of component.
  - 2: Write Hooks on the top of inside component.
  - 3: Never write Hooks inside if else condition, for loop or function because it's made unconsistency and react don't like this and you meshup your code.
  - 4: It will create unconsistency in our program because for some render that means according to the if else condition some time when body component is getting render some time search text and some time not search text.

  ```
  if(){
  const [searchText, setSearchText] = useState("");
  }
  ```

## React Roter DOM

- We will create routes to moving one page to another page by react router dom.

- First thing first how did created this configuration, I imported my `createBrowserRouter` from `react-router-dom`

```
import  {createBrowserRouter} from "react-router-dom";
```

- And this createBrowserRouter takes some configurations, that configurations is list(this is array of objects), each and every object defines a different path and what should happen that path.

```
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
  },
  {
    path: "/about",
    element:<About/>,
  }
])
```

- So basically this configurations is telling if the path is slash`/` then load`<AppLayout/>`, if iam on `/about` then load that our about component`<About/>`.

- Now when I have create this configurations, I need to provide this configuration. Where we need to provide, I need this provide to render it. Here comes `RouterProvider`.

- **RouterProvider**-
- I imported my `RouterProvider` from `react-router-dom`

```
import  {RouterProvider} from "react-router-dom";
```

- This RouterProvider will actually provide this routing configuration to our app.**How?**

- Instead of render our AppLayout component directly in render method we use RouterProvider.

```
  root.render(<RouterProvider router={appRouter}>)
```

- If we write in our path some random text it's gives us the error so how can handle we this error. We can use errorElement inside create browser router in slash home object.

```
{
  path:"/",
  element:<AppLayout/>
  errorElement:<Error/>
}
```

- React Router DOM gives us access to an important hook. The hook is **UseRouterError()**.

- **UseRouterError()** - using this UseRouterError() and we can show a specific detail to user that's why we use UseRouterError.

## How to create children routes?

- We want to create about or contact children to our home page app layout and we wnat to header on every page.

- We want to push the children over here(condition) according to the routes.

```
const AppLayout = function App() {

  return (
    <div>
      <Header />
      {/* if "/"  */}
      <Body />
      {/* if "/about"  */}
      <About />
      {/* if "/contact"  */}
      <Contact />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  }
  ]
    errorElement:<Error/>
  },

])
```

- React-router-dom something gives us **`Outlet`**. This outlet is component. We created this outlet inside AppLayout component , whenever change the path the outlet wil be filter children according to path.

```
import {Outlet} from ""react-router-dom;
```

```
const AppLayout = function App() {

  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  }
  ]
    errorElement:<Error/>
  },

])
```

- Will I see outlet in my html - no my dear friends. So below this header all children component , so this outlet is basically replaced by the children component.

## How to create link our pages?

- When we click on about this will show about page.

- Using anchor tag we can do things.

```
<a href="/about">About Us</a>
```

- When click on about it's take to me about page but let me tell you a important things over here.

- When we using react then and you want to route some other page never ever use a anchor tag(<a></a>).

-Why should not use anchor tag because when go to about page the whole page got refreshed. I don't want to refresh my whole page but still I move on to route.

- Very important things that will you make app faster, you can navigate to on your page without reloading the whole page.

- Instead of anchor tag we use something known as **Link**.

- **Link** - This link is come from react router dom. Link component exactly work as a anchor tag but this is not refreshing our whole page.

- Link is a component which is given us by react-router-dom which is special component and behind the scene Link is using anchor tag.

- Link is wrapper over anchor tag when you Home page text make links that means now react-router-dom will keep a track that this Home is link and you don't have refresh the page.

```
import { Link } from "react-router-dom";
```

```
<Link to={"/"}>Home</Link>
<Link to={"/about"}>About</Link>
<Link to={"/contact"}>Contact</Link>
```

**Note:-** Link dose not reload the whole page not will make some external call something, it just refreshes the component. There is difference reload the page and refresh the page. **That's why our react application known as single page application**.

- Here is Whole single component is this <AppLayout> component and all the routing all the new pages are just component interchanging themselves. This is why we call this **single page application**.

## There are two type Routings that you can have web applications.

- One is **Client side routing**.
- Other is **Server side routing**.

## What is the difference between Client side routing and Server side routing?

- **Client side routing**: React is use Client side routing.

- **Server side routing** means, you have index.html yiu have about.html, contact.html, if I click my anchor tag /about/about.html , it reload the whole page sends the network call to about.html fetches the html and renders on the page that's how is the work. That is server side routing.

## How can we use Dynamic Routing?

- We have dynamic route for every restaurent that we have, when we click any res card it's dynamically routes the those res card menu page.

- When we use slash colon (/:) after slash colon anything write those are dynamic.

```
 {
    //! Dynamic Routing
    path: "/resturants/:resId",
    element:<RestaurantsMenu/>,
  }
```

```
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
  {
    path: "/about",
    element:<About/>,
  },
  {
    path: "/contact",
    element:<Contact/>,
  },
  {
    //! Dynamic Routing
    path: "/resturants/:resId",
    element:<RestaurantsMenu/>,
  }
  ]
    errorElement:<Error/>
  },

])
```

- We want to when we go on dynamic route then RestaurantsMenu component will render and then make api call using useEffect hook and then show the data on ui.

> TypeError: Cannot destructure property 'name' of '(intermediate value)' as it is undefined.

- This error is coming because I am using turnary operator, when resInfo is null then show shimmer, In Initially I give resInfo state variable value null so the name is destructring from null so this is giving error.

- **UseParams()** - React JS useParams Hook helps to access the parameters`(/:resId)` of the current route to manage the dynamic routes in the URL. The react-router-dom package has useParams hooks that let you access and use the parameters of the current route as required.

```
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[

  {
    //! Dynamic Routing
    path: "/resturants/:resId",
    element:<RestaurantsMenu/>,
  }
  ]

  },

])
```

```
const {resId} = useParams();
```
