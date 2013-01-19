var
  markdown = require( 'marked' ),
  jade     = require( 'jade' ).compile,
  hljs = require('highlight.js');

markdown.setOptions({
  gfm: true,
  pedantic: false,
  sanitize: true,
  highlight: function(code, lang) {
    var value;
    if (code && lang) {
      try {
        return hljs.highlight(lang, code).value;
      } catch (ex){
        return code
      }
    }
    else {
      return code;
    }
  }
})

module.exports = {
  jade : {
    ext : 'jade',
    fn : function ( string ) {
      return jade( string )();
    }
  },
  markdown : {
    ext : [ 'markdown', 'md' ],
    fn : function ( string ) {
      return markdown( string );
    }
  }
};
