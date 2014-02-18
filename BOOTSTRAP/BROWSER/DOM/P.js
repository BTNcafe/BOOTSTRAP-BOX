BOOTSTRAP.P = CLASS({

	preset : function() {'use strict';
		return P;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			params : params
		});
	}
});
