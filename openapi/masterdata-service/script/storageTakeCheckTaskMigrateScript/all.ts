import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/盘点单数据迁移服务/allUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseIds?: string[] } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/script/storageTakeCheckTaskMigrateScript/all",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
