import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料设备相关/scanMoveInDeviceUsingPOST
*/
export default function fetchMethod(options: { data: IFeedDeviceScanRequestDTO }, extraOptions?: any) {
    return http<IJSONResultFeedDeviceRespondsToDTO>(
        {
            url: "/masterdata-service/moveInOutDevice/scanMoveInDevice",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料设备扫描请求DTO */
export interface IFeedDeviceScanRequestDTO {
    /** 编号 */
    code: string;
    /** 生产任务id */
    produceTaskId: string;
    /** 生产任务ids */
    produceTaskIds?: string[];
}
/** JSONResult«进料设备响应DTO» */
export interface IJSONResultFeedDeviceRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheFeedDeviceRespondsToDTO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料设备响应DTO_1 */
export interface ITheFeedDeviceRespondsToDTO1 {
    /** 设备编号 */
    code?: string;
    /** 设备id */
    id?: string;
    /** 设备名称 */
    name?: string;
    /** 生产工艺设备id */
    produceTechnologyDeviceId?: string[];
}
