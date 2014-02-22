BOOTSTRAP.IMG = CLASS({

	preset : function() {'use strict';
		return IMG;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			params : params
		});
	}
});
