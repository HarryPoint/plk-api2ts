import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/盘点单数据迁移服务/allUsingGET_1
*/
export default function fetchMethod(options: { params: { EnterpriseIds?: string[] } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/script/storageTakeCheckTaskMigrateScript/all",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
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
