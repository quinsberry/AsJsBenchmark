const Benchmark = require('benchmark')
const wasm = require('.')

function runSuite(suite) {
    console.log('Running ', suite.name)

    suite
        .on('cycle', event => {
            console.log(String(event.target))
        })
        .on('complete', function () {
            console.log(this.filter('fastest').map('name') + ' won\n')
        })
        .run()
}

function addTest() {
    const addAs = wasm.add

    function addJs(a, b) {
        return a + b
    }


    const test = Benchmark.Suite('Add function')

    test
        .add('AssemblyScript', function () {
            addAs(10, 20)
        })
        .add('JavaScript', function () {
            addJs(10, 20)
        })
    runSuite(test)
}

function factorialTest() {
    const factorialAs = wasm.factorial

    function factorialJs(i) {
        return i === 0 ? 1 : i * factorialJs(i - 1)
    }


    const testSmall = Benchmark.Suite('Small number factorial')
    const testLarge = Benchmark.Suite('Large number factorial')

    testSmall
        .add('AssemblyScript', function () {
            factorialAs(3)
        })
        .add('JavaScript', function () {
            factorialJs(3)
        })
    runSuite(testSmall)

    testLarge
        .add('AssemblyScript', function () {
            factorialAs(30)
        })
        .add('JavaScript', function () {
            factorialJs(30)
        })
    runSuite(testLarge)
}

function squareArrayGenTest() {
    const squareArrayGenAs = wasm.squareArrayGen

    function squareArrayGenJs(len) {
        const arr = new Int32Array(len).map((_, i) => i)
        const result = new Int32Array(len)
        for (let i = 0; i < len; ++i) {
            const e = arr[i]
            result[i] = e * e
        }
        return result
    }


    const testSmall = Benchmark.Suite('Square small array')
    const testLarge = Benchmark.Suite('Square large array')

    testSmall
        .add('AssemblyScript', function () {
            squareArrayGenAs(20)
        })
        .add('JavaScript', function () {
            squareArrayGenJs(20)
        })
    runSuite(testSmall)

    testLarge
        .add('AssemblyScript', function () {
            squareArrayGenAs(200)
        })
        .add('JavaScript', function () {
            squareArrayGenJs(200)
        })
    runSuite(testLarge)
}

addTest()
factorialTest()
squareArrayGenTest()