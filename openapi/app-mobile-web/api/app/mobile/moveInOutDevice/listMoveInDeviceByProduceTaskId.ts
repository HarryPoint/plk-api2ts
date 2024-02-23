import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/进出料设备相关/listMoveInDeviceByProduceTaskIdUsingGET
export default function fetchMethod(params: { produceTaskId: string }) {
    return http<IJSONResultListTheFeedDeviceRespondsToDTO1>({
        url: "/app-mobile-web/api/app/mobile/moveInOutDevice/listMoveInDeviceByProduceTaskId",
        method: "get",
        params,
    });
}
// JSONResult«List«进料设备响应DTO»»_1
export interface IJSONResultListTheFeedDeviceRespondsToDTO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFeedEquipmentRespondsToDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 进料设备响应DTO
export interface IFeedEquipmentRespondsToDTO {
    // 设备id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 生产工艺设备id
    produceTechnologyDeviceId: number[];
}