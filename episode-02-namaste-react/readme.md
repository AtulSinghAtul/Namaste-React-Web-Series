# Episode - 02

## What is the job of bundler ?

: Bundler basically it's bundle your app / package your app basically, so that it can be shipped on production.

`Ex.` Parcel, Vite, Web_pack

```
npm install -D parcel
```

- We have two type of dependency that can we install. One is `dev dependency` and another one is `normal dependency`

**Dev dependency & Normal dependency:** dev dependency means it's require only **_development_** phase when we develop our app and normal dependency used in **_production_** also.

- so here we tell npm install parcel in dev dependency.

## Tilde( ~ ) and caret( ^ )

- Tilde( ~ ) allows for major updates, while caret( ^ ) allows for both minor and major updates.

## Package.json

- Package.json is configuration for NPM. package.json have tilde and caret.

## Package-lock.json

- Package-lock.json it's keep of track exact version of the all dependency.

- when we put our app on production that time our app not work but that app in our local machine work because
  the package-lock.json has version same on that time when we deploying in production mode.

## Transitive Dependencies

- Parcel has own dependency and that dependency has own dependency this is known as transitive dependency.

## Node_Modules

- node_modules is the collection of the dependency.

## Should I put my Package.json and Package-lock.json on git ?

- The answer is yes because Package.json and Package-lock.json has version of dependency so we will use this exact version of dependency on production deployment time.

> **If we have Package.json and Package-lock.json we recreates the node_modules so that's why not required node_modules to push on git.**

## What is npm?

- npm is installing the package and manage that packages.

## What is npx?

- npx is executing the package.

## Parcel ?

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching algorithm - written in c++
- Cashing - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different development and production bundles

```
npx parcel build index.html
```

**Note:** delete `"main":"App.js"` from package.json because it's create problem when we use above commond.

**Note:** when we use `npx parcel index.html` this commond create `dist` folder in our app. In our chrome page who you see anything this come from `dist` folder not from index.html.

**Note:** And when we refreshing our chrome page or save file this `dist` folder using `.parcel-cache` to update page using that `HMR(Hot Module replacement)`

**Note:** when we build production build it's build inside `dist` folder. inside this dist folder we got only three file html, css and js file. every single code we got inside this folder.

**Note:** Those folder regenerate don't push on git.
ex. dist, .parcel-cache, node_modules
