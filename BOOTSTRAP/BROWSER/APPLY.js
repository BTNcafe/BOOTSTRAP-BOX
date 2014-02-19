BOOTSTRAP.APPLY = CLASS({

	statics : function(cls) {'use strict';

		var
		// link el
		linkEl = document.createElement('link');

		linkEl.setAttribute('rel', 'stylesheet');
		linkEl.setAttribute('type', 'text/css');
		linkEl.setAttribute('href', '/BOOTSTRAP/R/bootstrap.css');

		document.getElementsByTagName('head')[0].appendChild(linkEl);
	},

	preset : function() {'use strict';
		return DIV;
	},

	init : function(cls, inner, self) {'use strict';

		inner.setAttr({
			name : 'class',
			value : 'bootstrap'
		});
	}
});
