import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/物料主数据比对相关/getBomByMaterialIdUsingGET
export function fetchMethod(params: { enterpriseId: number; materialId: number }) {
    return get({
      url: "/masterdata-service/materialCompare/getBomByMaterialId",
      params,
    });
}
// JSONResult«List«MaterialBomBaseVo»»
export interface IJSONResultListMaterialBomBaseVo {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialBomBaseVo[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// MaterialBomBaseVo
export interface IMaterialBomBaseVo {
    // 物料ID
    materialId: number;
    // 物料编码
    materialCode: string;
    // ID
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
}
