import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目大屏相关/queryProjectQualityIssueCompleteCountUsingPOST
export function fetchMethod(data: IProjectKanbanQueryDto) {
    return post({
      url: "/masterdata-service/projectDashboard/queryProjectQualityIssueCompleteCount",
      data,
    });
}
// 项目看板查询dto
export interface IProjectKanbanQueryDto {
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 项目大类
    projectCategory: string;
    // undefined
    projectTypeIds: number[];
    // undefined
    excludeProjectIds: number[];
}
// JSONResult«项目质量问题统计响应对象»
export interface IJSONResultStatisticalResponseObjectForProjectQualityProblems {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectQualityProblemStatisticalResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目质量问题统计响应对象
export interface IProjectQualityProblemStatisticalResponseObject {
    // 总数量
    totalQuantity: number;
    // 未完成数量
    unCompleteQuantity: number;
    // 已完成数量
    completeQuantity: number;
    // 超期完成数量
    overdueCompleteQuantity: number;
    // 超期未完成数量
    overdueUnCompleteQuantity: number;
    // 正常进行数量
    normalQuantity: number;
    // 按期完成数量
    onTimeCompleteQuantity: number;
    // 完成率
    completeRate: number;
}
