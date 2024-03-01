import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/tsk数采数据相关/exportTskReportExcelUsingPOST
*/
export default function fetchMethod(options: { data: ITSKReportQueryDTO1 }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/tskStatistic/exportTskReportExcel",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** TSK报表查询DTO_1 */
export interface ITSKReportQueryDTO1 {
    /** 字段搜索 */
    dataSearchList?: IProcessDataDetailsSearchVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 显示字段序列号 */
    showFieldSerialNoList?: string[];
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索类型 */
    searchType: EProcessDataDetailsSearchVO_searchType;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProcessDataDetailsSearchVO_searchType {
    NONE = "NONE",
    EQ = "EQ",
    LIKE = "LIKE",
    RANGE = "RANGE",
    SELECTOR = "SELECTOR",
    IS_NULL = "IS_NULL",
    NOT_NULL = "NOT_NULL",
    NE = "NE",
    REGEXP = "REGEXP"
}
