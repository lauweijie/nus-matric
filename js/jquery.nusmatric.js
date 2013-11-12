/**
 * jQuery NUS Matric Plugin v1.0.0
 * https://github.com/lauweijie/nus-matric
 *
 * Copyright (C) 2013 Jonathan Lau
 * Released under the MIT license
 */

(function ( $ ) {

  $.nusmatric = {

    // Get information about input string
    getFormatType: function( matric ) {
      if( /^(A0[0-9]{6}|U0[0-9]{5})[A-Z]$/i.test(matric) ) {
        // Complete matric number (A1234567X)
        return 1;
      } else if ( /^(A0[0-9]{6}|U0[0-9]{5})$/i.test(matric) ) {
        // Matric number without check code (A1234567)
        return 2;
      } else if ( /^([A|U]|A0[0-9]{0,5}|U0[0-9]{0,4})?$/i.test(matric) ) {
        // Partial valid input (A012)
        return -1;
      } else {
        // Invalid input
        return 0;
      }
    },

    // Get check code of matric number
    getCheckCode: function( matric ) {
      if ( $.type( matric ) !== "string" ) {
        throw 'Object is not a string';
      }
      var matric_num = /[0-9]+/.exec(matric)[0];
      switch ( matric.charAt(0).toUpperCase() ) {
        case 'A':
          var matric_sum = 0;
          var weights = [1, 1, 1, 1, 1, 1];
          var letter_map = ['Y', 'X', 'W', 'U', 'R', 'N', 'M', 'L', 'J', 'H', 'E', 'A', 'B'];
          break;
        case 'U':
          var matric_sum = 0;
          var weights = [12, 10, 12, 11, 6];
          var letter_map = ['Y', 'B', 'A', 'E', 'H', 'J', 'L', 'M', 'N', 'R', 'U', 'W', 'X'];
          break;
        default:
          return false;
      }
      for( var i = 0; i < weights.length; i++ ) {
        matric_sum += parseInt(matric_num.charAt( matric_num.length - weights.length + i )) * weights[i];
      }
      matric_sum %= 13;
      return letter_map[matric_sum];
    },

    // Check if matric number is valid
    isValid: function( matric ) {
      return ( this.getFormatType(matric) === 1 && this.getCheckCode(matric) == matric.charAt( matric.length - 1 ) );
    }

  };

}( jQuery ));