import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目相关/updateOverdueStatusByEnterpriseIdUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultString>(
        {
            url: "/masterdata-service/project/updateOverdueStatusByEnterpriseId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«string» */
export interface IJSONResultString {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
