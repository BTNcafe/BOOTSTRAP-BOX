BOOTSTRAP.H2 = CLASS({

	preset : function() {'use strict';
		return H2;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
