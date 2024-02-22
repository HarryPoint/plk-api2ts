import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/进出料扫码相关/moveInScanUsingPOST
export function fetchMethod(data: IFeedScanRequestDTO) {
    return post({
      url: "/masterdata-service/moveInOutScan/moveInScan",
      data,
    });
}
// 进料扫描请求DTO
export interface IFeedScanRequestDTO {
    // 生产任务id
    produceTaskId: number;
    // 最近物料id
    lastMaterialId: number;
    // 编号
    code: string;
}
// JSONResult«进料扫描响应对象DTO»
export interface IJSONResultIncomingScanResponseObjectDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFeedScanResponseObjectDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 进料扫描响应对象DTO
export interface IFeedScanResponseObjectDTO {
    // 进料设备
    moveInDevice: ITheFeedDeviceRespondsToDTO1;
    // 进料模具
    moveInMold: ITheFeedMoldRespondsToDTO1;
    // 所需物料
    moveInMaterial: IIncomingBomConsumedMaterialScanRespondsToDTO;
    // 外部码
    externalCodeResult: IIncomingBomConsumptionMaterialExternalCodeScanResponseDTO;
}
// 进料设备响应DTO_1
export interface ITheFeedDeviceRespondsToDTO1 {
    // 设备id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 生产工艺设备id
    produceTechnologyDeviceId: number[];
}
// 进料模具响应DTO_1
export interface ITheFeedMoldRespondsToDTO1 {
    // 模具id
    id: number;
    // 模具名称
    name: string;
    // 模具编号
    code: string;
    // 生产工艺模具id
    produceTechnologyMoldId: number[];
}
// 进料bom消耗物料扫描响应DTO
export interface IIncomingBomConsumedMaterialScanRespondsToDTO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
}
// 进料bom消耗物料外部码扫描响应DTO
export interface IIncomingBomConsumptionMaterialExternalCodeScanResponseDTO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 外部码
    externalCode: string;
}
