BOOTSTRAP.SELECT = CLASS({

	preset : function() {'use strict';
		return SELECT;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			params : params
		});
	}
});
