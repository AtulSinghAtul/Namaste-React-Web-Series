# episode-04

## config driven ui?

## why we need key when using map?

- Suppose if you building 100 restaurent card and you are not give key then react will re-render all 100 restaurent card because react don't know which restaurent card come new . So if we use key then only those who comes new only those restaurent card re-render not all restaurent cards .

**Note:**

- You shold never use index as key. it's bad practice react also say. If you don't have unique key then use index.
- not using keys (not acceptable) <<< index as key <<<<<<<<<<<<<< unique id (best practice)
