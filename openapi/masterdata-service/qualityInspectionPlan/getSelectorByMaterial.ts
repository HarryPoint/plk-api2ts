import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/质检方案/getSelectorByMaterialUsingGET
export function fetchMethod(params: { enterpriseId: number; materialId: number }) {
    return get({
      url: "/masterdata-service/qualityInspectionPlan/getSelectorByMaterial",
      params,
    });
}
// JSONResult«List«质检方案选择VO»»
export interface IJSONResultListSelectVOAsTheInspectionSolution {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheInspectionSolutionIsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质检方案选择VO
export interface ITheInspectionSolutionIsVO {
    // id
    id: number;
    // 质检方案名称
    name: string;
    // 质检方案编号
    code: string;
}
