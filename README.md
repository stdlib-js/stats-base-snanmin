<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# snanmin

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the minimum value of a single-precision floating-point strided array, ignoring `NaN` values.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-snanmin
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var snanmin = require( '@stdlib/stats-base-snanmin' );
```

#### snanmin( N, x, strideX )

Computes the minimum value of a single-precision floating-point strided array `x`, ignoring `NaN` values.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = snanmin( x.length, x, 1 );
// returns -2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the minimum value of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, -7.0, -2.0, 4.0, 3.0, NaN, NaN ] );

var v = snanmin( 4, x, 2 );
// returns -7.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x0 = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, NaN, NaN ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = snanmin( 4, x1, 2 );
// returns -2.0
```

#### snanmin.ndarray( N, x, strideX, offsetX )

Computes the minimum value of a single-precision floating-point strided array, ignoring `NaN` values and using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );

var v = snanmin.ndarray( x.length, x, 1, 0 );
// returns -2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the minimum value for every other element in `x` starting from the second element

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 2.0, 1.0, -2.0, -2.0, 3.0, 4.0, NaN, NaN ] );

var v = snanmin.ndarray( 4, x, 2, 1 );
// returns -2.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var snanmin = require( '@stdlib/stats-base-snanmin' );

var x = discreteUniform( 10, -50, 50, {
    'dtype': 'float32'
});
console.log( x );

var v = snanmin( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/snanmin.h"
```

#### stdlib_strided_snanmin( N, \*X, strideX )

Computes the minimum value of a single-precision floating-point strided array `x`, ignoring `NaN` values.

```c
const float x[] = { 1.0f, -2.0f, 0.0f/0.0f, -4.0f };

float v = stdlib_strided_snanmin( 4, x, 1 );
// returns -4.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
float stdlib_strided_snanmin( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_snanmin_ndarray( N, \*X, strideX, offsetX )

Computes the minimum value of a single-precision floating-point strided array, ignoring `NaN` values and using alternative indexing semantics.

```c
const float x[] = { 1.0f, -2.0f, 0.0f/0.0f, -4.0f };

float v = stdlib_strided_snanmin_ndarray( 4, x, 1, 0 );
// returns -4.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
float stdlib_strided_snanmin_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/snanmin.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f, 0.0f/0.0f, 0.0f/0.0f };

    // Specify the number of elements:
    const int N = 5;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the minimum value:
    float v = stdlib_strided_snanmin( N, x, strideX );

    // Print the result:
    printf( "min: %f\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-base/dnanmin`][@stdlib/stats/base/dnanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/nanmin`][@stdlib/stats/base/nanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats-base/smin`][@stdlib/stats/base/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats-base/snanmax`][@stdlib/stats/base/snanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a single-precision floating-point strided array, ignoring NaN values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-snanmin.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-snanmin

[test-image]: https://github.com/stdlib-js/stats-base-snanmin/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-snanmin/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-snanmin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-snanmin?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-snanmin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-snanmin/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-snanmin/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-snanmin/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-snanmin/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-snanmin/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-snanmin/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-snanmin/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-snanmin/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-snanmin/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dnanmin]: https://github.com/stdlib-js/stats-base-dnanmin

[@stdlib/stats/base/nanmin]: https://github.com/stdlib-js/stats-base-nanmin

[@stdlib/stats/base/smin]: https://github.com/stdlib-js/stats-base-smin

[@stdlib/stats/base/snanmax]: https://github.com/stdlib-js/stats-base-snanmax

<!-- </related-links> -->

</section>

<!-- /.links -->
