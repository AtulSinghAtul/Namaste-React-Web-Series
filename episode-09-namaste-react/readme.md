# Episode -09 | Optimizing our App

## Modularity?

- Modularity means that you break down your code in different-different small-small module so that your code become more **maintainable** and more **testable**.

### How will it become more testable?

- Because suppose if you have single unit restaurent card so I can write test cases just for restaurent card so our big app will have bug so that if there bug is
  inside restaurent card so that test case will catch it.

- One more advantage it suppose if this restaurent card is single unit so where in my app i would need to show restaurent card, I can just reuse it.

- So if you write code in a modular fashion, if you follow the single responsibility principle that what happen is to get feature of reuseability, **code become more reusable, your code become more maintainable, your code become more testable**.
- So these are important things that we get if we follow **Single Responsibility principle**

## We will now create our own Custom Hook and how our code will more optimise when we write this own Custom Hook?

- hook is just utility function.
- Creating a custom hook not mandateroy things but very good things because that will make your code look more good readable, that will make your code more modular, that will make your code more reusable.

- I will create useRestaurantMenu() hook and it dose not worry about how to fetch the data it just worry about that is resInfo , I have got restaurant data inside it and I just want to display it now. This hook is just taking resId and so I want my data to get into my component.

```
import { useState, useEffect } from "react";

import { MENU_URL } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  }

  return resInfo;
};

export default useRestaurantMenu;

```

- Restaurat menu component now have one single major responsibility that is just displating the data.
- Fetching the data logic inside our custom hook, so that's how we create own custom hook.

### Make Project related to custom hook and public on NPM.

- which export some hook like useSessionStroage and useLocalStorage inside you app try to build this type hooks.

## We will Create custom hook Either user is online or ofline as in like chat app.

- Suppose if the user internet is not working then we can show something on web page, our website can work even user is ofline how can we develop that? So let's create that type hook.

- Firstley creating hook you should to know that what you **take in input** and what you want to **give in output**.

- So how can check you are online or offline, So we have event listner online to check.

- so those event listner will keep a track of when the internet is online and when the internet is offline have super power that is given by window object and browsers.

- So what ever write inside useEffect will be executed just once, so I will put my event listner on to web page once now those event listner job is to keep tracking when the iternet is online when the internet is offline and return the status back.

## Chuncking / Code Splitting / Dynamic Bundling/ Lazy Loading / On Demand Loading

- When we developing large application we have to break down our app in smaller JS files, not bundled only one JS File.

- To break down your app into smaller logical chuncks.

- We adding grocery component and want to this when we go on grocery page then only grocery code came in our app. Initally our code should not have grocery code when go that link then our grocery code should come up. **So that is known as lazy loading**

- So we will not load everything directally but we will do lazy loading when required and this is also known as **on demand loading**.

- Now we will not importing our grocery like this:

```
import Grocery from "./components/Grocery"
```

- We will importing Grocery using lazy() function, this lazy() function comes from react librarey and it takes callback function and this callback function uses import() function and now this import takes our Grocery path

```
const Grocery = lazy(()=> import("./components/Grocery))
```

- The Grocery has it's own bundled Grocery.js, our main buundled is seprate when we use this lazy() function.

- As soon as we click on this Grocery it will takes some time fetch data to grocery at that particular time that middle state, react trying soon to render grocery but it is not there that state that causes that error. **How to handle that state - we will use Suspence**.

- There is cool things react gives to us to handle that state, that is known as **Suspence**.
- That Suspence is a component and it comes from react librarey.
- When you are the home page your code of the grocery not there so react tries to load something, it can not load until the grocery code there so mean by intermediately react wants something to be prasent on that screen and you can give that inside **fallback inside suspence**. We can pass jsx inside fallback.

```
{
        path: "/grocery",
        element: <Suspence fallback={<h1>Loading...
                 </h1>}><Grocery /></Suspence>,
}
```

- When the use lazy loading all the code not comes that once and it will only comes when we that requested. If your component sizeing increasing your bundle size getting heavier 2mb now, suppose it's 10mb then we use start this type functionality.

- I can also do this lazy loading about us, how can I do this lazy loading for about us,in same way.

```
const About = lazy(()=> import("./components/About))
```

```
{
        path: "/about",
        element: <Suspence fallback={<h1>Loading...
                 </h1>}><About /></Suspence>,
}
```

- If go to my about us page so we have a different bundle for about us page, If we go to grocery, I will have different bundles for our grocery. So this is how I can distribute my applications into smaller smaller chunks and this will make our app very performend.
