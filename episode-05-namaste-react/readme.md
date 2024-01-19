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
