BOOTSTRAP.FORM = CLASS({

    preset : function() {'use strict';
        return FORM;
    },

    init : function(inner, self, params) {'use strict';
        BOOTSTRAP.inject({
            inner : inner,
            self : self,
            params : params
        });
    }
});
