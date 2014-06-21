require('./UPPERCASE_ONE/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true
	},
	NODE_CONFIG : {
		isNotUsingDB : true
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
							c : [B.DIV({
								cls : 'navbar navbar-inverse navbar-fixed-top',
								c : [B.DIV({
									cls : 'container',
									c : [B.DIV({
										cls : 'navbar-header',
										c : [B.A({
											cls : 'navbar-toggle',
											c : [B.SPAN({
												cls : 'sr-only',
												childsren : ['Toggle navigation']
											}), B.SPAN({
												cls : 'icon-bar'
											}), B.SPAN({
												cls : 'icon-bar'
											}), B.SPAN({
												cls : 'icon-bar'
											})]
										}), B.A({
											cls : 'navbar-brand',
											c : ['BOOTSTRAP BOX Example']
										})]
									}), B.DIV({
										cls : 'navbar-collapse collapse',
										c : [B.UL({
											cls : 'nav navbar-nav',
											c : [B.LI({
												cls : 'active',
												c : [B.A({
													c : ['Home']
												})]
											}), B.LI({
												c : [B.A({
													c : ['About']
												})]
											}), B.LI({
												c : [B.A({
													c : ['Contact']
												})]
											}), B.LI({
												cls : 'dropdown',
												c : [ dropdownToggle = B.A({
													cls : 'dropdown-toggle',
													data : {
														toggle : 'dropdown'
													},
													c : ['Dropdown ', B.SPAN({
														cls : 'caret'
													})]
												}), B.UL({
													cls : 'dropdown-menu',
													c : [B.LI({
														c : [B.A({
															c : ['Action']
														})]
													}), B.LI({
														c : [B.A({
															c : ['Another action']
														})]
													}), B.LI({
														c : [B.A({
															c : ['Something else here']
														})]
													}), B.LI({
														cls : 'divider'
													}), B.LI({
														cls : 'dropdown-header',
														c : ['Nav header']
													}), B.LI({
														c : [B.A({
															c : ['Separated link']
														})]
													}), B.LI({
														c : [B.A({
															c : ['One more separated link']
														})]
													})]
												})]
											})]
										})]
									})]
								})]
							}), B.DIV({
								cls : 'container',
								style : {
									paddingTop : 70,
									paddingBottom : 30
								},
								c : [B.DIV({
									cls : 'jumbotron',
									c : [B.H1({
										c : ['Hello, world!']
									}), B.P({
										c : ['This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.']
									}), B.P({
										c : [B.A({
											cls : 'btn btn-primary btn-lg',
											c : ['Learn more »']
										})]
									})]
								}),

								// buttons
								B.DIV({
									cls : 'page-header',
									c : [B.H1({
										c : ['Buttons']
									})]
								}), B.P({
									c : [B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-lg btn-default',
										c : ['Default']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-lg btn-primary',
										c : ['Primary']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-lg btn-success',
										c : ['Success']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-lg btn-info',
										c : ['Info']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-lg btn-warning',
										c : ['Warning']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-lg btn-danger',
										c : ['Danger']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-lg btn-link',
										c : ['Link']
									})]
								}), B.P({
									c : [B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-default',
										c : ['Default']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-primary',
										c : ['Primary']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-success',
										c : ['Success']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-info',
										c : ['Info']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-warning',
										c : ['Warning']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-danger',
										c : ['Danger']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-link',
										c : ['Link']
									})]
								}), B.P({
									c : [B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-sm btn-default',
										c : ['Default']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-sm btn-primary',
										c : ['Primary']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-sm btn-success',
										c : ['Success']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-sm btn-info',
										c : ['Info']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-sm btn-warning',
										c : ['Warning']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-sm btn-danger',
										c : ['Danger']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-sm btn-link',
										c : ['Link']
									})]
								}), B.P({
									c : [B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-xs btn-default',
										c : ['Default']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-xs btn-primary',
										c : ['Primary']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-xs btn-success',
										c : ['Success']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-xs btn-info',
										c : ['Info']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-xs btn-warning',
										c : ['Warning']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn btn-xs btn-danger',
										c : ['Danger']
									}), B.A({
										style : {
											marginLeft : 5
										},
										cls : 'btn-xs btn-link',
										c : ['Link']
									})]
								}),

								// thumbnails
								B.DIV({
									cls : 'page-header',
									c : [B.H1({
										c : ['Thumbnails']
									})]
								}), B.IMG({
									cls : 'img-thumbnail',
									src : UPPERCASE.IO.R('logo.png')
								}),

								// alerts
								B.DIV({
									cls : 'page-header',
									c : [B.H1({
										c : ['Alerts']
									})]
								}), B.DIV({
									cls : 'alert alert-success',
									c : ['Well done! You successfully read this important alert message.']
								}), B.DIV({
									cls : 'alert alert-info',
									c : ['Heads up! This alert needs your attention, but it\'s not super important.']
								}), B.DIV({
									cls : 'alert alert-warning',
									c : ['Warning! Best check yo self, you\'re not looking too good.']
								}), B.DIV({
									cls : 'alert alert-danger',
									c : ['Oh snap! Change a few things up and try submitting again.']
								}),

								// progree bars
								B.DIV({
									cls : 'page-header',
									c : [B.H1({
										c : ['Progress bars']
									})]
								}), B.DIV({
									cls : 'progress',
									c : [B.DIV({
										cls : 'progress-bar',
										aria : {
											valuenow : 60,
											valuemin : 0,
											valuemax : 100
										},
										c : [B.SPAN({
											cls : 'sr-only',
											c : ['60% Complete']
										})]
									})]
								}), B.DIV({
									cls : 'page-header',
									c : [H1({
										c : ['List groups']
									})]
								}), B.DIV({
									cls : 'row',
									c : [B.DIV({
										cls : 'col-sm-4',
										c : [B.UL({
											cls : 'list-group',
											c : [B.LI({
												cls : 'list-group-item',
												c : ['Cras justo odio']
											}), B.LI({
												cls : 'list-group-item',
												c : ['Dapibus ac facilisis in']
											}), B.LI({
												cls : 'list-group-item',
												c : ['Morbi leo risus']
											}), B.LI({
												cls : 'list-group-item',
												c : ['Porta ac consectetur ac']
											}), B.LI({
												cls : 'list-group-item',
												c : ['Vestibulum at eros']
											})]
										})]
									}), B.DIV({
										cls : 'col-sm-4',
										c : [B.DIV({
											cls : 'list-group',
											c : [B.A({
												cls : 'list-group-item active',
												c : ['Cras justo odio']
											}), B.A({
												cls : 'list-group-item',
												c : ['Dapibus ac facilisis in']
											}), B.A({
												cls : 'list-group-item',
												c : ['Morbi leo risus']
											}), B.A({
												cls : 'list-group-item',
												c : ['Porta ac consectetur ac']
											}), B.A({
												cls : 'list-group-item',
												c : ['Vestibulum at eros']
											})]
										})]
									}), B.DIV({
										cls : 'col-sm-4',
										c : [B.DIV({
											cls : 'list-group',
											c : [B.A({
												cls : 'list-group-item active',
												c : [B.H4({
													cls : 'list-group-item-heading',
													c : ['List group item heading']
												}), B.P({
													cls : 'list-group-item-text',
													c : ['Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.']
												})]
											}), B.A({
												cls : 'list-group-item',
												c : [B.H4({
													cls : 'list-group-item-heading',
													c : ['List group item heading']
												}), B.P({
													cls : 'list-group-item-text',
													c : ['Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.']
												})]
											}), B.A({
												cls : 'list-group-item',
												c : [B.H4({
													cls : 'list-group-item-heading',
													c : ['List group item heading']
												}), B.P({
													cls : 'list-group-item-text',
													c : ['Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.']
												})]
											})]
										})]
									})]
								}), B.DIV({
									cls : 'page-header',
									c : [B.H1({
										c : ['Panels']
									})]
								}), B.DIV({
									cls : 'row',
									c : [B.DIV({
										cls : 'col-sm-4',
										c : [B.DIV({
											cls : 'panel panel-default',
											c : [B.DIV({
												cls : 'panel-heading',
												c : [B.H3({
													cls : 'panel-title',
													c : ['Panel title']
												})]
											}), B.DIV({
												cls : 'panel-body',
												c : ['Panel content']
											})]
										}), B.DIV({
											cls : 'panel panel-primary',
											c : [B.DIV({
												cls : 'panel-heading',
												c : [B.H3({
													cls : 'panel-title',
													c : ['Panel title']
												})]
											}), B.DIV({
												cls : 'panel-body',
												c : ['Panel content']
											})]
										})]
									}), B.DIV({
										cls : 'col-sm-4',
										c : [B.DIV({
											cls : 'panel panel-success',
											c : [B.DIV({
												cls : 'panel-heading',
												c : [B.H3({
													cls : 'panel-title',
													c : ['Panel title']
												})]
											}), B.DIV({
												cls : 'panel-body',
												c : ['Panel content']
											})]
										}), B.DIV({
											cls : 'panel panel-info',
											c : [B.DIV({
												cls : 'panel-heading',
												c : [B.H3({
													cls : 'panel-title',
													c : ['Panel title']
												})]
											}), B.DIV({
												cls : 'panel-body',
												c : ['Panel content']
											})]
										})]
									}), B.DIV({
										cls : 'col-sm-4',
										c : [B.DIV({
											cls : 'panel panel-warning',
											c : [B.DIV({
												cls : 'panel-heading',
												c : [B.H3({
													cls : 'panel-title',
													c : ['Panel title']
												})]
											}), B.DIV({
												cls : 'panel-body',
												c : ['Panel content']
											})]
										}), B.DIV({
											cls : 'panel panel-danger',
											c : [B.DIV({
												cls : 'panel-heading',
												c : [B.H3({
													cls : 'panel-title',
													c : ['Panel title']
												})]
											}), B.DIV({
												cls : 'panel-body',
												c : ['Panel content']
											})]
										})]
									})]
								}), B.DIV({
									cls : 'page-header',
									c : [B.H1({
										c : ['Wells']
									})]
								}), B.DIV({
									cls : 'well',
									c : [P({
										c : ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.']
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
