BOOTSTRAP.LABEL = CLASS({

	preset : function() {'use strict';
		return DOM;
	},

	params : function() {'use strict';
		return {
			tag : 'label'
		};
	},

	init : function(cls, inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.f

		var
		// f
		f = params.f;

		BOOTSTRAP.inject({
			inner : inner,
			self : self,
			params : params
		});

		inner.setAttr({
			name : 'for',
			value : f
		});
	}
});
