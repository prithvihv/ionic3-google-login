/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './user';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/grid/grid.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from 'ionic-angular/components/navbar/navbar';
import * as import21 from 'ionic-angular/components/app/app';
import * as import22 from 'ionic-angular/util/keyboard';
import * as import23 from '@angular/core/src/zone/ng_zone';
import * as import24 from 'ionic-angular/components/tabs/tabs';
import * as import25 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import26 from 'ionic-angular/components/toolbar/toolbar';
import * as import27 from 'ionic-angular/components/button/button';
import * as import28 from 'ionic-angular/components/grid/grid';
import * as import29 from 'ionic-angular/components/content/content';
export var Wrapper_UserPage = (function () {
    function Wrapper_UserPage(p0, p1) {
        this.changed = false;
        this.context = new import0.UserPage(p0, p1);
    }
    Wrapper_UserPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_UserPage;
}());
var renderType_UserPage_Host = null;
var _View_UserPage_Host0 = (function (_super) {
    __extends(_View_UserPage_Host0, _super);
    function _View_UserPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UserPage_Host0, renderType_UserPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UserPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-user', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_UserPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._UserPage_0_4 = new Wrapper_UserPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.NavParams));
        this._appEl_0.initComponent(this._UserPage_0_4.context, [], compView_0);
        compView_0.create(this._UserPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_UserPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.UserPage) && (0 === requestNodeIndex))) {
            return this._UserPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_UserPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UserPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_UserPage_Host0;
}(import1.AppView));
function viewFactory_UserPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_UserPage_Host === null)) {
        (renderType_UserPage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_UserPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var UserPageNgFactory = new import11.ComponentFactory('page-user', viewFactory_UserPage_Host0, import0.UserPage);
var styles_UserPage = [];
var renderType_UserPage = null;
var _View_UserPage0 = (function (_super) {
    __extends(_View_UserPage0, _super);
    function _View_UserPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_UserPage0, renderType_UserPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_UserPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import19.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'color', 'primary');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import12.viewFactory_Toolbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Toolbar_2_4 = new import12.Wrapper_Toolbar(this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Toolbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import13.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_4), this.renderer, this._Toolbar_2_4.context, this.parentInjector.get(import20.Navbar, null));
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      User\n    ', null);
        compView_4.create(this._ToolbarTitle_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Toolbar_2_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import14.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import14.Wrapper_Content(this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import21.App), this.parentInjector.get(import22.Keyboard), this.parentInjector.get(import23.NgZone), this.parentInjector.get(import19.ViewController, null), this.parentInjector.get(import24.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        this._el_12 = this.renderer.createElement(null, 'ion-row', null);
        this._Row_12_3 = new import15.Wrapper_Row();
        this._text_13 = this.renderer.createText(this._el_12, '\n    ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'ion-col', null);
        this._Col_14_3 = new import15.Wrapper_Col();
        this._text_15 = this.renderer.createText(this._el_14, '\n      ', null);
        this._el_16 = this.renderer.createElement(this._el_14, 'button', null);
        this.renderer.setElementAttribute(this._el_16, 'block', '');
        this.renderer.setElementAttribute(this._el_16, 'ion-button', '');
        this._appEl_16 = new import3.AppElement(16, 14, this, this._el_16);
        var compView_16 = import16.viewFactory_Button0(this.viewUtils, this.injector(16), this._appEl_16);
        this._Button_16_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import17.Config), new import18.ElementRef(this._el_16), this.renderer);
        this._appEl_16.initComponent(this._Button_16_4.context, [], compView_16);
        this._text_17 = this.renderer.createText(null, 'Logout', null);
        compView_16.create(this._Button_16_4.context, [[].concat([this._text_17])], null);
        this._text_18 = this.renderer.createText(this._el_14, '\n    ', null);
        this._text_19 = this.renderer.createText(this._el_12, '\n  ', null);
        this._text_20 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._text_11,
                this._el_12,
                this._text_20
            ]),
            []
        ], null);
        this._text_21 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_16, 'click', this.eventHandler(this._handle_click_16_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21
        ], [disposable_0], []);
        return null;
    };
    _View_UserPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import26.Toolbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Toolbar_2_4.context;
        }
        if (((token === import26.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import27.Button) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Button_16_4.context;
        }
        if (((token === import28.Col) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Col_14_3.context;
        }
        if (((token === import28.Row) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._Row_12_3.context;
        }
        if (((token === import29.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Content_9_4.context;
        }
        return notFoundResult;
    };
    _View_UserPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_0 = 'primary';
        this._Toolbar_2_4.check_color(currVal_0, throwOnChange, false);
        if (this._Toolbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange)) {
            this._appEl_2.componentView.markAsCheckOnce();
        }
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._Content_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        this._Row_12_3.detectChangesInternal(this, this._el_12, throwOnChange);
        this._Col_14_3.detectChangesInternal(this, this._el_14, throwOnChange);
        var currVal_4 = '';
        this._Button_16_4.check_block(currVal_4, throwOnChange, false);
        if (this._Button_16_4.detectChangesInternal(this, this._el_16, throwOnChange)) {
            this._appEl_16.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_16_4.context.ngAfterContentInit();
            }
        }
        var currVal_1 = this._Toolbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_UserPage0.prototype.destroyInternal = function () {
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_UserPage0.prototype._handle_click_16_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.doGoogleLogout() !== false);
        return (true && pd_0);
    };
    return _View_UserPage0;
}(import1.AppView));
export function viewFactory_UserPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_UserPage === null)) {
        (renderType_UserPage = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_UserPage, {}));
    }
    return new _View_UserPage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=user.ngfactory.js.map