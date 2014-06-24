BOOTSTRAP.SPAN = CLASS({

	preset : function() {'use strict';
		return SPAN;
	},

	init : function(inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
