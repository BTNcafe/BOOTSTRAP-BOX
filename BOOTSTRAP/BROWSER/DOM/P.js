BOOTSTRAP.P = CLASS({

	preset : function() {'use strict';
		return P;
	},

	init : function(inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
