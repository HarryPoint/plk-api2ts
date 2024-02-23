import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/进出料模具相关/pageMoveInDeviceUsingPOST_1
export default function fetchMethod(data: IFeedMoldPagingQueryObject) {
    return post<IJSONResultPagingInformationFeedMoldRespondsToDTO>({
      url: "/masterdata-service/moveInOutMold/pageMoveInDevice",
      data,
    });
}
// 进料模具分页查询对象
export interface IFeedMoldPagingQueryObject {
    // 生产任务ids
    produceTaskIds: number[];
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSort[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
    // 名称或者编号
    nameOrCode: string;
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«进料模具响应DTO»»
export interface IJSONResultPagingInformationFeedMoldRespondsToDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationFeedMoldRespondsToDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«进料模具响应DTO»
export interface IPagingInformationFeedMoldRespondsToDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IFeedMoldRespondsToDTO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 进料模具响应DTO
export interface IFeedMoldRespondsToDTO {
    // 模具id
    id: number;
    // 模具名称
    name: string;
    // 模具编号
    code: string;
    // 生产工艺模具id
    produceTechnologyMoldId: number[];
}
