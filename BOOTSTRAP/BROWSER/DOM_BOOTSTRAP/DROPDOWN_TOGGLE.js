BOOTSTRAP.DROPDOWN_TOGGLE = CLASS({

	preset : function() {'use strict';
		return BOOTSTRAP.A;
	},

	params : function() {'use strict';
		return {
			c : 'dropdown-toggle',
			data : {
				toggle : 'dropdown'
			}
		};
	},

	init : function(cls, inner, self) {'use strict';
		$(self.getEl()).dropdown();
	}
});
