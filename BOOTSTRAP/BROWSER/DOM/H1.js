BOOTSTRAP.H1 = CLASS({

	preset : function() {'use strict';
		return H1;
	},

	init : function(inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
