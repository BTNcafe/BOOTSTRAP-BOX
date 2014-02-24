BOOTSTRAP.OPTION = CLASS({

	preset : function() {'use strict';
		return OPTION;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
