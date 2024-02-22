import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/工艺卡相关/getSelectorOptionSearchUsingPOST_3
export function fetchMethod(data: IProcessDropDownListToSearchForDtos) {
    return post({
      url: "/masterdata-service/processSheet/getSelectorOptionSearch",
      data,
    });
}
// 工艺卡下拉选择列表搜索DTO
export interface IProcessDropDownListToSearchForDtos {
    // 物料id
    materialId: number;
    // 工序id
    processId: number;
    // 工艺卡名称
    processSheetName: string;
}
// JSONResult«List«工艺卡下拉选择列表搜索响应DTO»»
export interface IJSONResultListProcessDropDownListToSearchForResponseDtos {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessDropDownSelectListSearchResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工艺卡下拉选择列表搜索响应DTO
export interface IProcessDropDownSelectListSearchResponseDTO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
