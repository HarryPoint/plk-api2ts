import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/邮件内容模板/removeBatchUsingPOST_1
*/
export default function fetchMethod(options: { data: IEmailContentTemplateBatchRemoveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/emailContentTemplate/removeBatch",
            method: "post",
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
