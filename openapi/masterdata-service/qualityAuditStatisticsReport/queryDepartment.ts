import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/质量审核统计表/queryDepartmentUsingPOST
export default function fetchMethod(data: IBasicQualityAuditQueryRequest) {
    return post<IJSONResultStatisticalDepartmentOfInconsistencies['data']>({
      url: "/masterdata-service/qualityAuditStatisticsReport/queryDepartment",
      data,
    });
}
// 基础质量审核查询请求
export interface IBasicQualityAuditQueryRequest {
    // 日期范围-起始
    dateRangeBegin: string;
    // 日期范围-结束
    dateRangeEnd: string;
}
// JSONResult«不符合项统计-部门»
export interface IJSONResultStatisticalDepartmentOfInconsistencies {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: INonConformanceStatisticsDepartment;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 不符合项统计-部门
export interface INonConformanceStatisticsDepartment {
    // 不符合项数量,不符合项目占比标题列表
    titleList: IAuditTypeHeading[];
    // 部门统计数量
    itemList: IProductionDepartmentStatisticsProject[];
}
// 审核类型标题
export interface IAuditTypeHeading {
    // 标题的Key
    key: string;
    // 标题的名称
    name: string;
}
// 生产部门统计项目
export interface IProductionDepartmentStatisticsProject {
    // 部门ID
    departmentId: number;
    // 部门名称
    departmentName: string;
    // 不符合项数量
    nonConformanceQuantity: number;
    // 不符合项数量、不符合项目指标的占比
    dynamicIndicates: Record<string, number>;
    // 未整改数量
    unRectifiedQuantity: number;
    // 整改率
    rectificationRate: number;
    // 不符合项分布 - 内部审核不符合项数量
    internalAuditNonConformanceQuantity: number;
    // 不符合项分布 - 外部审核不符合项数量
    externalAuditNonConformanceQuantity: number;
    // 不符合项分布 - 专项审核不符合项数量
    specialAuditNonConformanceQuantity: number;
}
