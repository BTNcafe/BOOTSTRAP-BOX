BOOTSTRAP.DIV = CLASS({

	preset : function() {'use strict';
		return DIV;
	},

	init : function(inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
