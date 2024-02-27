import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/进出料设备相关/setMoveInDeviceUsingPOST
*/
export default function fetchMethod(options: { data: ITheProductionTaskSetsTheFeedDeviceToRequestTheDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/moveInOutDevice/setMoveInDevice",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务设置进料设备请求DTO */
export interface ITheProductionTaskSetsTheFeedDeviceToRequestTheDTO {
    /** 生产任务id */
    produceTaskId: string;
    /** 设备ids */
    deviceIds: string[];
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
