import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备保养任务相关/cancelTaskUsingPOST
*/
export default function fetchMethod(options: { data: IIdInformation }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/deviceMaintainTask/cancelTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** Id 信息 */
export interface IIdInformation {
    /** id */
    id: string;
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
