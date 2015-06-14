;(function ($, document) {
    var keys = {"0":48,"1":49,"2":50,"3":51,"4":52,"5":53,"6":54,"7":55,"8":56,"9":57,backspace:8,enter:13,space:32,esc:27,"num0":96,"num1":97,"num2":98,"num3":99,"num4":100,"num5":101,"num6":102,"num7":103,"num8":104,"num9":105,"multiply":106,"add":107,"subtract":109,"num.":110,"divide":111,};
    $.key = $.fn.key = function (code, fn) {
        if (!(this instanceof $)) { return $.fn.key.apply($(document), arguments); }

        var i = 0,
            cache = [];

        return this.on({
            keydown: function (e) {
                var key = e.which;
                if (cache[cache.length - 1] === key) return;
                cache.push(key);

                i = key === code[i] || ( typeof code === 'string' && key === keys[code.split("+")[i]] ) ? i + 1 : 0;
                if ( i === code.length || ( typeof code === 'string' && code.split('+').length === i ) ) {
                    fn(e, cache);
                    i = 0;
                }
            },
            keyup: function () {
                i = 0;
                cache = [];
            }
        });
    };
})(jQuery, document);