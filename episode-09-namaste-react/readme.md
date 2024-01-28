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

- So what ever write inside useEffect will be executed just once, so I will put my event listner on to web page once now those event listner job is to keep tracking when the iternet is online when the internet is offline.
