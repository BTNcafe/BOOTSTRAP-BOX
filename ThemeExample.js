// http://getbootstrap.com/examples/theme/

require('./UPPERCASE_ONE/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUseDB : true
	},
	BROWSER_CONFIG : {
		MAIN : function(ONE) {

			ONE.MATCH_VIEW({
				uris : [''],
				target : CLASS({

					preset : function() {'use strict';
						return VIEW;
					},

					init : function(cls, inner, self) {'use strict';

						var
						//IMPORT: BOOTSTRAP
						B = BOOTSTRAP,

						// body
						body,

						// close.
						close;

						body = B.APPLY({
							children : [B.DIV({
								c : 'navbar navbar-inverse navbar-fixed-top',
								children : [B.CONTAINER({
									children : [B.NAVBAR_HEADER({
										children : [B.NAVBAR_TOGGLE({
											children : [B.SR_ONLY({
												childsren : ['Toggle navigation']
											}), B.ICON_BAR(), B.ICON_BAR(), B.ICON_BAR()]
										}), B.NAVBAR_BRAND({
											children : ['Bootstrap theme']
										})]
									}), B.DIV({
										c : 'collapse navbar-collapse',
										children : [B.UL({
											c : 'nav navbar-nav',
											children : [B.ACTIVE({
												children : [B.A({
													children : ['Home']
												})]
											}), B.LI({
												children : [B.A({
													children : ['About']
												})]
											}), B.LI({
												children : [B.A({
													children : ['Contact']
												})]
											}), B.DROPDOWN({
												children : [B.DROPDOWN_TOGGLE({
													children : ['Dropdown ', B.CARET()]
												}), B.DROPDOWN_MENU({
													children : [B.LI({
														children : [B.A({
															children : ['Action']
														})]
													}), B.LI({
														children : [B.A({
															children : ['Another action']
														})]
													}), B.LI({
														children : [B.A({
															children : ['Something else here']
														})]
													}), B.DIVIDER(), B.DROPDOWN_HEADER({
														children : ['Nav header']
													}), B.LI({
														children : [B.A({
															children : ['Separated link']
														})]
													}), B.LI({
														children : [B.A({
															children : ['One more separated link']
														})]
													})]
												})]
											})]
										})]
									})]
								})]
							}), B.CONTAINER({
								style : {
									paddingTop : 50
								},
								children : [B.DIV({
									style : {
										padding : '40px 15px',
										textAlign : 'center'
									},
									children : [B.H1({
										children : ['Bootstrap starter template']
									}), B.LEAD({
										children : ['Use this document as a way to quickly start any new project.\nAll you get is this text and a mostly barebones HTML document.']
									})]
								})]
							})]
						}).appendTo(BODY);

						//OVERRIDE: self.close
						self.close = close = function(params) {
							body.remove();
						};
					}
				})
			});
		}
	}
});
