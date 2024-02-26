import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/邮件内容模板/addUsingPOST_2
*/
export default function fetchMethod(options: { data: IEmailContentTemplateAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/emailContentTemplate/add",
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
