# builder-starters

This repository contains a collection of starter projects for Builder.
You can also find example repos from Builder's Github: https://github.com/BuilderIO/builder/tree/main/examples
And the Unified Demo: https://github.com/BuilderIO/unified-demo/tree/main/ecommerce


## builder-api-tests

This folder contains scripts to test Builder's APIs.


## Testing

The way I reproduce bugs is by copying the relevant folder from this repo to a new directory and then making changes in a copy. 
This is because I don't want to accidentally commit irrelevant changes from my tests. 
But an easier way to do tests would be to change the files directly, and if you ever need a clean slate, you can pull from this repo again:

```
git fetch
git checkout main
git reset --hard origin/main
```