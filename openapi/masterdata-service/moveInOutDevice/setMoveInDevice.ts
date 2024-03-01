import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/进出料设备相关/setMoveInDeviceUsingPOST
*/
export default function fetchMethod(options: { data: ITheProductionTaskSetsTheFeedDeviceToRequestTheDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/moveInOutDevice/setMoveInDevice",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务设置进料设备请求DTO */
export interface ITheProductionTaskSetsTheFeedDeviceToRequestTheDTO {
    /** 设备ids */
    deviceIds: string[];
    /** 生产任务id */
    produceTaskId: string;
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
