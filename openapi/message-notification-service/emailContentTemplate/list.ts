import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17600/doc.html#/default/邮件内容模板/listUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListEmailContentTemplateDTO>(
        {
            url: "/message-notification-service/emailContentTemplate/list",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«EmailContentTemplateDTO»» */
export interface IJSONResultListEmailContentTemplateDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmailContentTemplateDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** EmailContentTemplateDTO */
export interface IEmailContentTemplateDTO {
    /** ID */
    id?: string;
    /** 邮件内容 */
    content?: string;
}
