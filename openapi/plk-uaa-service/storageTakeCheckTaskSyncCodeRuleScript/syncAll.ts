import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:18100/doc.html#/default/基于盘点权限同步盘点编码规则相关/syncAllUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/storageTakeCheckTaskSyncCodeRuleScript/syncAll",
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
