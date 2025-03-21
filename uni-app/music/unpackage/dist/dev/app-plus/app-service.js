if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_LOAD = "onLoad";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$e = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$4], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$d = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$3], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function useStore(key) {
    if (key === void 0)
      key = null;
    return vue.inject(key !== null ? key : storeKey);
  }
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
          // for local getters
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store22) {
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store22.state,
        // root state
        store22.getters
        // root getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data = {};
          if (mutation.payload) {
            data.payload = mutation.payload;
          }
          data.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data
              }
            });
          },
          after: function(action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(
      function(module, moduleName, i) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update2([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update2(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update2(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch2 = ref.dispatch;
    var commit2 = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch2.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit2.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const _sfc_main$c = {
    __name: "wyheader",
    props: {
      icon: {
        type: String,
        default: "mic"
      },
      fontColor: {
        type: String,
        default: "#000"
      }
    },
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "f4ce61de-fontColor": __props.fontColor
      }));
      const store2 = useStore();
      const showMenu = () => {
        store2.commit("changeIsShowMenu", true);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "header-box" }, [
              vue.createElementVNode("view", { class: "header" })
            ]),
            vue.createElementVNode("view", { class: "header" }, [
              vue.createVNode(_component_uni_icons, {
                type: "bars",
                size: "22",
                onClick: showMenu
              }),
              vue.createElementVNode("view", { class: "content" }, [
                vue.renderSlot(_ctx.$slots, "content", {}, void 0, true)
              ]),
              vue.createVNode(_component_uni_icons, {
                type: __props.icon,
                size: "22"
              }, null, 8, ["type"])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-f4ce61de"], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/components/wyheader/wyheader.vue"]]);
  const _sfc_main$b = {
    __name: "songList",
    props: {
      list: Array,
      title: String
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "recommend" }, [
          vue.createElementVNode("view", { class: "recommend-hd" }, [
            vue.createElementVNode(
              "view",
              { class: "title" },
              vue.toDisplayString(__props.title),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createVNode(_component_uni_icons, {
                type: "right",
                size: "16"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "recommend-bd" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.list, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "recommend-bd__item",
                  key: item.id
                }, [
                  vue.createElementVNode("view", { class: "item-pic" }, [
                    vue.createElementVNode("image", {
                      src: item.picUrl,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "title" },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-29452354"], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/components/songList/songList.vue"]]);
  const _sfc_main$a = {
    __name: "newSongs",
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      const swiperList = vue.computed(() => {
        let newArr = [];
        let arr = [];
        props.list.forEach((item, i) => {
          if (arr.length === 3) {
            newArr.push(arr);
            arr = [];
          }
          arr.push(item);
        });
        formatAppLog("log", "at components/newSongs/newSongs.vue:52", swiperList);
        return newArr;
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "new-songs" }, [
          vue.createElementVNode("view", { class: "new-hd" }, [
            vue.createElementVNode("view", { class: "title" }, "新歌新碟"),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createVNode(_component_uni_icons, {
                type: "right",
                size: "16"
              })
            ])
          ]),
          vue.createElementVNode("swiper", { class: "swiper-wrap" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(swiperList.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                  vue.createElementVNode("view", { class: "swiper-item" }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item, (song) => {
                        return vue.openBlock(), vue.createElementBlock("view", { class: "song-item" }, [
                          vue.createElementVNode("view", { class: "song-detail" }, [
                            vue.createElementVNode("view", { class: "pic" }, [
                              vue.createElementVNode("image", {
                                src: song.al.picUrl,
                                mode: "aspectFit"
                              }, null, 8, ["src"])
                            ]),
                            vue.createElementVNode("view", { class: "desc" }, [
                              vue.createElementVNode(
                                "view",
                                { class: "name" },
                                vue.toDisplayString(song.al.name),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode(
                                "view",
                                { class: "author" },
                                vue.toDisplayString(song.ar[0].name),
                                1
                                /* TEXT */
                              )
                            ])
                          ]),
                          vue.createVNode(_component_uni_icons, {
                            "custom-prefix": "iconfont",
                            type: "icon-bofang",
                            size: "22"
                          })
                        ]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ])
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-af9be90b"], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/components/newSongs/newSongs.vue"]]);
  const _imports_0$1 = "/static/logo.png";
  const _sfc_main$9 = {
    __name: "menuLeft",
    setup(__props) {
      const store2 = useStore();
      const isShow = vue.computed(() => store2.state.isShowMenu);
      const hideMenu = () => {
        store2.commit("changeIsShowMenu", false);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["menu-left", isShow.value ? "show" : "hide"])
              },
              [
                vue.createCommentVNode(" userInfo "),
                vue.createElementVNode("view", { class: "menu-hd" }, [
                  vue.createElementVNode("view", { class: "user-info" }, [
                    vue.createElementVNode("view", { class: "avatar" }, [
                      vue.createElementVNode("image", {
                        class: "pic",
                        src: _imports_0$1,
                        mode: "aspectFill"
                      })
                    ]),
                    vue.createElementVNode("view", { class: "username" }, [
                      vue.createElementVNode("text", null, "蜗牛"),
                      vue.createVNode(_component_uni_icons, {
                        type: "right",
                        size: "16"
                      })
                    ])
                  ]),
                  vue.createCommentVNode(" 扫一扫 "),
                  vue.createElementVNode("view", { class: "qricon" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "scan",
                      size: "24"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "menu-bd" }, "hello")
              ],
              2
              /* CLASS */
            ),
            vue.withDirectives(vue.createElementVNode(
              "view",
              {
                class: "menu-mask",
                onClick: hideMenu
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, isShow.value]
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-5a515901"], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/components/menuLeft/menuLeft.vue"]]);
  const baseUrl = "http://192.168.1.10:3000";
  const apiGetBanner = (data) => {
    return uni.request({
      url: `${baseUrl}/banner`,
      method: "GET",
      data
    });
  };
  const apiGetBall = (data) => {
    return uni.request({
      url: `${baseUrl}/homepage/dragon/ball`,
      method: "GET",
      data
    });
  };
  const apiGetRecommendList = (data) => {
    return uni.request({
      url: `${baseUrl}/recommend/resource`,
      method: "GET",
      data
    });
  };
  const apiGetNewSongs = (data) => {
    return uni.request({
      url: `${baseUrl}/recommend/songs`,
      method: "GET",
      data
    });
  };
  const apiGetUserInfo = (uid) => {
    return uni.request({
      url: `${baseUrl}/user/detail`,
      method: "GET",
      data: {
        uid
      }
    });
  };
  const apiGetUserSongsList = (uid) => {
    return uni.request({
      url: `${baseUrl}/user/playlist`,
      method: "GET",
      data: {
        uid
      }
    });
  };
  const apiGetPlayListInfo = (id) => {
    return uni.request({
      url: baseUrl + "/playlist/detail",
      method: "GET",
      data: {
        id
      }
    });
  };
  const apiGetPlayList = (id, limit, offset) => {
    return uni.request({
      url: baseUrl + "/playlist/track/all",
      method: "GET",
      data: {
        id,
        limit,
        offset
      }
    });
  };
  const apiGetSongUrl = (id) => {
    return uni.request({
      url: baseUrl + "/song/url/v1",
      method: "GET",
      data: {
        id,
        level: "jymaster"
      }
    });
  };
  const apiGetSongDetail = (id) => {
    return uni.request({
      url: baseUrl + "/song/detail",
      method: "GET",
      data: {
        ids: id
      }
    });
  };
  const _sfc_main$8 = {
    __name: "suggest",
    setup(__props) {
      const state = vue.reactive({
        banners: [],
        balls: [],
        songList: [],
        newSongs: []
      });
      onLoad(() => {
        getBanner();
        getBall();
        getRecommendList();
        getNewSongs();
      });
      const getBanner = () => {
        apiGetBanner({
          type: 2
        }).then((res) => {
          state.banners = res.data.banners;
        });
      };
      const getBall = () => {
        apiGetBall().then((res) => {
          state.balls = res.data.data;
        });
      };
      const getRecommendList = () => {
        apiGetRecommendList().then((res) => {
          state.songList = res.data.recommend;
        });
      };
      const getNewSongs = () => {
        apiGetNewSongs().then((res) => {
          formatAppLog("log", "at pages/suggest/suggest.vue:95", res);
          state.newSongs = res.data.data.dailySongs;
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$1);
        const _component_wyheader = resolveEasycom(vue.resolveDynamicComponent("wyheader"), __easycom_0);
        const _component_songList = resolveEasycom(vue.resolveDynamicComponent("songList"), __easycom_2);
        const _component_newSongs = resolveEasycom(vue.resolveDynamicComponent("newSongs"), __easycom_3);
        const _component_menuLeft = resolveEasycom(vue.resolveDynamicComponent("menuLeft"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "suggest" }, [
          vue.createVNode(_component_wyheader, null, {
            content: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "search" }, [
                vue.createVNode(_component_uni_search_bar, { placeholder: "歌曲" })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createCommentVNode(" banner "),
          vue.createElementVNode("view", { class: "banner" }, [
            vue.createElementVNode("swiper", {
              class: "swiper",
              "indicator-dots": "true",
              autoplay: "true",
              circular: "true"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(state.banners, (item) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", {
                    key: item.encodeId
                  }, [
                    vue.createElementVNode("view", { class: "swiper-item" }, [
                      vue.createElementVNode("image", {
                        src: item.pic
                      }, null, 8, ["src"])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createCommentVNode(" balls "),
          vue.createElementVNode("view", { class: "balls" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(state.balls, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "ball-item",
                  key: item.id
                }, [
                  vue.createElementVNode("view", { class: "icon" }, [
                    vue.createElementVNode("image", {
                      src: item.iconUrl
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createCommentVNode(" 推荐歌单 "),
          vue.createVNode(_component_songList, {
            list: state.songList,
            title: "推荐歌单"
          }, null, 8, ["list"]),
          vue.createCommentVNode(" 新歌 "),
          vue.createVNode(_component_newSongs, {
            list: state.newSongs
          }, null, 8, ["list"]),
          vue.createCommentVNode(" menu "),
          vue.createVNode(_component_menuLeft)
        ]);
      };
    }
  };
  const PagesSuggestSuggest = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-8df5bbc7"], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/pages/suggest/suggest.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$2], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/pages/find/find.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesWalkWalk = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$1], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/pages/walk/walk.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesActiveActive = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/pages/active/active.vue"]]);
  const formateTime = (date, type) => {
    let time = new Date(date);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let c = ["摩羯", "水瓶", "双鱼", "白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯"];
    let startMonth = month - (day - 14 < "865778999988".charAt(month));
    let horoscope = c[startMonth];
    let ageLever = (year + "").slice(2, 3) + "0";
    return {
      horoscope,
      ageLever
    };
  };
  const _sfc_main$4 = {
    __name: "my",
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "2f1ef635-nav_bottom": nav_bottom.value
      }));
      const userInfo = vue.ref({});
      const store2 = useStore();
      const isLogin = vue.computed(() => store2.state.isLogin);
      const listNav = vue.ref(["音乐", "播客", "动态"]);
      const activeNum = vue.ref(0);
      const nav_bottom = vue.ref(750 / 3 / 2 + "rpx");
      const showTab = vue.ref([true, false, false]);
      const sort_playlist = vue.ref([]);
      const login = () => {
        uni.reLaunch({
          url: "/pages/login/login"
        });
      };
      const getUserInfo = () => {
        apiGetUserInfo(store2.state.userInfo.id).then((res) => {
          formatAppLog("log", "at pages/my/my.vue:166", res);
          userInfo.value = res.data;
        });
      };
      const changeNav = (i) => {
        activeNum.value = i;
        nav_bottom.value = 750 / 3 / 2 * (2 * i + 1) + "rpx";
        showTab.value = [false, false, false];
        showTab.value[i] = true;
      };
      const goSongsList = (id) => {
        uni.navigateTo({
          url: `/pages/songsList/songsList?id=${id}`
        });
      };
      const getUserSongsList = () => {
        apiGetUserSongsList(store2.state.userInfo.id).then((res) => {
          formatAppLog("log", "at pages/my/my.vue:187", res.data);
          sort_playlist.value = res.data.playlist;
        });
      };
      vue.watch(
        () => store2.state.userInfo.id,
        (newVal, oldVal) => {
          if (newVal) {
            getUserInfo();
            getUserSongsList();
          }
        },
        {
          immediate: true
        }
      );
      return (_ctx, _cache) => {
        const _component_wyheader = resolveEasycom(vue.resolveDynamicComponent("wyheader"), __easycom_0);
        const _component_menuLeft = resolveEasycom(vue.resolveDynamicComponent("menuLeft"), __easycom_1$1);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          "scroll-y": "true",
          class: "mine"
        }, [
          vue.createVNode(_component_wyheader, { icon: "more-filled" }, {
            content: vue.withCtx(() => [
              vue.createElementVNode("view", null, "我的音乐")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_menuLeft),
          vue.createElementVNode("view", { class: "mine-bd" }, [
            vue.createElementVNode(
              "view",
              {
                class: "bg",
                style: vue.normalizeStyle({ backgroundImage: `url(${userInfo.value.profile && userInfo.value.profile.backgroundUrl})` })
              },
              null,
              4
              /* STYLE */
            ),
            vue.createElementVNode("view", { class: "user" }, [
              vue.createElementVNode("view", { class: "pic" }, [
                vue.createElementVNode("image", {
                  src: userInfo.value.profile && userInfo.value.profile.avatarUrl,
                  mode: "aspectFill"
                }, null, 8, ["src"])
              ]),
              isLogin.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "user-online"
              }, [
                vue.createElementVNode("view", { class: "username" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(userInfo.value.profile && userInfo.value.profile.nickname),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "user-desc" }, [
                  vue.createElementVNode("view", { class: "user-desc-horoscope" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-boy" }),
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(vue.unref(formateTime)(userInfo.value.profile && userInfo.value.profile.birthday).ageLever) + "后",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(vue.unref(formateTime)(userInfo.value.profile && userInfo.value.profile.birthday).horoscope) + "座",
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "user-desc-address" }, [
                    vue.createElementVNode("text", null, "江西 南昌")
                  ]),
                  vue.createElementVNode("view", { class: "user-desc-age" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      "村龄 " + vue.toDisplayString(~~(userInfo.value.createDays / 365)) + " 年",
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("view", { class: "user-wyInfo" }, [
                  vue.createElementVNode("view", { class: "wyInfo-gz" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(userInfo.value.profile && userInfo.value.profile.follows),
                      1
                      /* TEXT */
                    ),
                    vue.createTextVNode(" 关注 ")
                  ]),
                  vue.createElementVNode("view", { class: "wyInfo-fs" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(userInfo.value.profile && userInfo.value.profile.followeds),
                      1
                      /* TEXT */
                    ),
                    vue.createTextVNode(" 粉丝 ")
                  ]),
                  vue.createElementVNode("view", { class: "wyInfo-dj" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      "Lv." + vue.toDisplayString(userInfo.value.level),
                      1
                      /* TEXT */
                    ),
                    vue.createTextVNode(" 等级 ")
                  ]),
                  vue.createElementVNode("view", { class: "wyInfo-tg" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(userInfo.value.listenSongs) + "时",
                      1
                      /* TEXT */
                    ),
                    vue.createTextVNode(" 听歌 ")
                  ])
                ]),
                vue.createElementVNode("view", { class: "user-list" }, [
                  vue.createElementVNode("view", { class: "zj btn" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-zuijin-on" }),
                    vue.createElementVNode("text", { class: "text" }, "最近")
                  ]),
                  vue.createElementVNode("view", { class: "bd btn" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-bendisucai" }),
                    vue.createElementVNode("text", { class: "text" }, "本地")
                  ]),
                  vue.createElementVNode("view", { class: "yp btn" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-shangchuanyunpan" }),
                    vue.createElementVNode("text", { class: "text" }, "云盘")
                  ]),
                  vue.createElementVNode("view", { class: "yg btn" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-yigou" }),
                    vue.createElementVNode("text", { class: "text" }, "已购")
                  ]),
                  vue.createElementVNode("view", { class: "fl btn" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-bendifenlei" })
                  ])
                ])
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "user-outline",
                onClick: login
              }, [
                vue.createElementVNode("text", null, "立即登录"),
                vue.createVNode(_component_uni_icons, {
                  type: "right",
                  size: "16"
                })
              ]))
            ]),
            vue.createCommentVNode(" list "),
            vue.createElementVNode("view", { class: "list" }, [
              vue.createElementVNode("view", { class: "nav" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(listNav.value, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["nav-item", { "active": activeNum.value === index }]),
                      onClick: ($event) => changeNav(index),
                      key: index
                    }, vue.toDisplayString(item), 11, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("view", { class: "list-sort" }, [
                vue.withDirectives(vue.createElementVNode(
                  "view",
                  { class: "tab" },
                  [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(sort_playlist.value, (item) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "sort-item",
                          onClick: ($event) => goSongsList(item.id),
                          key: item.id
                        }, [
                          vue.createElementVNode("view", { class: "pic" }, [
                            vue.createElementVNode("image", {
                              src: item.coverImgUrl,
                              mode: "aspectFill"
                            }, null, 8, ["src"])
                          ]),
                          vue.createElementVNode("view", { class: "desc" }, [
                            vue.createElementVNode(
                              "view",
                              { class: "title" },
                              vue.toDisplayString(item.name),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("view", { class: "detail" }, [
                              item.specialType == 0 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "歌单")) : vue.createCommentVNode("v-if", true),
                              vue.createElementVNode(
                                "text",
                                null,
                                vue.toDisplayString(item.trackCount) + "首",
                                1
                                /* TEXT */
                              ),
                              item.specialType > 0 ? (vue.openBlock(), vue.createElementBlock(
                                "text",
                                { key: 1 },
                                vue.toDisplayString(item.playCount) + "播放",
                                1
                                /* TEXT */
                              )) : vue.createCommentVNode("v-if", true),
                              item.specialType == 0 ? (vue.openBlock(), vue.createElementBlock(
                                "text",
                                { key: 2 },
                                vue.toDisplayString(item.creator.nickname),
                                1
                                /* TEXT */
                              )) : vue.createCommentVNode("v-if", true)
                            ])
                          ])
                        ], 8, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, showTab.value[0]]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "view",
                  { class: "tab" },
                  " 播客的内容 ",
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, showTab.value[1]]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "view",
                  { class: "tab" },
                  " 动态的内容 ",
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, showTab.value[2]]
                ])
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2f1ef635"], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/pages/my/my.vue"]]);
  const _imports_0 = "/static/images/suggest-active.png";
  const _sfc_main$3 = {
    __name: "login",
    setup(__props) {
      const qrimg = vue.ref("");
      let qrmsg = vue.ref("扫一扫");
      const store2 = useStore();
      const qrLogin = () => {
        uni.request({
          url: `${baseUrl}/login/qr/key?timestamp=${Date.now()}`,
          success: (res) => {
            formatAppLog("log", "at pages/login/login.vue:49", res.data.data.unikey);
            let key = res.data.data.unikey;
            uni.request({
              url: `${baseUrl}/login/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`,
              success: (result) => {
                qrimg.value = result.data.data.qrimg;
                const timer = setInterval(() => {
                  uni.request({
                    url: `${baseUrl}/login/qr/check?key=${key}&timestamp=${Date.now()}`,
                    success: (response) => {
                      formatAppLog("log", "at pages/login/login.vue:63", response);
                      qrmsg.value = response.data.message;
                      if (response.data.code === 803) {
                        clearInterval(timer);
                        uni.setStorageSync(
                          "cookie",
                          response.data.cookie
                        );
                        store2.commit("changeIsLogin", true);
                        uni.reLaunch({
                          url: "/pages/suggest/suggest"
                        });
                      }
                    }
                  });
                }, 1e3);
              }
            });
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
          vue.createElementVNode("view", { class: "logo" }, [
            vue.createElementVNode("image", {
              src: _imports_0,
              mode: ""
            })
          ]),
          vue.createElementVNode("view", { class: "login-body" }, [
            vue.createElementVNode("view", { class: "qrimg" }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString(vue.unref(qrmsg)),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "login-img" }, [
                vue.createElementVNode("image", {
                  src: qrimg.value,
                  mode: ""
                }, null, 8, ["src"])
              ])
            ]),
            vue.createElementVNode("view", { class: "start" }, [
              vue.createElementVNode("view", { class: "traveler" }, " 立即体验 "),
              vue.createElementVNode("view", {
                class: "qr-login",
                onClick: qrLogin
              }, " 扫码登录 ")
            ])
          ])
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/pages/login/login.vue"]]);
  const _sfc_main$2 = {
    __name: "musicPlayer",
    props: {
      bottom: {
        type: String,
        default: "0rpx"
      }
    },
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "a63ecc07-bottom": __props.bottom
      }));
      const store2 = useStore();
      const state = vue.reactive({
        url: "",
        name: "",
        author: "",
        time: "",
        pic: "",
        method: "pause"
      });
      let innerAudioContext = uni.createInnerAudioContext();
      const getSongUrl = async (id) => {
        innerAudioContext.destroy();
        const res = await apiGetSongUrl(id);
        formatAppLog("log", "at components/musicPlayer/musicPlayer.vue:55", res.data.data);
        state.url = res.data.data[0].url;
        innerAudioContext = uni.createInnerAudioContext();
        innerAudioContext.autoplay = true;
        innerAudioContext.src = state.url;
        innerAudioContext.onPlay(() => {
          formatAppLog("log", "at components/musicPlayer/musicPlayer.vue:62", "开始播放");
        });
        innerAudioContext.onError((err) => {
          formatAppLog("log", "at components/musicPlayer/musicPlayer.vue:65", err);
        });
      };
      const getSongDetail = async (id) => {
        const res = await apiGetSongDetail(id);
        formatAppLog("log", "at components/musicPlayer/musicPlayer.vue:70", res.data.songs);
        state.name = res.data.songs[0].al.name;
        state.pic = res.data.songs[0].al.picUrl;
        state.time = res.data.songs[0].dt;
        state.author = res.data.songs[0].ar.map((item) => item.name).join("/");
      };
      vue.watch(
        () => store2.state.currentPlayId,
        async (newVal, oldVal) => {
          getSongUrl(newVal);
          getSongDetail(newVal);
        }
      );
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.unref(store2).state.isShowPlayer ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "player"
        }, [
          vue.createElementVNode("view", { class: "mini-player" }, [
            vue.createElementVNode("view", { class: "pic" }, [
              vue.createElementVNode("image", {
                src: state.pic
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", { class: "song" }, [
              vue.createElementVNode(
                "text",
                { class: "name" },
                vue.toDisplayString(state.name),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "author" },
                "- " + vue.toDisplayString(state.author),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "player-control" }, [
              vue.createVNode(_component_uni_icons, {
                "custom-prefix": "iconfont",
                type: "icon-bofang",
                size: "22"
              }),
              vue.createVNode(_component_uni_icons, {
                type: "list",
                size: "22"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "max-player" })
        ])) : vue.createCommentVNode("v-if", true);
      };
    }
  };
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a63ecc07"], ["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/components/musicPlayer/musicPlayer.vue"]]);
  const _sfc_main$1 = {
    __name: "songsList",
    setup(__props) {
      const info = vue.ref({});
      const list = vue.ref([]);
      const store2 = useStore();
      onLoad((option) => {
        getPlayListInfo(option.id);
        getPlayList(option.id);
      });
      const getPlayListInfo = (id) => {
        apiGetPlayListInfo(id).then((res) => {
          info.value = res.data.playlist;
        });
      };
      const getPlayList = (id) => {
        apiGetPlayList(id).then((res) => {
          list.value = res.data.songs;
        });
      };
      const goBack = () => {
        uni.navigateBack();
      };
      const showPlayer = (id) => {
        store2.commit("changeIsShowPlayer", true);
        store2.commit("changeCurrentPlayId", id);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_musicPlayer = resolveEasycom(vue.resolveDynamicComponent("musicPlayer"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "songs-list" }, [
          vue.createElementVNode("view", { class: "head" }),
          vue.createElementVNode("view", { class: "header" }, [
            vue.createVNode(_component_uni_icons, {
              type: "left",
              size: "22",
              color: "#fff",
              onClick: goBack
            }),
            vue.createElementVNode("view", { class: "title" }, "歌单"),
            vue.createVNode(_component_uni_icons, {
              type: "more-filled",
              size: "22",
              color: "#fff"
            })
          ]),
          vue.createElementVNode("view", { class: "list-hd" }, [
            vue.createElementVNode("view", { class: "hd-info" }, [
              vue.createElementVNode("view", { class: "pic boxShadow" }, [
                vue.createElementVNode("image", {
                  src: info.value.coverImgUrl,
                  mode: "aspectFill"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "desc" }, [
                vue.createElementVNode(
                  "view",
                  { class: "title" },
                  vue.toDisplayString(info.value.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "user" }, [
                  vue.createElementVNode("view", { class: "avatar" }, [
                    vue.createElementVNode("image", {
                      src: info.value.creator && info.value.creator.avatarUrl,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "nickname" },
                    vue.toDisplayString(info.value.creator && info.value.creator.nickname),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#fff"
                  })
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "hd-status" }, [
              vue.createElementVNode("view", { class: "share btn" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "redo",
                  size: "20",
                  color: "#fff"
                }),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(info.value.shareCount),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "commit btn" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "chat",
                  size: "20",
                  color: "#fff"
                }),
                vue.createElementVNode("text", null, "评论")
              ]),
              vue.createElementVNode("view", { class: "collection btn" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "download",
                  size: "20",
                  color: "#fff"
                }),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(info.value.subscribedCount),
                  1
                  /* TEXT */
                )
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "list-bd" }, [
            vue.createElementVNode("view", { class: "bd-title" }, [
              vue.createVNode(_component_uni_icons, {
                type: "headphones",
                size: "26",
                color: "#d81e06"
              }),
              vue.createElementVNode("text", null, "全部播放"),
              vue.createElementVNode(
                "text",
                { class: "count" },
                "（" + vue.toDisplayString(info.value.trackCount) + "）",
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "bd-content" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(list.value, (song, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "item",
                    onClick: ($event) => showPlayer(song.id),
                    key: song.id
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "num" },
                      vue.toDisplayString(index + 1),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "song-desc" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "name" },
                        vue.toDisplayString(song.name),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "author" }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(song.ar, (item, i) => {
                            return vue.openBlock(), vue.createElementBlock("text", {
                              key: item.id
                            }, [
                              vue.createTextVNode(
                                vue.toDisplayString(item.name) + " ",
                                1
                                /* TEXT */
                              ),
                              i !== song.ar.length - 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "/")) : vue.createCommentVNode("v-if", true)
                            ]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        vue.createElementVNode(
                          "text",
                          null,
                          "- " + vue.toDisplayString(song.al && song.al.name),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "iconfont icon-more" })
                  ], 8, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createCommentVNode(" 播放器 "),
          vue.createVNode(_component_musicPlayer)
        ]);
      };
    }
  };
  const PagesSongsListSongsList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/pages/songsList/songsList.vue"]]);
  __definePage("pages/suggest/suggest", PagesSuggestSuggest);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/walk/walk", PagesWalkWalk);
  __definePage("pages/active/active", PagesActiveActive);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/songsList/songsList", PagesSongsListSongsList);
  const _sfc_main = {
    onLaunch: function() {
      let key = uni.getStorageSync("cookie");
      if (!key) {
        this.$store.commit("changeIsLogin", false);
        return;
      }
      uni.request({
        url: `${baseUrl}/login/status`,
        data: {
          cookie: key
        },
        success: (res) => {
          formatAppLog("log", "at App.vue:23", res.data.data.account.id);
          let id = res.data.data.account.id;
          if (id) {
            this.$store.commit("changeIsLogin", true);
            this.getUser(key);
          }
        }
      });
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:36", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:39", "App Hide");
    },
    methods: {
      getUser(key) {
        if (!key)
          return;
        uni.request({
          url: `${baseUrl}/user/account`,
          data: {
            cookie: key
          },
          success: (res) => {
            formatAppLog("log", "at App.vue:50", res);
            let nickname = res.data.profile && res.data.profile.nickname;
            let id = res.data.profile && res.data.profile.userId;
            let avatar = res.data.profile && res.data.profile.avatarUrl;
            this.$store.commit("getUserInfo", {
              nickname,
              id,
              avatar
            });
          }
        });
      }
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/code/codingdream/lhj_fullstack_ai-master/uni-app/music/App.vue"]]);
  const store = createStore({
    state: {
      isShowMenu: false,
      // 菜单的显示隐藏
      isLogin: false,
      // 用户是否登录
      userInfo: {},
      // 用户信息
      isShowPlayer: true,
      currentPlayId: null
    },
    mutations: {
      changeIsShowMenu(state, flag) {
        state.isShowMenu = flag;
      },
      changeIsLogin(state, val) {
        state.isLogin = val;
      },
      getUserInfo(state, obj) {
        state.userInfo = obj;
      },
      changeIsShowPlayer(state, flag) {
        state.isShowPlayer = flag;
      },
      changeCurrentPlayId(state, id) {
        state.currentPlayId = id;
      }
    }
  });
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
