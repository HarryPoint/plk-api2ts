import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/航发相关/syncMessageUsingPOST
*/
export default function fetchMethod(options: { data: IKingdeeMessageSendRequest }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/hangFa/syncMessage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 金蝶消息发送请求 */
export interface IKingdeeMessageSendRequest {
    /** 消息id */
    id: string;
    /** 标题 */
    title: string;
    /** 消息内容 */
    content: string;
    /** 消息发送人 */
    sendEmployeeId?: string;
    /** 消息接收人 */
    receiveEmployeeIds: string[];
    /** 跳转完整url */
    url: string;
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
