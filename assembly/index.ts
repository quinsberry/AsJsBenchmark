// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
    return a + b
}

export function factorial(i: i32): i32 {
    return i === 0 ? 1 : i * factorial(i - 1)
}

export const Int32Array_ID = idof<Int32Array>()


export function squareArrayGen(len: i32): Int32Array {
    const arr = new Int32Array(len).map((_, i) => i)
    const result = new Int32Array(len)

    for (let i = 0; i < len; ++i) {
        const el = unchecked(arr[i])
        unchecked((result[i] = el * el))
    }
    return result
}