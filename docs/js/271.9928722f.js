"use strict";
(self["webpackChunktestpwa"] = self["webpackChunktestpwa"] || []).push([[271],{

/***/ 5271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(3673);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(2323);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=template&id=135c3fd4

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
    color: "primary",
    label: "Get Notification",
    onClick: $setup.captureImage
  }, null, 8, ["onClick"])]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, " Permission: " + (0,shared_esm_bundler/* toDisplayString */.zw)($setup.respuesta), 1)], 64);
}
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(8825);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(1959);
// EXTERNAL MODULE: ./node_modules/@capacitor/local-notifications/dist/esm/index.js
var esm = __webpack_require__(8451);
;// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&lang=js
;


/* harmony default export */ const MainLayoutvue_type_script_lang_js = ({
  setup() {
    const $q = (0,use_quasar/* default */.Z)();
    const respuesta = (0,reactivity_esm_bundler/* ref */.iH)('');
    const respuesta2 = (0,reactivity_esm_bundler/* ref */.iH)('');
    const options = {
      title: 'Ejemplo mi estimado',
      body: 'Esto es un ejemplo',
      id: Date.now(),
      extra: {
        data: 'Algo más'
      }
    };

    function algo() {
      return new Promise(resolve => {
        Notification.requestPermission(result => {
          respuesta.value = result;
          let granted = true;

          if (result === 'denied' || result === 'default') {
            granted = false;
          }

          resolve({
            granted
          });
        });
      });
    }

    function captureImage() {
      algo().then(res => console.log(res)).catch(err => $q.notify(err));
      esm/* LocalNotifications.schedule */.s.schedule({
        notifications: [options]
      }).then(() => $q.notify('Esto es una prueba')).catch(err => {
        $q.notify(err);
      });
    }

    return {
      captureImage,
      respuesta,
      respuesta2
    };
  }

});
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 7 modules
var QBtn = __webpack_require__(8231);
// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(7518);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue



MainLayoutvue_type_script_lang_js.render = render

/* harmony default export */ const MainLayout = (MainLayoutvue_type_script_lang_js);
;

runtime_auto_import_default()(MainLayoutvue_type_script_lang_js, 'components', {QBtn: QBtn/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=271.9928722f.js.map