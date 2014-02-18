BOOTSTRAP.APPLY = CLASS({

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
