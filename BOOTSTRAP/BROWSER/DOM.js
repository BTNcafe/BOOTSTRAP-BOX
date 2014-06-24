BOOTSTRAP.DOM = CLASS({

	preset : function() {'use strict';
		return DOM;
	},

	init : function(inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
