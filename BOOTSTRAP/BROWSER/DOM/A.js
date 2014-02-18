BOOTSTRAP.A = CLASS({

	preset : function() {'use strict';
		return A;
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.style

		var
		// style
		style = params.style;

		BOOTSTRAP.inject({
			inner : inner,
			params : params
		});

		if (style === undefined || style.textDecoration === undefined) {
			self.addStyle({
				textDecoration : 'none'
			});
		}
	}
});
