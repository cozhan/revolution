MODx.page.ImportResource = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        formpanel: 'modx-panel-import-resources'
        ,buttons: [{
            process: 'system/import/index'
            ,text: _('import_resources')
            ,method: 'remote'
        },{
            text: _('cancel')
        }]
        ,components: [{
            xtype: 'modx-panel-import-resources'
        }]
    });
    MODx.page.ImportResource.superclass.constructor.call(this,config);
};
Ext.extend(MODx.page.ImportResource,MODx.Component);
Ext.reg('modx-page-import-resource',MODx.page.ImportResource);
