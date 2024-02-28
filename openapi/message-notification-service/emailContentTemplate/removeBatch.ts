import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17600/doc.html#/default/邮件内容模板/removeBatchUsingPOST
*/
export default function fetchMethod(options: { data: IEmailContentTemplateBatchRemoveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/emailContentTemplate/removeBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** EmailContentTemplateBatchRemoveRequestDTO */
export interface IEmailContentTemplateBatchRemoveRequestDTO {
    /** id列表 */
    idList?: string[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
