import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/宝晶报表公共/queryMaterialTypeUsingGET
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListCodeName>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportCommon/queryMaterialType",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«List«CodeName»» */
export interface IJSONResultListCodeName {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ICodeName[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** CodeName */
export interface ICodeName {
    /** undefined */
    code: string;
    /** undefined */
    name: string;
}
