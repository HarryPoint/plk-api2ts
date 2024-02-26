import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/邮件内容模板/removeBatchUsingPOST
*/
export default function fetchMethod(data: IEmailContentTemplateBatchRemoveRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/emailContentTemplate/removeBatch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** EmailContentTemplateBatchRemoveRequestDTO */
export interface IEmailContentTemplateBatchRemoveRequestDTO {
    /** id列表 */
    idList: number[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
