# repack_dynamic_import_bug

a new react native project created from "npx react-native init repack_dynamic_import_bug --version 0.69.0-rc.3" command

and repack is setup to reproduce an issue regarding dynamic imports chunk loading


# where does the test take place ?

inside `index.js` in project root in `importLocale` function

# how to test

1. run packager
```
yarn start
```

2. build and install release variant
```
yarn android --variant=release
```

3. monitor logs
```
yarn log
```

4. re open app in emulator to see the errors
