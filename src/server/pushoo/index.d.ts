export interface NoticeOptions {
    /**
     * bark通知方式的参数配置
     */
    bark?: {
        /**
         * url 用于点击通知后跳转的地址
         */
        url?: string;
    };
    /**
     * IFTTT通知方式的参数配置
     */
    ifttt?: {
        value1?: string;
        value2?: string;
        value3?: string;
    };
    /**
     * Discord通知方式的参数配置
     */
    discord?: {
        userName?: string;
        avatarUrl?: string;
    };
    /**
     * WxPusher通知方式的参数配置
     */
    wxpusher?: {
        uids?: string[];
        url?: string;
        verifyPay?: boolean;
    };
    /**
     * QMsg酱通知方式的参数配置
     */
    qmsg?: {
        qq?: string;
        url?: string;
        group?: boolean;
        bot?: string;
    };
    dingtalk?: {
        /**
         * 消息类型，目前支持 text、markdown。不设置，默认为 text。
         */
        msgtype?: string;
    };
    data?: {
        /**
         * url 评论文章地址
         * text 评论原内容
         * ip 评论人ip
         * nick 评论人昵称
         * mail 评论人邮箱
         **/
        url?: string;
        ip?: string;
        nick?: string;
        mail?: string;
        text?: string;
    };
}
export interface CommonOptions {
    token: string;
    title?: string;
    content: string;
    /**
     * 扩展选项
     */
    options?: NoticeOptions;
}
export declare type ChannelType = 'qmsg' | 'serverchan' | 'serverchain' | 'pushplus' | 'pushplushxtrip' | 'dingtalk' | 'wecom' | 'bark' | 'gocqhttp' | 'atri' | 'pushdeer' | 'igot' | 'telegram' | 'feishu' | 'ifttt' | 'wecombot' | 'discord' | 'wxpusher';
/**
 * https://qmsg.zendee.cn/
 */
declare function noticeQmsg(options: CommonOptions): Promise<any>;
/**
 * https://github.com/Tianli0/push-bot-api/
 */
declare function noticeAtri(options: CommonOptions): Promise<any>;
/**
 * Turbo: https://sct.ftqq.com/
 * V3: https://sc3.ft07.com/
 */
declare function noticeServerChan(options: CommonOptions): Promise<any>;
/**
 * https://www.pushplus.plus/
 */
declare function noticePushPlus(options: CommonOptions): Promise<any>;
/**
 * https://pushplus.hxtrip.com/
 */
declare function noticePushPlusHxtrip(options: CommonOptions): Promise<any>;
/**
 * 文档: https://open.dingtalk.com/document/group/custom-robot-access
 * 教程: https://blog.ljcbaby.top/article/Twikoo-DingTalk/
 */
declare function noticeDingTalk(options: CommonOptions): Promise<any>;
/**
 * 文档: https://developer.work.weixin.qq.com/document/path/90236
 * 教程: https://sct.ftqq.com/forward
 */
declare function noticeWeCom(options: CommonOptions): Promise<any>;
/**
 * https://github.com/Finb/Bark
 */
declare function noticeBark(options: CommonOptions): Promise<any>;
/**
 * 文档: https://docs.go-cqhttp.org/api/
 * 教程: https://twikoo.js.org/QQ_API.html
 */
declare function noticeGoCqhttp(options: CommonOptions): Promise<any>;
declare function noticePushdeer(options: CommonOptions): Promise<any>;
declare function noticeIgot(options: CommonOptions): Promise<any>;
/**
 * 文档: https://core.telegram.org/method/messages.sendMessage
 * 教程: https://core.telegram.org/bots#3-how-do-i-create-a-bot
 */
declare function noticeTelegram(options: CommonOptions): Promise<any>;
/**
 * https://www.feishu.cn/hc/zh-CN/articles/360024984973
 */
declare function noticeFeishu(options: CommonOptions): Promise<any>;
/**
 * https://ifttt.com/maker_webhooks
 * http://ift.tt/webhooks_faq
 */
declare function noticeIfttt(options: CommonOptions): Promise<any>;
/**
 * 文档: https://developer.work.weixin.qq.com/document/path/91770
 * 教程: https://developer.work.weixin.qq.com/tutorial/detail/54
 */
declare function noticeWecombot(options: CommonOptions): Promise<any>;
/**
 * 文档：https://discord.com/developers/docs/resources/webhook#execute-webhook
 */
declare function noticeDiscord(options: CommonOptions): Promise<string>;
/**
 * WXPusher 推送
 * 教程：https://wxpusher.zjiecode.com/admin/
 * 文档: https://wxpusher.zjiecode.com/docs/#/
 */
declare function noticeWxPusher(options: CommonOptions): Promise<any>;
declare function noticeWebhook(options: CommonOptions): Promise<any>;
declare function notice(channel: ChannelType, options: CommonOptions): Promise<any>;
export default notice;
export { notice, noticeQmsg, noticeServerChan, noticePushPlus, noticePushPlusHxtrip, noticeDingTalk, noticeWeCom, noticeBark, noticeGoCqhttp, noticeAtri, noticePushdeer, noticeIgot, noticeTelegram, noticeFeishu, noticeIfttt, noticeWecombot, noticeDiscord, noticeWxPusher, noticeWebhook };
