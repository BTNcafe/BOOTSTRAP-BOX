BOOTSTRAP.H6 = CLASS({

	preset : function() {'use strict';
		return H6;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
