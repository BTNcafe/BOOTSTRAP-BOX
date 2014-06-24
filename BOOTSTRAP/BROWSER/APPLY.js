BOOTSTRAP.APPLY = CLASS(function(cls) {'use strict';

	var
	// link el
	linkEl = document.createElement('link');

	linkEl.setAttribute('rel', 'stylesheet');
	linkEl.setAttribute('type', 'text/css');
	linkEl.setAttribute('href', '/BOOTSTRAP/R/bootstrap.css');

	document.getElementsByTagName('head')[0].appendChild(linkEl);

	return {

		preset : function() {'use strict';
			return DIV;
		},

		params : function() {'use strict';
			return {
				style : {
					backgroundColor : '#fff',
					color : '#000'
				}
			};
		},

		init : function(inner, self) {'use strict';

			inner.setAttr({
				name : 'class',
				value : 'bootstrap'
			});
		}
	};
});
