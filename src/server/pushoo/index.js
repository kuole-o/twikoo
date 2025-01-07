"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.noticeWebhook = exports.noticeWxPusher = exports.noticeDiscord = exports.noticeWecombot = exports.noticeIfttt = exports.noticeFeishu = exports.noticeTelegram = exports.noticeIgot = exports.noticePushdeer = exports.noticeAtri = exports.noticeGoCqhttp = exports.noticeBark = exports.noticeWeCom = exports.noticeDingTalk = exports.noticePushPlusHxtrip = exports.noticePushPlus = exports.noticeServerChan = exports.noticeQmsg = exports.notice = void 0;
var axios_1 = require("axios");
var marked_1 = require("marked");
var markdown_to_txt_1 = require("markdown-to-txt");
function checkParameters(options, requires) {
    if (requires === void 0) { requires = []; }
    requires.forEach(function (require) {
        if (!options[require]) {
            throw new Error("".concat(require, " is required"));
        }
    });
}
function getHtml(content) {
    return marked_1.marked.parse(content);
}
function getTxt(content) {
    return (0, markdown_to_txt_1["default"])(content);
}
function getTitle(content) {
    return getTxt(content).split('\n')[0];
}
function removeUrlAndIp(content) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    var ipRegex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;
    // 邮箱正则表达式来自 https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#validation
    var mailRegExp = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g;
    return content
        .replace(urlRegex, '')
        .replace(ipRegex, '')
        .replace(mailRegExp, '');
}
/**
 * https://qmsg.zendee.cn/
 */
function noticeQmsg(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __awaiter(this, void 0, void 0, function () {
        var url, msg, param, qq, bot, group, response;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = ((_b = (_a = options === null || options === void 0 ? void 0 : options.options) === null || _a === void 0 ? void 0 : _a.qmsg) === null || _b === void 0 ? void 0 : _b.url) || 'https://qmsg.zendee.cn';
                    msg = getTxt(options.content);
                    if (options.title) {
                        msg = "".concat(options.title, "\n").concat(msg);
                    }
                    // 移除网址和 IP 以避免 Qmsg 酱被 Tencent 封号
                    msg = removeUrlAndIp(msg);
                    param = new URLSearchParams({ msg: msg });
                    qq = ((_d = (_c = options === null || options === void 0 ? void 0 : options.options) === null || _c === void 0 ? void 0 : _c.qmsg) === null || _d === void 0 ? void 0 : _d.qq) || false;
                    if (qq) {
                        param.append('qq', qq);
                    }
                    bot = ((_f = (_e = options === null || options === void 0 ? void 0 : options.options) === null || _e === void 0 ? void 0 : _e.qmsg) === null || _f === void 0 ? void 0 : _f.bot) || false;
                    if (bot) {
                        param.append('bot', bot);
                    }
                    group = ((_h = (_g = options === null || options === void 0 ? void 0 : options.options) === null || _g === void 0 ? void 0 : _g.qmsg) === null || _h === void 0 ? void 0 : _h.group) || false;
                    return [4 /*yield*/, axios_1["default"].post("".concat(url, "/").concat(group ? 'group' : 'send', "/").concat(options.token), param.toString(), {
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                        })];
                case 1:
                    response = _j.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeQmsg = noticeQmsg;
/**
 * https://github.com/Tianli0/push-bot-api/
 */
function noticeAtri(options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, message, param, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = 'http://pushoo.tianli0.top/';
                    message = getTxt(options.content);
                    if (options.title) {
                        message = "".concat(options.title, "\n").concat(message);
                    }
                    param = new URLSearchParams({
                        user_id: options.token,
                        message: message
                    });
                    return [4 /*yield*/, axios_1["default"].post(url, param.toString(), {
                            headers: { 'X-Requested-By': 'pushoo' }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeAtri = noticeAtri;
/**
 * Turbo: https://sct.ftqq.com/
 * V3: https://sc3.ft07.com/
 */
function noticeServerChan(options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, param, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    if (options.token.startsWith('sctp')) {
                        url = "https://".concat(options.token.match(/^sctp(\d+)t/)[1], ".push.ft07.com/send");
                        param = new URLSearchParams({
                            title: options.title || getTitle(options.content),
                            desp: options.content
                        });
                    }
                    else if (options.token.substring(0, 3).toLowerCase() === 'sct') {
                        url = 'https://sctapi.ftqq.com';
                        param = new URLSearchParams({
                            title: options.title || getTitle(options.content),
                            desp: options.content
                        });
                    }
                    else {
                        url = 'https://sc.ftqq.com';
                        param = new URLSearchParams({
                            text: options.title || getTitle(options.content),
                            desp: options.content
                        });
                    }
                    return [4 /*yield*/, axios_1["default"].post("".concat(url, "/").concat(options.token, ".send"), param.toString(), {
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeServerChan = noticeServerChan;
/**
 * https://www.pushplus.plus/
 */
function noticePushPlus(options) {
    return __awaiter(this, void 0, void 0, function () {
        var ppApiUrl, ppApiParam, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    ppApiUrl = 'http://www.pushplus.plus/send';
                    ppApiParam = {
                        token: options.token,
                        title: options.title || getTitle(options.content),
                        content: options.content,
                        template: 'markdown'
                    };
                    return [4 /*yield*/, axios_1["default"].post(ppApiUrl, ppApiParam)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticePushPlus = noticePushPlus;
/**
 * https://pushplus.hxtrip.com/
 */
function noticePushPlusHxtrip(options) {
    return __awaiter(this, void 0, void 0, function () {
        var ppApiUrl, ppApiParam, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    ppApiUrl = 'http://pushplus.hxtrip.com/send';
                    ppApiParam = {
                        token: options.token,
                        title: options.title || getTitle(options.content),
                        content: getHtml(options.content),
                        template: 'html'
                    };
                    return [4 /*yield*/, axios_1["default"].post(ppApiUrl, ppApiParam)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticePushPlusHxtrip = noticePushPlusHxtrip;
/**
 * 文档: https://open.dingtalk.com/document/group/custom-robot-access
 * 教程: https://blog.ljcbaby.top/article/Twikoo-DingTalk/
 */
function noticeDingTalk(options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var url, msgtype, content, msgBody, response;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = 'https://oapi.dingtalk.com/robot/send?access_token=';
                    if (options.token.substring(0, 4).toLowerCase() === 'http') {
                        url = options.token;
                    }
                    else {
                        url += options.token;
                    }
                    msgtype = ((_b = (_a = options.options) === null || _a === void 0 ? void 0 : _a.dingtalk) === null || _b === void 0 ? void 0 : _b.msgtype) || 'text';
                    content = msgtype === 'text'
                        ? (options.title ? "".concat(options.title, "\n") : '') + getTxt(options.content)
                        : options.content;
                    msgBody = {
                        msgtype: msgtype
                    };
                    if (msgtype === 'text') {
                        msgBody[msgtype] = { content: content };
                    }
                    else if (msgtype === 'markdown') {
                        msgBody[msgtype] = { title: options.title || getTitle(options.content), text: content };
                    }
                    return [4 /*yield*/, axios_1["default"].post(url, msgBody)];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeDingTalk = noticeDingTalk;
/**
 * 文档: https://developer.work.weixin.qq.com/document/path/90236
 * 教程: https://sct.ftqq.com/forward
 */
function noticeWeCom(options) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, corpid, corpsecret, agentid, _b, touser, accessToken, accessTokenRes, e_1, url, content, param, response;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    _a = options.token.split('#'), corpid = _a[0], corpsecret = _a[1], agentid = _a[2], _b = _a[3], touser = _b === void 0 ? '@all' : _b;
                    checkParameters({
                        corpid: corpid,
                        corpsecret: corpsecret,
                        agentid: agentid
                    }, ['corpid', 'corpsecret', 'agentid']);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get("https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=".concat(corpid, "&corpsecret=").concat(corpsecret))];
                case 2:
                    accessTokenRes = _c.sent();
                    accessToken = accessTokenRes.data.access_token;
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _c.sent();
                    console.error('获取企业微信 access token 失败，请检查 token', e_1);
                    return [2 /*return*/, {}];
                case 4:
                    url = "https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=".concat(accessToken);
                    content = getTxt(options.content);
                    if (options.title) {
                        content = "".concat(options.title, "\n").concat(content);
                    }
                    param = {
                        touser: touser,
                        msgtype: 'text',
                        agentid: agentid,
                        text: { content: content }
                    };
                    return [4 /*yield*/, axios_1["default"].post(url, param)];
                case 5:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeWeCom = noticeWeCom;
/**
 * https://github.com/Finb/Bark
 */
function noticeBark(options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var url, title, content, params, response;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = 'https://api.day.app/';
                    if (options.token.substring(0, 4).toLowerCase() === 'http') {
                        url = options.token;
                    }
                    else {
                        url += options.token;
                    }
                    if (!url.endsWith('/'))
                        url += '/';
                    title = encodeURIComponent(options.title || getTitle(options.content));
                    content = encodeURIComponent(getTxt(options.content));
                    params = new URLSearchParams({
                        url: ((_b = (_a = options === null || options === void 0 ? void 0 : options.options) === null || _a === void 0 ? void 0 : _a.bark) === null || _b === void 0 ? void 0 : _b.url) || ''
                    });
                    return [4 /*yield*/, axios_1["default"].get("".concat(url).concat(title, "/").concat(content, "/"), { params: params })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeBark = noticeBark;
/**
 * 文档: https://docs.go-cqhttp.org/api/
 * 教程: https://twikoo.js.org/QQ_API.html
 */
function noticeGoCqhttp(options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, message, param, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = options.token;
                    message = getTxt(options.content);
                    if (options.title) {
                        message = "".concat(options.title, "\n").concat(message);
                    }
                    param = new URLSearchParams({ message: message });
                    return [4 /*yield*/, axios_1["default"].post(url, param.toString())];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeGoCqhttp = noticeGoCqhttp;
function noticePushdeer(options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = 'https://api2.pushdeer.com/message/push';
                    return [4 /*yield*/, axios_1["default"].post(url, {
                            pushkey: options.token,
                            text: options.title || getTitle(options.content),
                            desp: options.content
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticePushdeer = noticePushdeer;
function noticeIgot(options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = "https://push.hellyw.com/".concat(options.token);
                    return [4 /*yield*/, axios_1["default"].post(url, {
                            title: options.title || getTitle(options.content),
                            content: getTxt(options.content)
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeIgot = noticeIgot;
/**
 * 文档: https://core.telegram.org/method/messages.sendMessage
 * 教程: https://core.telegram.org/bots#3-how-do-i-create-a-bot
 */
function noticeTelegram(options) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, tgToken, chatId, text, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    _a = options.token.split('#'), tgToken = _a[0], chatId = _a[1];
                    checkParameters({
                        tgToken: tgToken,
                        chatId: chatId
                    }, ['tgToken', 'chatId']);
                    text = options.content.replace(/([*_])/g, '\\$1');
                    if (options.title) {
                        text = "".concat(options.title, "\n\n").concat(text);
                    }
                    return [4 /*yield*/, axios_1["default"].post("https://api.telegram.org/bot".concat(tgToken, "/sendMessage"), {
                            text: text,
                            chat_id: chatId,
                            parse_mode: 'Markdown'
                        })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeTelegram = noticeTelegram;
/**
 * https://www.feishu.cn/hc/zh-CN/articles/360024984973
 */
function noticeFeishu(options) {
    return __awaiter(this, void 0, void 0, function () {
        var v1, v2, url, params, text, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    v1 = 'https://open.feishu.cn/open-apis/bot/hook/';
                    v2 = 'https://open.feishu.cn/open-apis/bot/v2/hook/';
                    if (options.token.substring(0, 4).toLowerCase() === 'http') {
                        url = options.token;
                    }
                    else {
                        url = v2 + options.token;
                    }
                    if (url.substring(0, v1.length) === v1) {
                        params = {
                            title: options.title || getTitle(options.content),
                            text: getTxt(options.content)
                        };
                    }
                    else {
                        text = getTxt(options.content);
                        if (options.title) {
                            text = "".concat(options.title, "\n").concat(text);
                        }
                        params = {
                            msg_type: 'text',
                            content: { text: text }
                        };
                    }
                    return [4 /*yield*/, axios_1["default"].post(url, params)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeFeishu = noticeFeishu;
/**
 * https://ifttt.com/maker_webhooks
 * http://ift.tt/webhooks_faq
 */
function noticeIfttt(options) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function () {
        var _g, token, eventName, url, response;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    _g = options.token.split('#'), token = _g[0], eventName = _g[1];
                    checkParameters({
                        token: token,
                        eventName: eventName
                    }, ['token', 'eventName']);
                    url = "https://maker.ifttt.com/trigger/".concat(eventName, "/with/key/").concat(token);
                    return [4 /*yield*/, axios_1["default"].post(url, {
                            value1: ((_b = (_a = options.options) === null || _a === void 0 ? void 0 : _a.ifttt) === null || _b === void 0 ? void 0 : _b.value1) || getTxt(options.title),
                            value2: ((_d = (_c = options.options) === null || _c === void 0 ? void 0 : _c.ifttt) === null || _d === void 0 ? void 0 : _d.value2) || getTxt(options.content),
                            value3: (_f = (_e = options.options) === null || _e === void 0 ? void 0 : _e.ifttt) === null || _f === void 0 ? void 0 : _f.value3
                        }, {
                            headers: { 'Content-Type': 'application/json' }
                        })];
                case 1:
                    response = _h.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeIfttt = noticeIfttt;
/**
 * 文档: https://developer.work.weixin.qq.com/document/path/91770
 * 教程: https://developer.work.weixin.qq.com/tutorial/detail/54
 */
function noticeWecombot(options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, title, content, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=".concat(options.token);
                    title = options.title || getTitle(options.content);
                    content = getTxt(options.content);
                    return [4 /*yield*/, axios_1["default"].post(url, {
                            msgtype: 'text',
                            text: {
                                content: "".concat(title, " \n ").concat(content)
                            }
                        }, {
                            headers: { 'Content-Type': 'application/json' }
                        })];
                case 1:
                    response = _a.sent();
                    if (response.data.errcode !== 0) {
                        throw new Error("\u8C03\u7528\u4F01\u4E1A\u5FAE\u4FE1\u7FA4\u673A\u5668\u4EBA\u901A\u77E5\u5931\u8D25\uFF1A".concat(response.data.errmsg));
                    }
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeWecombot = noticeWecombot;
/**
 * 文档：https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
function noticeDiscord(options) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var url, response;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = options.token.startsWith('https://')
                        ? options.token
                        : "https://discord.com/api/webhooks/".concat(options.token.replace(/#/, '/'));
                    return [4 /*yield*/, axios_1["default"].post(url, {
                            content: options.content,
                            username: (_b = (_a = options.options) === null || _a === void 0 ? void 0 : _a.discord) === null || _b === void 0 ? void 0 : _b.userName,
                            avatar_url: (_d = (_c = options.options) === null || _c === void 0 ? void 0 : _c.discord) === null || _d === void 0 ? void 0 : _d.avatarUrl
                        }, {
                            headers: { 'Content-Type': 'application/json' }
                        })];
                case 1:
                    response = _e.sent();
                    return [2 /*return*/, "Delivered successfully, code ".concat(response.status, ".")];
            }
        });
    });
}
exports.noticeDiscord = noticeDiscord;
/**
 * WXPusher 推送
 * 教程：https://wxpusher.zjiecode.com/admin/
 * 文档: https://wxpusher.zjiecode.com/docs/#/
 */
function noticeWxPusher(options) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function () {
        var url, _g, appToken, topicIds, response;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = 'http://wxpusher.zjiecode.com/api/send/message';
                    _g = options.token.split('#'), appToken = _g[0], topicIds = _g[1];
                    checkParameters({ appToken: appToken, topicIds: topicIds }, ['appToken', 'topicIds']);
                    return [4 /*yield*/, axios_1["default"].post(url, {
                            appToken: appToken,
                            content: options.content,
                            summary: options.title || getTitle(options.content),
                            contentType: 3,
                            topicIds: topicIds.split(',').map(function (id) { return Number(id); }),
                            uids: ((_b = (_a = options === null || options === void 0 ? void 0 : options.options) === null || _a === void 0 ? void 0 : _a.wxpusher) === null || _b === void 0 ? void 0 : _b.uids) || [],
                            url: ((_d = (_c = options === null || options === void 0 ? void 0 : options.options) === null || _c === void 0 ? void 0 : _c.wxpusher) === null || _d === void 0 ? void 0 : _d.url) || '',
                            verifyPayload: ((_f = (_e = options === null || options === void 0 ? void 0 : options.options) === null || _e === void 0 ? void 0 : _e.wxpusher) === null || _f === void 0 ? void 0 : _f.verifyPay) || false
                        }, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _h.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeWxPusher = noticeWxPusher;
function noticeWebhook(options) {
    return __awaiter(this, void 0, void 0, function () {
        var url, format, title, content, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    checkParameters(options, ['token', 'content']);
                    url = new URL(options.token);
                    format = url.searchParams.get("format") && url.searchParams.get("format") === 'markdown' ? "markdown" : "text";
                    if (format === "text") {
                        title = getTxt(options.title);
                        content = getTxt(options.content);
                    }
                    else {
                        title = options.title;
                        content: options.content;
                    }
                    if (title)
                        content: "".concat(title, "\n").concat(content);
                    return [4 /*yield*/, axios_1["default"].post(url.href, {
                            msgtype: format,
                            content: content,
                            key: 'ef8f8298-9d5b-4ae2-9a9d-2abe6312beda'
                        }, {
                            headers: { 'Content-Type': 'application/json' }
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status !== 200) {
                        throw new Error("\u53D1\u9001\u81EA\u5B9A\u4E49 webhook \u901A\u77E5\u5931\u8D25\uFF1A".concat(response.status));
                    }
                    return [2 /*return*/, response.data];
            }
        });
    });
}
exports.noticeWebhook = noticeWebhook;
function notice(channel, options) {
    return __awaiter(this, void 0, void 0, function () {
        var data, noticeFn, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    data = void 0;
                    noticeFn = {
                        qmsg: noticeQmsg,
                        serverchan: noticeServerChan,
                        serverchain: noticeServerChan,
                        pushplus: noticePushPlus,
                        pushplushxtrip: noticePushPlusHxtrip,
                        dingtalk: noticeDingTalk,
                        wecom: noticeWeCom,
                        bark: noticeBark,
                        gocqhttp: noticeGoCqhttp,
                        atri: noticeAtri,
                        pushdeer: noticePushdeer,
                        igot: noticeIgot,
                        telegram: noticeTelegram,
                        feishu: noticeFeishu,
                        ifttt: noticeIfttt,
                        wecombot: noticeWecombot,
                        discord: noticeDiscord,
                        wxpusher: noticeWxPusher,
                        webhook: noticeWebhook
                    }[channel.toLowerCase()];
                    if (!noticeFn) return [3 /*break*/, 2];
                    return [4 /*yield*/, noticeFn(options)];
                case 1:
                    data = _a.sent();
                    return [3 /*break*/, 3];
                case 2: throw new Error("<".concat(channel, "> is not supported"));
                case 3:
                    console.debug("[PUSHOO] Send to <".concat(channel, "> result:"), data);
                    return [2 /*return*/, data];
                case 4:
                    e_2 = _a.sent();
                    console.error('[PUSHOO] Got error:', e_2.message);
                    return [2 /*return*/, { error: e_2 }];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.notice = notice;
exports["default"] = notice;
//# sourceMappingURL=index.js.map