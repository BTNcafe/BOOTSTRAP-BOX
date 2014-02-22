BOOTSTRAP.TD = CLASS({

	preset : function() {'use strict';
		return TD;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			params : params
		});
	}
});
