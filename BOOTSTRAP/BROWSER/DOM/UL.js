BOOTSTRAP.UL = CLASS({

	preset : function() {'use strict';
		return UL;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
