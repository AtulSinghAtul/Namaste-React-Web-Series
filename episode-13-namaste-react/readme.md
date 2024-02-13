# Episode-13 | Time for Test

## Types of testing (developer)

- There are three type testing as a developer role
- **1:-** Unit Testing
- **2:-** Integration Testing
- **3:-** End to End Testing(e2e testing)

### Unit Testing?

- You test your react component in isolation.
- Suppose if I want to test my only header component, we have not concern about everything else about in my app, we concern only header component.
- So I will just test try to my header component in isolation. I will just try to render my header component and we will see weather it render propley or not, only one specific component that type testing is known as a unit testing, we are testing specific just small unit of our react application not the whole application that is unit testing.

### Integration Testing?

- Integration Testing means there are multiple component and they are talking to each other and we will develop of flow of an action in react application that we will test.
- We will basically test weather some body is writing something inside search box, somebody clicks on the search box and there should we get three items.
- First of all we have 20 restaurent card over here if I click search box it's give us filtered restaurent card.
- So this type testing is known as intigration testing. we multiple component talk to each other, there are event happening there are click event, there are input changing so we do this all by code, this is intigration testing.

### End to End testing?

- End to End testing is kind of simulating what is the user will do throw out the app basically how the user will flow across the application.
- end to end testing required different type tools like **Cypress**, **Puppeteer**, **Selenium**.

### Developers should focus on two type of testing?

- Unit Testing
- Integration Testing

### How do we setup to write test cases?

- First we install **React Testing Library**, this is the one of the most standered library which is to write test cases in react and **react testing librarey is built on top of dom testing librarey**, so this dom testing librarey is based of all these testing library.

- If you create your project using create react app so when you build create react app so then testing librarey
  already exist inside it.

- **Note**- React testing library uses something known as **Jest**, so **jest is a delightful JS Testing Framework with a focus on simplicity. It works with projects using: `Babel`, ` TypeScript` ,`Node`,`React`, `Angular`,`Vue` and more!**

- **Jest** is basically **JavaScript Testing framework and that DOM testing librarey or the react testing librarey** uses **Jest** behind the scene.

### Setting up testing in my react app

- Install React Testing library
- Installed jest
- Installed babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel
  transpilation
- Jest Configuration - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside my babel.config.js
- install this @testing-librarey/jest-dom

> **1.** **Commond** for installing react testing librarey

```
npm install -D @testing-library/react
```

> **2.** for installing jest

```
npm i -D jest
```

> **3.** we are now installing the dependency which are required to use babel, because we are using jest along with babel.

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

> **4.** when we install this babel dependency now you have to configure babel.

- Configure Babel to target your current version of Node by creating a `babel.config.js` file in the root of your project:

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

> **5.** That parcel automatically has babel inside it, parcel uses babel behind the scene.And babel is **Transpiler**

- And parcel has it's own configuration for babel now here we trying to add extra configuration so will get confused, parcel's configuration will conflict this new configuration(babel.config.js) so we will have to change the parcel's behaviour to accomudate to use babel along with jest.

**Note-** go to on parcel website > Javascript > babel an d try to read this. and go to section on **Usage with other tools**

- [ Read about Babel how to configuration work](https://parceljs.org/languages/javascript/#babel)

Usage with other tools

### While Parcel includes transpilation by default, you may still need to use Babel with other tools such as test runners like Jest, and linters like ESLint. If this is the case, you may not be able to completely remove your Babel config. You can make Parcel ignore your Babel config instead, which will have performance benefits and prevent the other issues described above.

- To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.

```
.parcelrc:
{
    "extends": "@parcel/config-default",
      "transformers": {
        "\*.{js,mjs,jsx,cjs,ts,tsx}": [
         "@parcel/transformer-js",
         "@parcel/transformer-react-refresh-wrap"
       ]
     }
}
```

- This will allow other tools to continue using your Babel config, but disable Babel transpilation in Parcel.

- Now when we do this `.parcelrc` configuration, this `babel.config.js` was not conflict, this `babel.config.js` code will be conflict we used.

- **So basically why we disabling default babel transpilation(.parcelrc) because that I can use Configure babel(babel.config.js)**.

### Now How can we run test cases?

- So basically we use test command `npm run test` because in package.json have script test. and `npm run test` basically run our test cases.

```
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
```

> **6.** Jest configuration

- we write commond `npx jest --init` so basically it will initialised the jest and it will create a new configuration file for jest.

- And when we running this commond this will ask some question
- **1.** Would you like to use Typescript for the configuration file? - No
- **2.** Choose the test environment that will be used for testing - **jsdom (browser-like)**

#### What is jsdom?

- Whenwe run test cases so there is no server running, there is no browser, this test cases dose not run on browser si they will need a environment to run, they will need runtime where we testing code will be executed. So for that we use JSDOM.

- suppose we are testing a header component so header component will be loaded inside jsdom.

- **3.** Do you want Jest to add coverage reports? - yes
- **4.** Which provider should be used to instrument code for coverage? - babel
- **4.** Automatically clear mock calls, instances, contexts and results before every test? - yes

- so our jest configuration fill for jest automatically crated for us.

> **7.** install jsdom librarey

```
npm install --save-dev jest-environment-jsdom
```

- So let's start writing test cases, so first of all before even writing test cases whole components let's just write test case for very small thing.

- First we create folder `__tests__` and any javascript or typescript file inside this `__tests__` folder will be consider as your tests file.

- If file name is `fileName.test.js`,`fileName.test.ts`, `fileName.spec.js`, `fileName.spec.ts` all these files considered at testing file.

- Two continue under score is known as **dunder**.
- `__ = dunder`

- So how we write test case? - first of all we create file `sum.test.js` inside `__tests__` folder.

- And we write a function which known as test() and this test function basically takes two arguments first is string(we write description) and second is callback function.

```
test("", ()=>{

})
```

so this is how we write test case, this is one test case.

```
import {sum} from "../sum"

test("Sum function should calculate the sum of two numbers", ()=>{
 const result = sum(3, 4);

 //Assertion
 expect(result).toBe(7);
})
```

so this is how you test your sum function.

- **9.**

```
  @babel/preset-react inside my babel.config.js
```

- I will add this into my babel config

```
babel.config.js

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],

  ["@babel/preset-react",{runtime: "automatic"}]
    ],

};
```

- We install this package so now why we add this presets, what is the prsets, so basically what is babel- babel is transpiler it basically convert your code from one form to another, right now **this babel presets react is basically helping our testing librarey to convert jsx code to html so that it can read properly**.

```
test("", ()=>{
  render(<Contact/>)

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
})
```

- basically this code ( render(<Contact/>)) is jsx so that babel preset helping this react code to be converted into normal html code, that's why we use presets.

- **10.** When run our test case it's gives us error toBeInTheDocument is not a function. So basically I am trying to render my component on to **jsdom** and I am trying to find heading inside my rendered screen and once my heading now I am trying to search weather my heading inside the document or not and this sayes toBeInTheDocument is not a function, it is not present here because we have not installed librarey, there is one more librarey to take help from which is known as `@testing-librarey/jest-dom` , so we will install this librarey.
- So we import the whole librarey `import "@testing-librarey/jest-dom";`
- Once we include this library you will see amazing thing as soon as you write any Assertion, as soon as we write `expect(heading)` and hit the dot it gives you a lot of important function that you can assert you.

```
//Assertion
expect(heading).toBeInTheDocument()
```

- We uses this function (toBeInTheDocument()) a lot, when ever we have to check something wheather it has loaded or not we use this `toBeInTheDocument()` function.
- So now our test case will passed.

<!-- ********************************************* -->

- When we do console log this return our jsx element, that is react element, that is a object, that is react fiber node, that is virtual dom react all of things return to us.

```
test("Should load 2 input boxes on the Contact us component", () => {
  render(<Contact />);
// Querying
  const inputBoxes = screen.getAllByRole("textBox");

  console.log(inputBoxes.length);

  // Assertion
  //expect(inputBoxes.length).toBe(2);
  expect(inputBoxes.length).not.toBe(3);
});
```

- If we have multiple items that we use `getAllByRole`

- A lot of Querying and Assertion function try to play with this function.

- In every basic test cases We have `render`, `Querying `, `Assertion`, these are alwayes we doing.

- **Note-** If you have multiple test cases then you do one more things you can group multiple test cases inside `describe()` function. And also you grouped inside described() to another described() function and grouped test cases.

```
describe("Contact Us Paper Test Cases", ()=>{

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  // Assertion
  expect(button).toBeInTheDocument();
});

test("Should load name inside contact us component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  // Assertion
  expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes on the Contact us component", () => {
  render(<Contact />);
  // Querying
  const inputBoxes = screen.getAllByRole("textbox");

  console.log(inputBoxes.length);

  // Assertion
  expect(inputBoxes.length).toBe(2);
});

})
```

```
describe("Contact Us Page Test Cases", ()=>{

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  // Assertion
  expect(button).toBeInTheDocument();
});

describe("input test cases",()=>{

test("Should load name inside contact us component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  // Assertion
  expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes on the Contact us component", () => {
  render(<Contact />);
  // Querying
  const inputBoxes = screen.getAllByRole("textbox");

  console.log(inputBoxes.length);

  // Assertion
  expect(inputBoxes.length).toBe(2);
});
})

})
```

- jest sayes in the place of test function you write alsp it function, then what is the difference between them?

- Nothing is differnce both are same, it is just another name for test.

```
it()
```

## Now we will test our header component.

- We will test inside cart have any value or not
- when we write render mathod for header and run the test it gives us error because render goes to inside header component and read line by line code and when he got useSelector they don't no what is useSelector because useSelector is react redux code not jsx or react, so we will provide , provider store to header inside rendor method.

```
it("Should load header component with alogin button", ()=>{
  render(
    <Provider store={appStore}>
      <Header/>
    </Provider>
)
})
```

- Then it will also give error because we use routing in header component, the link will give error becuse it's import react router dom so we also provide BrowserRouter to our header component

```
it("Should load header component with alogin button", ()=>{
  render(
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
)
})
```

- If we have multiple button and we want to find login button

```
// Query
const ligInButton = screen.getByRole("button),{name:"Login"}
```

- How can we find Cart?

```
// Query
const cart = screen.getByText("Cart - (0 Item))
```

- How can we use Rejex?

```
// Query
const cart = screen.getByText(/Cart/)
```

- How can we write test our click events? - basically we have `fireEvents` to testing click event.

```
// query
const logInButton = screen.getByRrole("button"),{name:"Login"};

fireEvent.click(logInButton);

const logOutButton = screen.getByRrole("button"),{name:"Logout"};

expect(logoutButton).toBeInTheDocument();
```

### How can we write test case for props?

- how can we pass props to component and test it

```
import MOCK_DATA from "../mockData/resCardMockData.json";
import ResturantCard from "../RestaurantCard";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render restaurentCard component with props Data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  //Query
  const name = screen.getByText("Chicago Pizza");

  //Assertion
  expect(name).toBeInTheDocument();
});
```

# Integration Testing?

- When we testing the body component, when we write rendering this body component but it's not rendring it on the browser it is rendering jest dom which is like as browser and the fetch() function given by browser it not given by js and overhere in testing this is render by jest dom browser like things so it cant not understand fetch, jest dose not understand fetch, so what will have do?
- We will have to write mock function for this fetch just we have like mock data we can write mock function for fetch.

```
global.fetch = jest.fn()
```

this will give us mock fetch function. fn() will takes a callback function and here we will mock exactelly like how our fetch function work.

- How dose my fetch function works?
- so what dose our fetch function returnes? it's return us promise, so also I will have return Promise for this because we want to make it exactely similer to identical fetch function we are trying to mock fetch function exactely similar to how our fetch function works.

```
global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: ()=>{
      return Promise.resolve(MOCK_DATA);
    }
  })
})
```

- **Note:-** In package.json write script `"watch-test": "jest --watch"` this script will continue running our test cases if we changing in our file as like a parcel.
  commond: `npm run watch-test`

- when run this test this gives us warning-

  > Warning: An update to Body inside a test was not wrapped in act(...).

  > When testing, code that causes React state updates should be wrapped into act(...):

```
        act(() => {
          /* fire events that update state */
        });
        /* assert on the output */
```

- and this act function comes from `react-dom/test-utiles`

- now how use this function, first we await this function, this act function return us promise and when we await this we make callback fumction async and this act function takes again async callback function

```
globalThis.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body Component with Search",async () => {
 await act(async ()=> render(<Body />);)
});
```

- and it's gives us again error for Link, so we wrap our browserRouter again.

```
it("Should render the body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // Query
  const searchBtn = screen.getByRole("button", { name: "search restaurants" });
  // Assertion
  expect(searchBtn).toBeInTheDocument();
});
```

- **We will test our input box when type in input box our onChange will triggred**, so how will test our input.

- First of we will get our serch input box, we have not any place holder otherwise we screen placeholder test so suppose if we not have any thing in input so this jest gives us something known as **getByTestId**.

- Suppose if my getByRole, getByTest not working but **getByTestId** will alwayes work so go back our actual input tag now we give test id to input box using **data-testid** and jest will read it and give it's value searchInput (**data-testid = "searchInput"**) now can find by testid in your test file. S this is another way to find you something inside your screen this jest-dom.
- and now we fire event for change.
  **fireEvent.change(searchInput, {})** and this object we got value what inside our onChange(e) parameter e, and this parameter**e.target.value is given us by browser** and in our test file we have not browser so we write inside object **{target: {value: "burger"}}** this value burger will match from our input box where we write burger.
- Now we click the search button this again click fire event we write in test file.

```
it("Should render the body Component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // Query
  const cardsBeforeSearchInput = screen.getAllByTestId("resCard");
  // Assertion
  expect(cardsBeforeSearchInput.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "search restaurants" });

  const searchInput = screen.getByTestId("searchInput");

  // fire event for onChange()
  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  // screen should load 4 res cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  // Assertion
  expect(cardsAfterSearch.length).toBe(4);
});
```

### testing for top rated card

```

it("Should filter top rated Restaurents", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  // Query
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  // Assertion
  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {
    name: "top rated restaurent",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(3);
});

```

## Helper function?

```
describe("", () => {
  beforeAll(() => {
    console.log("Before All test cases");
  });

  afterAll(() => {
    console.log("After All test cases");
  });

  beforeEach(() => {
    console.log("Beafore each test cases");
  });

  afterEach(() => {
    console.log("After each test cases");
  });

  it("Should render the body Component with Search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    // Query
    const cardsBeforeSearchInput = screen.getAllByTestId("resCard");
    // Assertion
    expect(cardsBeforeSearchInput.length).toBe(9);

    const searchBtn = screen.getByRole("button", {
      name: "search restaurants",
    });

    const searchInput = screen.getByTestId("searchInput");

    // fire event for onChange()
    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);

    // screen should load 4 res cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");

    // Assertion
    expect(cardsAfterSearch.length).toBe(1);
  });

  it("Should filter top rated Restaurents", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    // Query
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    // Assertion
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {
      name: "top rated restaurent",
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(3);
  });
});
```

# Integration testing for add cart and cart page
