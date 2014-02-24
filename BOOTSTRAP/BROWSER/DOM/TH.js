BOOTSTRAP.TH = CLASS({

	preset : function() {'use strict';
		return TH;
	},

	init : function(cls, inner, self, params) {'use strict';
		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});
	}
});
