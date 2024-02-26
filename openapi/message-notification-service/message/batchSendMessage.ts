import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/消息相关/batchSendMessageUsingPOST
*/
export default function fetchMethod(options: { data: IMessageInformation[]params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/message-notification-service/message/batchSendMessage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 消息信息 */
export interface IMessageInformation {
    /** 消息id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 消息内容 */
    content?: string;
    /** 消息类型 */
    type?: ('BUSINESS_NOTIFICATION' | 'BUSINESS_EARLY_WARNING' | 'SYSTEM_NOTIFICATION');
    /** 消息发送人 */
    sendUserId?: number;
    /** 移动端跳转路径 */
    mobilePath?: string;
    /** 消息接收人 */
    receiveUserIds?: number[];
    /** pc端跳转路径 */
    webPath?: string;
    /** 消息发送端 */
    sendTarget?: number;
    /** 消息跳转类型 */
    pathType?: ('NONE' | 'JUMP' | 'DOWNLOAD' | 'REEXPORT' | 'TODO' | 'APP_ADD_PAGE_LINK' | 'APP_LIST_PAGE_LINK');
    /** 消息业务id */
    businessId?: number;
    /** 消息业务类型 */
    businessType?: ('PRODUCE_TASK');
    /** 来源应用编码 */
    fromAppCode?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
