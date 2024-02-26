import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/邮件内容模板/listUsingGET
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListEmailContentTemplateDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/emailContentTemplate/list",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«List«EmailContentTemplateDTO»» */
export interface IJSONResultListEmailContentTemplateDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IEmailContentTemplateDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** EmailContentTemplateDTO */
export interface IEmailContentTemplateDTO {
    /** ID */
    id: number;
    /** 邮件内容 */
    content: string;
}
