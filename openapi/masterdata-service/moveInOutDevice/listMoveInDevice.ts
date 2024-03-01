import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料设备相关/listMoveInDeviceUsingPOST
*/
export default function fetchMethod(options: { data: IFeedEquipmentQueryDTO }, extraOptions?: any) {
    return http<IJSONResultListFeedDeviceRespondsToDTO>(
        {
            url: "/masterdata-service/moveInOutDevice/listMoveInDevice",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料设备查询DTO */
export interface IFeedEquipmentQueryDTO {
    /** 名称或者编号 */
    nameOrCode?: string;
    /** 生产任务ids */
    produceTaskIds?: string[];
}
/** JSONResult«List«进料设备响应DTO»» */
export interface IJSONResultListFeedDeviceRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFeedEquipmentRespondsToDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料设备响应DTO */
export interface IFeedEquipmentRespondsToDTO {
    /** 设备编号 */
    code?: string;
    /** 设备id */
    id?: string;
    /** 设备名称 */
    name?: string;
    /** 生产工艺设备id */
    produceTechnologyDeviceId?: string[];
}
