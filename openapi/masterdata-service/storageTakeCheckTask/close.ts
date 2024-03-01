import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓库盘点任务相关/closeUsingPOST_3
*/
export default function fetchMethod(options: { data: IIdInformation, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/storageTakeCheckTask/close",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id信息 */
export interface IIdInformation {
    /** id */
    id?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
