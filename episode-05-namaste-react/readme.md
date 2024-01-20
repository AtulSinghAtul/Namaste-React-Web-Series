# Episode - 05 Namaste React

## Two type of export and import

- 1: **Named Export**- If we have export multiple things in one file then we use named export.

```
export const ComponentName;
```

- 1: **Named Import**- Use curly braces and write same component name inside curly braces.

```
import {SameComponentName} from "file path";
```

- 2: **Default Export** - This export can only one in file. You not write default export many time in one file.

```
export default ComponentName;
```

- 2: **Default Import** - Don't use any curly braces when you importing default and not mandatory to write same component name which exported default.

```
import NotMandatorySameComponentName from "file path";
```

## We will make our app dynamic

- The React main work is the **ui layer and the data layer work each other properly**, if my **data changes my ui changes**. this is the thing all the framework trying to solve , **updating the dom efficiently**.

- here come for updating the dom `useState`.
- we use react hook to updating the dom.

### React Hooks

- A hook is normal Javascript utility function which is given us by react. There are multiple function those are known as hooks.

> Two hooks are most important.

- useState() - superpowerful state variable in react
- first named import from react librarey.

```
import {useState} from "react";
```

- then initate the useState hook.

```
const [variableName , setvariableName]= useState();
```

- **Note** When ever state variable changes react will re-render our component.

- local state variable scope is inside that component.
- useEffect()

## Why react is fast if in interviews anybody ask?

- Because it can do faster dom manipulation, it ca do efficient dom manipulation, there is something known as virtual dom, there is something known as dif algorythom, there is something known as reconciliation.

## Reconciliation Algorythom (React Fiber)
