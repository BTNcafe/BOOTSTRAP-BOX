BOOTSTRAP.LI = CLASS({

	preset : function() {'use strict';
		return LI;
	},

	init : function(inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
