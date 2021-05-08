# AssemblyScript / Javascript benchmark

## Brief conclusions
AssemblyScript is a good solution for hard/difficult mathematical operations 
with huge massive of data e.g. factorial or iterating huge array with additional mathematical operations.
But JavaScript is better for common maths operations or hard maths operations with small data
e.g. summation of two numbers or factorial of small number.

Formula: Use AssemblyScript when your JavaScript operation needs more time 
than compilation result of bytecode operation to Javascript.

## Installation

1. `npm install`
2. Create AssemblyScript build version by `npm run build` command.

## Running the app

```bash
# build
$ npm run asbuild

# assemblyScript code tests
$ npm run test

# benchmark
$ npm run benchmark
```
