const fs = require('fs')
const loader = require('@assemblyscript/loader')
const imports = { /* imports go here */ }
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + '/build/optimized.wasm'), imports)

function squareArrayGen(len) {
    const { __getInt32Array, squareArrayGen } = wasmModule.exports
    return __getInt32Array(squareArrayGen(len))
}

module.exports = {
    ...wasmModule.exports,
    squareArrayGen
}
