NUS Matric Plugin
==========

A jQuery plugin that checks the validity of an NUS matriculation number based on the check code.
http://lauweijie.github.io/nus-matric/

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.nus-matric.js"></script>
```

## Usage

Check if matric number is valid:

```javascript
$.nusmatric.isValid('A0123456J'); // => true
```

Get check code of matric number: 

```javascript
$.nusmatric.getCheckCode('A0123456'); // => 'J'
```

Get information about input string:

```javascript
// Returns 1 for a complete matric number (doesn't verifies the check code)
$.nusmatric.getFormatType('A0123456X');
$.nusmatric.getFormatType('U012345X');

// Returns 2 for matric number without the check code
$.nusmatric.getFormatType('A0123456');
$.nusmatric.getFormatType('U012345');

// Returns -1 for a partially valid input
$.nusmatric.getFormatType('A012');
$.nusmatric.getFormatType('A01234');

// Returns 0 for an invalid format
$.nusmatric.getFormatType('A123X');
$.nusmatric.getFormatType('UU123');
```

## Licence

The MIT License (MIT)

Copyright (c) 2013 Jonathan Lau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.