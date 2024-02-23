import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryProjectTaskTypeDistributeUsingPOST
export default function fetchMethod(data: IProjectOverviewQueryDto) {
    return post<IJSONResultListProjectTaskTypeDistributedResponseObject['data']>({
      url: "/masterdata-service/projectOverview/queryProjectTaskTypeDistribute",
      data,
    });
}
// 项目概况查询dto
export interface IProjectOverviewQueryDto {
    // 项目id
    projectId: number;
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 查询条数
    limit: number;
}
// JSONResult«List«项目任务类型分布响应对象»»
export interface IJSONResultListProjectTaskTypeDistributedResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheProjectTaskTypeDistributesTheResponseObject[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目任务类型分布响应对象
export interface ITheProjectTaskTypeDistributesTheResponseObject {
    // 项目任务类型名称
    projectTaskTypeName: string;
    // 项目任务类型id
    projectTaskTypeId: number;
    // 分布数量
    distributeQuantity: number;
}
