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

						// dropdown toggle
						dropdownToggle,

						// close.
						close;

						body = B.APPLY({
							children : [B.DIV({
								c : 'navbar navbar-inverse navbar-fixed-top',
								children : [B.DIV({
									c : 'container',
									children : [B.DIV({
										c : 'navbar-header',
										children : [B.A({
											c : 'navbar-toggle',
											children : [B.SPAN({
												c : 'sr-only',
												childsren : ['Toggle navigation']
											}), B.SPAN({
												c : 'icon-bar'
											}), B.SPAN({
												c : 'icon-bar'
											}), B.SPAN({
												c : 'icon-bar'
											})]
										}), B.A({
											c : 'navbar-brand',
											children : ['BOOTSTRAP BOX Example']
										})]
									}), B.DIV({
										c : 'navbar-collapse collapse',
										children : [B.UL({
											c : 'nav navbar-nav',
											children : [B.LI({
												c : 'active',
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
											}), B.LI({
												c : 'dropdown',
												children : [ dropdownToggle = B.A({
													c : 'dropdown-toggle',
													data : {
														toggle : 'dropdown'
													},
													children : ['Dropdown ', B.SPAN({
														c : 'caret'
													})]
												}), B.UL({
													c : 'dropdown-menu',
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
													}), B.LI({
														c : 'divider'
													}), B.LI({
														c : 'dropdown-header',
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
							}), B.DIV({
								c : 'container',
								style : {
									paddingTop : 70,
									paddingBottom : 30
								},
								children : [B.DIV({
									c : 'jumbotron',
									children : [B.H1({
										children : ['Hello, world!']
									}), B.P({
										children : ['This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.']
									}), B.P({
										children : [B.A({
											c : 'btn btn-primary btn-lg',
											children : ['Learn more »']
										})]
									})]
								}),

								// buttons
								B.DIV({
									c : 'page-header',
									children : [B.H1({
										children : ['Buttons']
									})]
								}), B.P({
									children : [B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-lg btn-default',
										children : ['Default']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-lg btn-primary',
										children : ['Primary']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-lg btn-success',
										children : ['Success']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-lg btn-info',
										children : ['Info']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-lg btn-warning',
										children : ['Warning']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-lg btn-danger',
										children : ['Danger']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-lg btn-link',
										children : ['Link']
									})]
								}), B.P({
									children : [B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-default',
										children : ['Default']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-primary',
										children : ['Primary']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-success',
										children : ['Success']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-info',
										children : ['Info']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-warning',
										children : ['Warning']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-danger',
										children : ['Danger']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-link',
										children : ['Link']
									})]
								}), B.P({
									children : [B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-sm btn-default',
										children : ['Default']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-sm btn-primary',
										children : ['Primary']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-sm btn-success',
										children : ['Success']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-sm btn-info',
										children : ['Info']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-sm btn-warning',
										children : ['Warning']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-sm btn-danger',
										children : ['Danger']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-sm btn-link',
										children : ['Link']
									})]
								}), B.P({
									children : [B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-xs btn-default',
										children : ['Default']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-xs btn-primary',
										children : ['Primary']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-xs btn-success',
										children : ['Success']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-xs btn-info',
										children : ['Info']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-xs btn-warning',
										children : ['Warning']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn btn-xs btn-danger',
										children : ['Danger']
									}), B.A({
										style : {
											marginLeft : 5
										},
										c : 'btn-xs btn-link',
										children : ['Link']
									})]
								}),

								// thumbnails
								B.DIV({
									c : 'page-header',
									children : [B.H1({
										children : ['Thumbnails']
									})]
								}), B.IMG({
									c : 'img-thumbnail',
									src : UPPERCASE.R('logo.png')
								}),

								// alerts
								B.DIV({
									c : 'page-header',
									children : [B.H1({
										children : ['Alerts']
									})]
								}), B.DIV({
									c : 'alert alert-success',
									children : ['Well done! You successfully read this important alert message.']
								}), B.DIV({
									c : 'alert alert-info',
									children : ['Heads up! This alert needs your attention, but it\'s not super important.']
								}), B.DIV({
									c : 'alert alert-warning',
									children : ['Warning! Best check yo self, you\'re not looking too good.']
								}), B.DIV({
									c : 'alert alert-danger',
									children : ['Oh snap! Change a few things up and try submitting again.']
								}),

								// progree bars
								B.DIV({
									c : 'page-header',
									children : [B.H1({
										children : ['Progress bars']
									})]
								}), B.DIV({
									c : 'progress',
									children : [B.DIV({
										c : 'progress-bar',
										aria : {
											valuenow : 60,
											valuemin : 0,
											valuemax : 100
										},
										children : [B.SPAN({
											c : 'sr-only',
											children : ['60% Complete']
										})]
									})]
								}), B.DIV({
									c : 'page-header',
									children : [H1({
										children : ['List groups']
									})]
								}), B.DIV({
									c : 'row',
									children : [B.DIV({
										c : 'col-sm-4',
										children : [B.UL({
											c : 'list-group',
											children : [B.LI({
												c : 'list-group-item',
												children : ['Cras justo odio']
											}), B.LI({
												c : 'list-group-item',
												children : ['Dapibus ac facilisis in']
											}), B.LI({
												c : 'list-group-item',
												children : ['Morbi leo risus']
											}), B.LI({
												c : 'list-group-item',
												children : ['Porta ac consectetur ac']
											}), B.LI({
												c : 'list-group-item',
												children : ['Vestibulum at eros']
											})]
										})]
									}), B.DIV({
										c : 'col-sm-4',
										children : [B.DIV({
											c : 'list-group',
											children : [B.A({
												c : 'list-group-item active',
												children : ['Cras justo odio']
											}), B.A({
												c : 'list-group-item',
												children : ['Dapibus ac facilisis in']
											}), B.A({
												c : 'list-group-item',
												children : ['Morbi leo risus']
											}), B.A({
												c : 'list-group-item',
												children : ['Porta ac consectetur ac']
											}), B.A({
												c : 'list-group-item',
												children : ['Vestibulum at eros']
											})]
										})]
									}), B.DIV({
										c : 'col-sm-4',
										children : [B.DIV({
											c : 'list-group',
											children : [B.A({
												c : 'list-group-item active',
												children : [B.H4({
													c : 'list-group-item-heading',
													children : ['List group item heading']
												}), B.P({
													c : 'list-group-item-text',
													children : ['Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.']
												})]
											}), B.A({
												c : 'list-group-item',
												children : [B.H4({
													c : 'list-group-item-heading',
													children : ['List group item heading']
												}), B.P({
													c : 'list-group-item-text',
													children : ['Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.']
												})]
											}), B.A({
												c : 'list-group-item',
												children : [B.H4({
													c : 'list-group-item-heading',
													children : ['List group item heading']
												}), B.P({
													c : 'list-group-item-text',
													children : ['Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.']
												})]
											})]
										})]
									})]
								}), B.DIV({
									c : 'page-header',
									children : [B.H1({
										children : ['Panels']
									})]
								}), B.DIV({
									c : 'row',
									children : [B.DIV({
										c : 'col-sm-4',
										children : [B.DIV({
											c : 'panel panel-default',
											children : [B.DIV({
												c : 'panel-heading',
												children : [B.H3({
													c : 'panel-title',
													children : ['Panel title']
												})]
											}), B.DIV({
												c : 'panel-body',
												children : ['Panel content']
											})]
										}), B.DIV({
											c : 'panel panel-primary',
											children : [B.DIV({
												c : 'panel-heading',
												children : [B.H3({
													c : 'panel-title',
													children : ['Panel title']
												})]
											}), B.DIV({
												c : 'panel-body',
												children : ['Panel content']
											})]
										})]
									}), B.DIV({
										c : 'col-sm-4',
										children : [B.DIV({
											c : 'panel panel-success',
											children : [B.DIV({
												c : 'panel-heading',
												children : [B.H3({
													c : 'panel-title',
													children : ['Panel title']
												})]
											}), B.DIV({
												c : 'panel-body',
												children : ['Panel content']
											})]
										}), B.DIV({
											c : 'panel panel-info',
											children : [B.DIV({
												c : 'panel-heading',
												children : [B.H3({
													c : 'panel-title',
													children : ['Panel title']
												})]
											}), B.DIV({
												c : 'panel-body',
												children : ['Panel content']
											})]
										})]
									}), B.DIV({
										c : 'col-sm-4',
										children : [B.DIV({
											c : 'panel panel-warning',
											children : [B.DIV({
												c : 'panel-heading',
												children : [B.H3({
													c : 'panel-title',
													children : ['Panel title']
												})]
											}), B.DIV({
												c : 'panel-body',
												children : ['Panel content']
											})]
										}), B.DIV({
											c : 'panel panel-danger',
											children : [B.DIV({
												c : 'panel-heading',
												children : [B.H3({
													c : 'panel-title',
													children : ['Panel title']
												})]
											}), B.DIV({
												c : 'panel-body',
												children : ['Panel content']
											})]
										})]
									})]
								}), B.DIV({
									c : 'page-header',
									children : [B.H1({
										children : ['Wells']
									})]
								}), B.DIV({
									c : 'well',
									children : [P({
										children : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.']
									})]
								})]
							})]
						}).appendTo(BODY);

						$(dropdownToggle.getEl()).dropdown();

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
