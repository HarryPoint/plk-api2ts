import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/财务期间相关/pageQueryUsingPOST
export default function fetchMethod(data: IFinancialPeriodQueryRequest) {
    return post<IJSONResultPagingInformationFinancialPeriodQueryResponse>({
      url: "/masterdata-service/fiscalPeriod/pageQuery",
      data,
    });
}
// 财务期间查询请求
export interface IFinancialPeriodQueryRequest {
    // 开始月份
    startMonth: string;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 开始日期 - begin
    startDateBegin: string;
    // 排序字段集
    orders: IPagingSortVO[];
    // 结束日期 - end
    endDateEnd: string;
    // 期间
    periodList: string[];
    // 开始日期 - end
    startDateEnd: string;
    // 结束日期 - begin
    endDateBegin: string;
    // 天数 - Begin
    daysBegin: number;
    // 天数 - End
    daysEnd: number;
    // 结存状态列表
    balanceStatusList: string[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«财务期间查询响应»»
export interface IJSONResultPagingInformationFinancialPeriodQueryResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationFinancialPeriodQueryResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«财务期间查询响应»
export interface IPagingInformationFinancialPeriodQueryResponse {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IFinancialPeriodQueryResponse[];
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
// 财务期间查询响应
export interface IFinancialPeriodQueryResponse {
    // ID
    id: number;
    // 期间
    period: string;
    // 开始日期
    startDate: string;
    // 结束日期
    endDate: string;
    // 天数
    days: number;
    // 结存状态
    balanceStatus: string;
}
