/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Radix.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Radix.view.main.MainController',
        'Radix.view.main.MainModel',
        'Radix.view.ux.navbar.Navbar',
        'Radix.view.ux.navbar.NavbarButton'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'navbar',
            cls: 'navbar',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'component',
                    html: '<a href="#" class="navbar-brand"><small><img src="resources/images/logo.png" alt=""></small></a>'
                },
                {
                    xtype: 'component',
                    cls: 'sidebar-collapse',
                    html: '<i class="collapse-icon fa fa-bars"></i>'
                },
                {
                    xtype: 'component',
                    flex: 1
                },
                {
                    xtype: 'navbar-button'
                },
                {
                    xtype: 'navbar-button'
                },
                {
                    xtype: 'navbar-button'
                }
            ]
        }
    ]
});
