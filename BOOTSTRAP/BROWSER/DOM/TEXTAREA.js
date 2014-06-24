BOOTSTRAP.TEXTAREA = CLASS({

	preset : function() {'use strict';
		return TEXTAREA;
	},

	init : function(inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
