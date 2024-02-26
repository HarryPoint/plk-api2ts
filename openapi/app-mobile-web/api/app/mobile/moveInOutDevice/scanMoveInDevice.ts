import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/进出料设备相关/scanMoveInDeviceUsingPOST
*/
export default function fetchMethod(data: IFeedDeviceScanRequestDTO, extraOptions?: any) {
    return http<IJSONResultFeedDeviceRespondsToDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutDevice/scanMoveInDevice",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 进料设备扫描请求DTO */
export interface IFeedDeviceScanRequestDTO {
    /** 生产任务id */
    produceTaskId: number;
    /** 生产任务ids */
    produceTaskIds: number[];
    /** 编号 */
    code: string;
}
/** JSONResult«进料设备响应DTO» */
export interface IJSONResultFeedDeviceRespondsToDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IFeedEquipmentRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 进料设备响应DTO */
export interface IFeedEquipmentRespondsToDTO {
    /** 设备id */
    id: number;
    /** 设备名称 */
    name: string;
    /** 设备编号 */
    code: string;
    /** 生产工艺设备id */
    produceTechnologyDeviceId: number[];
}
