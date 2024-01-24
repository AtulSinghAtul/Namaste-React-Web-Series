# Episode- 06

## In this episode we learned how to fetch live swiggy api data and use it in our app.

## Here I learned?

- we learned about monolith and microservices architecture.
- how get api url from swiggy website.
- learned fetch() method this is given by browser js engine not by Javascript.
- fetch() method return us promise.
- using async await to dealing from promise
- learned cors policy.
- then we learned useState hook how to update our ui using useState hook.
- why normal variable not updataing the our ui but useState vairiable update the ui.
- why we use useEffect?
- first our page **load** then our component **render** after that we do some **api operation inside useEffect** and get data from api and then **re-render** the component to showing the api data on ui.
- here we use second approach to showing the data on ui.
- this approach is **load**==>**render**==>**api operation**==>**re-render**.
- for third step(**api operation**) we use the **useEffect**.
- we learned about Shimmer.
- we filtered res card base on rating.
- we filtered res card from input text
- how we bind iput text and base on those text we filtered out our res card.
- we resolve some bug like thar:-
- 1:- input text field not working when we typr inside input field.
- 2:- when first time we filtered res card base on input text when we want again filter res card base on input text those are not giving us res card.
