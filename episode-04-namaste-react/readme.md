# episode-04

## Frontend System Design Interview Question => Config Driven ui?

- The config ui driven means that your ui is basically is driven by a config, ui is config driven that's why we known as config driven ui. This is the latest practice that every company follows now.

What is config?

- API data is config.
- The API data is different for different place means those offer available for delhi it's not sure this offer also available in Hyderabad.**We have written ui once and now according to data which is coming from backend our ui is getting change. This is known as config driven ui.**

## why we need key when using map?

- Suppose if you building 100 restaurent card and you are not give key then react will re-render all 100 restaurent card because react don't know which restaurent card come new . So if we use key then only those who comes new only those restaurent card re-render not all restaurent cards .

**Note:**

- You shold never use index as key. it's bad practice react also say. If you don't have unique key then use index.
- not using keys (not acceptable) <<< index as key <<<<<<<<<<<<<< unique id (best practice)

## Props

- Passing props to the component is just like passing an argument to function.

- `props is an object over here.`

- When we have to dynamically pass some data to component you pass as an prop

```
const ResturantCard = (props) => {
  console.log(props);

  return (
    <div className="res-card">
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard
          resName="Meghana Food"
          cuisine="Biryani, North Indian, Asian"
        />

        <ResturantCard
        resName="KFC"
        cuisine="Burger Foods"
        />
      </div>
    </div>
  );
};
```

## Destructuring Props

```
const ResturantCard = (props) => {
  //! Destructuring Props
  const {resName, cusinie} = props
  console.log(props);

  return (
    <div className="res-card" >
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard
          resName="Meghana Food"
          cuisine="Biryani, North Indian, Asian"
        />

        <ResturantCard
        resName="KFC"
        cuisine="Burger Foods"
        />
      </div>
    </div>
  );
};
```
