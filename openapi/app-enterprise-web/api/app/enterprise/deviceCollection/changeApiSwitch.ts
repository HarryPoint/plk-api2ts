import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/设备数采数据概览相关/changeApiSwitchUsingPOST
export default function fetchMethod(data: IDeviceDataAcquisitionCommunicationStatusDTO) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/deviceCollection/changeApiSwitch",
        method: "post",
        data,
    });
}
// 设备数采通讯状态DTO
export interface IDeviceDataAcquisitionCommunicationStatusDTO {
    // id
    id: number;
    // 通讯开关状态
    apiSwitchStatus: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
