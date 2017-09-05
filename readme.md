# jest-custom-resolver-with-mocks failing example project

## install

 1. clone this project
 2. `npm install`

## see failing test

run `npm test`

```
 FAIL  ./spec.js
  ● custom resolved mock › loads the manual mock module

    expect(received).toBe(expected)

    Expected value to be (using ===):
      "mocked"
    Received:
      "original"

      at Object.it (spec.js:8:15)
          at Promise (<anonymous>)
          at <anonymous>
      at process._tickCallback (internal/process/next_tick.js:188:7)

  custom resolved mock
    ✕ loads the manual mock module (10ms)
```

## fix tests

1. remove `resolver` configuration from jest config in `package.json`
2. run `npm test`

```
 PASS  ./spec.js
  custom resolved mock
    ✓ loads the manual mock module (4ms)
```
