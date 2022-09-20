2022-09-20 Tuesday (Week 38)

Started this mostly with a view to understanding Typescript work flows.
Feels as though this is still deeply ambigious and strange (I think a lot 
of different people are making a lot of different decisions around this).

The following (edited) parts of the package.json are important though I think

```
  "scripts": {
    "tsc": "tsc",
    "tsc-watch": "tsc-watch"
  },

  "devDependencies": {
    "tsc-watch": "^5.0.3",
    "typescript": "^4.8.3"
  }
```

tsc is the compiler, it should have a --watch parameter and a -w parameter, 
I couldn't get either to work though (a lot of very old SO questions which
are probably out of date). 

The tsc-watch NPM package appears to work. It ties up a terminal session
in VS Code, but I think that's fine. 

In case I forget: `npm run tsc-watch`