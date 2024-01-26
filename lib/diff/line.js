/*istanbul ignore start*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffLines = diffLines;
exports.diffTrimmedLines = diffTrimmedLines;
exports.lineDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(require("./base"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_params = require("../util/params")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var lineDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.lineDiff = lineDiff;

/*istanbul ignore end*/
lineDiff.tokenize = function (value) {
  if (this.options.stripTrailingCr) {
    // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
    value = value.replace(/\r\n/g, '\n');
  }

  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  if (this.options.ignoreWhitespace) {
    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];

      if (i % 2 && !this.options.newlineIsToken) {
        var last = retLines[retLines.length - 1];
        last.key += line;
        last.payload += line;
      } else {
        retLines.push({
          key: line.trim(),
          payload: line
        });
      }
    }
  } else {
    for (var _i = 0; _i < linesAndNewlines.length; _i++) {
      var _line = linesAndNewlines[_i];

      if (_i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += _line;
      } else {
        retLines.push(_line);
      }
    }
  }

  return retLines;
};

lineDiff.removeEmpty = function (array) {
  if (this.options.ignoreWhitespace) {
    return array.filter(function (v)
    /*istanbul ignore start*/
    {
      return (
        /*istanbul ignore end*/
        v.key
      );
    });
  }

  return array.filter(function (v)
  /*istanbul ignore start*/
  {
    return (
      /*istanbul ignore end*/
      v
    );
  });
};

lineDiff.equals = function (left, right) {
  if (this.options.ignoreWhitespace) {
    // Special case handle for when one terminal is ignored (i.e. whitespace).
    // For this case we merge the terminal into the prior string and drop the change.
    // This is only available for string mode.
    if (left === '') {
      return (
        /*istanbul ignore start*/
        _base
        /*istanbul ignore end*/
        [
        /*istanbul ignore start*/
        "default"
        /*istanbul ignore end*/
        ].prototype.equals.call(this, left, right.trim())
      );
    }

    return (
      /*istanbul ignore start*/
      _base
      /*istanbul ignore end*/
      [
      /*istanbul ignore start*/
      "default"
      /*istanbul ignore end*/
      ].prototype.equals.call(this, left.key, right.key)
    );
  }

  return (
    /*istanbul ignore start*/
    _base
    /*istanbul ignore end*/
    [
    /*istanbul ignore start*/
    "default"
    /*istanbul ignore end*/
    ].prototype.equals.call(this, left, right)
  );
};

lineDiff.join = function (result) {
  if (this.options.ignoreWhitespace) {
    return result.map(function (v)
    /*istanbul ignore start*/
    {
      return (
        /*istanbul ignore end*/
        v.payload
      );
    }).join('');
  }

  return result.join('');
};

function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}

function diffTrimmedLines(oldStr, newStr, callback) {
  var options =
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _params
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  generateOptions)
  /*istanbul ignore end*/
  (callback, {
    ignoreWhitespace: true
  });
  return lineDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOlsibGluZURpZmYiLCJEaWZmIiwidG9rZW5pemUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzdHJpcFRyYWlsaW5nQ3IiLCJyZXBsYWNlIiwicmV0TGluZXMiLCJsaW5lc0FuZE5ld2xpbmVzIiwic3BsaXQiLCJsZW5ndGgiLCJwb3AiLCJpZ25vcmVXaGl0ZXNwYWNlIiwiaSIsImxpbmUiLCJuZXdsaW5lSXNUb2tlbiIsImxhc3QiLCJrZXkiLCJwYXlsb2FkIiwicHVzaCIsInRyaW0iLCJyZW1vdmVFbXB0eSIsImFycmF5IiwiZmlsdGVyIiwidiIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsInByb3RvdHlwZSIsImNhbGwiLCJqb2luIiwicmVzdWx0IiwibWFwIiwiZGlmZkxpbmVzIiwib2xkU3RyIiwibmV3U3RyIiwiY2FsbGJhY2siLCJkaWZmIiwiZGlmZlRyaW1tZWRMaW5lcyIsImdlbmVyYXRlT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBRU8sSUFBTUEsUUFBUSxHQUFHO0FBQUlDO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLENBQUosRUFBakI7Ozs7OztBQUNQRCxRQUFRLENBQUNFLFFBQVQsR0FBb0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNsQyxNQUFHLEtBQUtDLE9BQUwsQ0FBYUMsZUFBaEIsRUFBaUM7QUFDL0I7QUFDQUYsSUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNHLE9BQU4sQ0FBYyxPQUFkLEVBQXVCLElBQXZCLENBQVI7QUFDRDs7QUFFRCxNQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUFBLE1BQ0lDLGdCQUFnQixHQUFHTCxLQUFLLENBQUNNLEtBQU4sQ0FBWSxXQUFaLENBRHZCLENBTmtDLENBU2xDOztBQUNBLE1BQUksQ0FBQ0QsZ0JBQWdC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O1xuaW1wb3J0IHtnZW5lcmF0ZU9wdGlvbnN9IGZyb20gJy4uL3V0aWwvcGFyYW1zJztcblxuZXhwb3J0IGNvbnN0IGxpbmVEaWZmID0gbmV3IERpZmYoKTtcbmxpbmVEaWZmLnRva2VuaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYodGhpcy5vcHRpb25zLnN0cmlwVHJhaWxpbmdDcikge1xuICAgIC8vIHJlbW92ZSBvbmUgXFxyIGJlZm9yZSBcXG4gdG8gbWF0Y2ggR05VIGRpZmYncyAtLXN0cmlwLXRyYWlsaW5nLWNyIGJlaGF2aW9yXG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXHJcXG4vZywgJ1xcbicpO1xuICB9XG5cbiAgbGV0IHJldExpbmVzID0gW10sXG4gICAgICBsaW5lc0FuZE5ld2xpbmVzID0gdmFsdWUuc3BsaXQoLyhcXG58XFxyXFxuKS8pO1xuXG4gIC8vIElnbm9yZSB0aGUgZmluYWwgZW1wdHkgdG9rZW4gdGhhdCBvY2N1cnMgaWYgdGhlIHN0cmluZyBlbmRzIHdpdGggYSBuZXcgbGluZVxuICBpZiAoIWxpbmVzQW5kTmV3bGluZXNbbGluZXNBbmROZXdsaW5lcy5sZW5ndGggLSAxXSkge1xuICAgIGxpbmVzQW5kTmV3bGluZXMucG9wKCk7XG4gIH1cblxuICAvLyBNZXJnZSB0aGUgY29udGVudCBhbmQgbGluZSBzZXBhcmF0b3JzIGludG8gc2luZ2xlIHRva2Vuc1xuICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzQW5kTmV3bGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgICAgbGV0IGxhc3QgPSByZXRMaW5lc1tyZXRMaW5lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGFzdC5rZXkgKz0gbGluZTtcbiAgICAgICAgbGFzdC5wYXlsb2FkICs9IGxpbmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXRMaW5lcy5wdXNoKHsga2V5OiBsaW5lLnRyaW0oKSwgcGF5bG9hZDogbGluZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IGxpbmVzQW5kTmV3bGluZXNbaV07XG5cbiAgICAgIGlmIChpICUgMiAmJiAhdGhpcy5vcHRpb25zLm5ld2xpbmVJc1Rva2VuKSB7XG4gICAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRMaW5lcztcbn07XG5cbmxpbmVEaWZmLnJlbW92ZUVtcHR5ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVXaGl0ZXNwYWNlKSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcih2ID0+IHYua2V5KTtcbiAgfVxuICByZXR1cm4gYXJyYXkuZmlsdGVyKHYgPT4gdik7XG59O1xuXG5saW5lRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2UgaGFuZGxlIGZvciB3aGVuIG9uZSB0ZXJtaW5hbCBpcyBpZ25vcmVkIChpLmUuIHdoaXRlc3BhY2UpLlxuICAgIC8vIEZvciB0aGlzIGNhc2Ugd2UgbWVyZ2UgdGhlIHRlcm1pbmFsIGludG8gdGhlIHByaW9yIHN0cmluZyBhbmQgZHJvcCB0aGUgY2hhbmdlLlxuICAgIC8vIFRoaXMgaXMgb25seSBhdmFpbGFibGUgZm9yIHN0cmluZyBtb2RlLlxuICAgIGlmIChsZWZ0ID09PSAnJykge1xuICAgICAgcmV0dXJuIERpZmYucHJvdG90eXBlLmVxdWFscy5jYWxsKHRoaXMsIGxlZnQsIHJpZ2h0LnRyaW0oKSk7XG4gICAgfVxuICAgIHJldHVybiBEaWZmLnByb3RvdHlwZS5lcXVhbHMuY2FsbCh0aGlzLCBsZWZ0LmtleSwgcmlnaHQua2V5KTtcbiAgfVxuICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzLmNhbGwodGhpcywgbGVmdCwgcmlnaHQpO1xufTtcblxubGluZURpZmYuam9pbiA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICByZXR1cm4gcmVzdWx0Lm1hcCh2ID0+IHYucGF5bG9hZCkuam9pbignJyk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmVHJpbW1lZExpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICBsZXQgb3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyhjYWxsYmFjaywge2lnbm9yZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xufVxuIl19