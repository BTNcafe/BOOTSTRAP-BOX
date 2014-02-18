BOOTSTRAP.DOM = CLASS({

	preset : function() {'use strict';
		return DOM;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			params : params
		});
	}
});
