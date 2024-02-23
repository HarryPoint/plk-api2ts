import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/质检方案/exportUsingPOST_26
export default function fetchMethod(data: IInspectionSolutionSearchVO, params: { enterpriseId: number }) {
    return post<IJSONResultlong['data']>({
      url: "/masterdata-service/qualityInspectionPlan/export",
      data,
      params,
    });
}
// 质检方案搜索VO
export interface IInspectionSolutionSearchVO {
    // 当前页面
    pageNo: number;
    // 编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 名称
    name: string;
    // 状态(是否可用)
    dataStatus: number;
    // 质检分类id
    qualityInspectionCategoryId: number;
    // 物料id
    materialId: number;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
