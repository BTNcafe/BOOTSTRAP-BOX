BOOTSTRAP.INPUT = CLASS({

	preset : function() {'use strict';
		return INPUT;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
