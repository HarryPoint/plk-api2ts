import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/设备数采数据参数相关/editUsingPOST_3
export default function fetchMethod(data: IDeviceDataAcquisitionCommunicationParametersEditDTO, params: { enterpriseId: number; userId: number }) {
    return post<IJSONResultobject>({
      url: "/masterdata-service/deviceCollectionParam/edit",
      data,
      params,
    });
}
// 设备数采通讯参数编辑DTO
export interface IDeviceDataAcquisitionCommunicationParametersEditDTO {
    // id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 数据类型
    dataType: string;
    // 单位类型
    unitType: string;
    // 是否应用编码规则
    isCodeRule: string;
    // 单位
    unit: string;
    // 备注
    remark: string;
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
