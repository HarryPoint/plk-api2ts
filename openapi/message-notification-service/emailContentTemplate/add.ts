import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/邮件内容模板/addUsingPOST_1
*/
export default function fetchMethod(options: { data: IEmailContentTemplateAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/emailContentTemplate/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** EmailContentTemplateAddRequestDTO */
export interface IEmailContentTemplateAddRequestDTO {
    /** 邮件内容 */
    content?: string;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
