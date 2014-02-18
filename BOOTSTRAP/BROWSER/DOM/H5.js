BOOTSTRAP.H5 = CLASS({

	preset : function() {'use strict';
		return H5;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			params : params
		});
	}
});
