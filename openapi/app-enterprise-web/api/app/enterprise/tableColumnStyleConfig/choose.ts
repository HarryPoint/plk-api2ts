import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/列表列样式配置/chooseUsingGET
*/
export default function fetchMethod(params: { tableColumnStyleConfigId?: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/tableColumnStyleConfig/choose",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
