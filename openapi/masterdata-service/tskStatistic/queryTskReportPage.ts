import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/tsk数采数据相关/queryTskReportPageUsingPOST
export default function fetchMethod(data: ITSKReportQueryDTO1) {
    return http<IJSONResultPageInformationTSKReportQueryDTO>({
        url: "/masterdata-service/tskStatistic/queryTskReportPage",
        method: "post",
        data,
    });
}
// TSK报表查询DTO_1
export interface ITSKReportQueryDTO1 {
    // 字段搜索
    dataSearchList: IProcessDataDetailsSearchVO[];
    // 当前页面
    pageNo: number;
    // 显示字段序列号
    showFieldSerialNoList: string[];
    // 分页大小
    pageSize: number;
}
// 流程数据明细搜索VO
export interface IProcessDataDetailsSearchVO {
    // 列code
    code: string;
    // 搜索类型
    searchType: string;
    // 搜索文本 - 针对文本搜索
    text: string;
    // 搜索起始值 - 针对范围搜索
    limitBegin: Record<string, any>;
    // 搜索结束值 - 针对范围搜索
    limitEnd: Record<string, any>;
    // 搜索选项值 - 针对选择搜索
    selectors: Record<string, any>[];
    // 表格编码
    tableCode: string;
}
// JSONResult«分页信息«TSK报表查询DTO»»
export interface IJSONResultPageInformationTSKReportQueryDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationTSKReportQueryingDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«TSK报表查询DTO»
export interface IPageInformationTSKReportQueryingDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ITSKReportQueryingDtos[];
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
// TSK报表查询DTO
export interface ITSKReportQueryingDtos {
}
