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
- Install @babel/preset-react- to make jsx work in test cases

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
