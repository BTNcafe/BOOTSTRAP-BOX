BOOTSTRAP.TR = CLASS({

	preset : function() {'use strict';
		return TR;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
