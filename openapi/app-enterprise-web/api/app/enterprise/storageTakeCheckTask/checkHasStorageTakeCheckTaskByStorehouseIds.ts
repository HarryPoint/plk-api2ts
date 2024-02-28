import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/仓库盘点任务相关/checkHasStorageTakeCheckTaskByStorehouseIdsUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/checkHasStorageTakeCheckTaskByStorehouseIds",
            method: "POST",
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
