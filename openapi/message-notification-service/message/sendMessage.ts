import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17600/doc.html#/default/消息相关/sendMessageUsingPOST
*/
export default function fetchMethod(options: { data: IMessageInformation, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/message-notification-service/message/sendMessage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 消息信息 */
export interface IMessageInformation {
    /** 消息id */
    id?: string;
    /** 标题 */
    title?: string;
    /** 消息内容 */
    content?: string;
    /** 消息类型 */
    type?: EMessageInformation_type;
    /** 消息发送人 */
    sendUserId?: string;
    /** 移动端跳转路径 */
    mobilePath?: string;
    /** 消息接收人 */
    receiveUserIds?: string[];
    /** pc端跳转路径 */
    webPath?: string;
    /** 消息发送端 */
    sendTarget?: number;
    /** 消息跳转类型 */
    pathType?: EMessageInformation_pathType;
    /** 消息业务id */
    businessId?: string;
    /** 消息业务类型 */
    businessType?: EMessageInformation_businessType;
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
    ts?: string;
}

export enum EMessageInformation_type {
    /** 业务通知 */
    BUSINESS_NOTIFICATION = "BUSINESS_NOTIFICATION",
    /** 业务预警 */
    BUSINESS_EARLY_WARNING = "BUSINESS_EARLY_WARNING",
    /** 系统消息 */
    SYSTEM_NOTIFICATION = "SYSTEM_NOTIFICATION"
}

export enum EMessageInformation_pathType {
    /** 无操作 */
    NONE = "NONE",
    /** 跳转 */
    JUMP = "JUMP",
    /** 下载 */
    DOWNLOAD = "DOWNLOAD",
    /** 重新导出 */
    REEXPORT = "REEXPORT",
    /** 代办 */
    TODO = "TODO",
    /** 应用新增页面链接 */
    APP_ADD_PAGE_LINK = "APP_ADD_PAGE_LINK",
    /** 应用详细页面链接 */
    APP_LIST_PAGE_LINK = "APP_LIST_PAGE_LINK"
}

export enum EMessageInformation_businessType {
    /** 生产任务 */
    PRODUCE_TASK = "PRODUCE_TASK"
}
