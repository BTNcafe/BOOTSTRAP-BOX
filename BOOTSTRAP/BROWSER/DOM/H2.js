BOOTSTRAP.H2 = CLASS({

	preset : function() {'use strict';
		return H2;
	},

	init : function(inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
