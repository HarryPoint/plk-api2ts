import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16400/doc.html#/default/设备人员能力相关/editMaintainLevelUsingPOST
*/
export default function fetchMethod(options: { data: ISelectorJsonInfo[], params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceEmployeeCapacity/editMaintainLevel",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** SelectorJsonInfo */
export interface ISelectorJsonInfo {
    /** undefined */
    name?: string;
    /** undefined */
    code?: string;
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
