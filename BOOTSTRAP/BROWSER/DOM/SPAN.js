BOOTSTRAP.SPAN = CLASS({

	preset : function() {'use strict';
		return SPAN;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			params : params
		});
	}
});
