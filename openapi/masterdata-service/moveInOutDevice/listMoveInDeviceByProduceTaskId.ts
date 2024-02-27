import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/进出料设备相关/listMoveInDeviceByProduceTaskIdUsingGET
*/
export default function fetchMethod(options: { params: { produceTaskId?: string } }, extraOptions?: any) {
    return http<IJSONResultListTheFeedDeviceRespondsToDTO1>(
        {
            url: "/masterdata-service/moveInOutDevice/listMoveInDeviceByProduceTaskId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«进料设备响应DTO»»_1 */
export interface IJSONResultListTheFeedDeviceRespondsToDTO1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheFeedDeviceRespondsToDTO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料设备响应DTO_1 */
export interface ITheFeedDeviceRespondsToDTO1 {
    /** 设备id */
    id?: string;
    /** 设备名称 */
    name?: string;
    /** 设备编号 */
    code?: string;
    /** 生产工艺设备id */
    produceTechnologyDeviceId?: string[];
}
