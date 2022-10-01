/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/**
* Returns the expected value of a Rayleigh distribution.
*
* ## Notes
*
* -   If provided `σ < 0`, the function returns `NaN`.
*
* @param sigma - scale parameter
* @returns expected value
*
* @example
* var v = mean( 9.0 );
* // returns ~11.28
*
* @example
* var v = mean( 2.0 );
* // returns ~2.507
*
* @example
* var v = mean( -0.2 );
* // returns NaN
*
* @example
* var v = mean( NaN );
* // returns NaN
*/
declare function mean( sigma: number ): number;


// EXPORTS //

export = mean;
