BOOTSTRAP.inject = METHOD({

	run : function(m, params) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.inner
		//REQUIRED: params.self
		//REQUIRED: params.params
		//OPTIONAL: params.params.cls
		//OPTIONAL: params.params.data

		var
		// inner
		inner = params.inner,

		// self
		self = params.self,

		// params2
		params2 = params.params,

		// cls
		cls = params2 === undefined ? undefined : params2.cls,

		// data
		data = params2 === undefined ? undefined : params2.data,

		// add cls.
		addCls,

		// remove cls.
		removeCls;

		self.addCls = addCls = function(cls) {

			inner.setAttr({
				name : 'class',
				value : self.getEl().className + ' ' + cls
			});
		};

		self.removeCls = removeCls = function(cls) {

			var
			// origin
			origin = self.getEl().className;

			inner.setAttr({
				name : 'class',
				value : origin.split(cls).join('')
			});
		};

		if (cls !== undefined) {
			addCls(cls);
		}

		if (data !== undefined) {
			EACH(data, function(value, name) {
				inner.setAttr({
					name : 'data-' + name,
					value : value
				});
			});
		}
	}
});
