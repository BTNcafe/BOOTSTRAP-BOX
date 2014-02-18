BOOTSTRAP.LI = CLASS({

	preset : function() {'use strict';
		return LI;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			params : params
		});
	}
});
