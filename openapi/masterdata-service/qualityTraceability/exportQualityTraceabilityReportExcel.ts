import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质量追溯/exportQualityTraceabilityReportExcelUsingPOST
*/
export default function fetchMethod(options: { data: IQualityTraceabilityReportQueryDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/qualityTraceability/exportQualityTraceabilityReportExcel",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质量追溯报表查询DTO */
export interface IQualityTraceabilityReportQueryDTO {
    /** 字段搜索 */
    dataSearchList?: IProcessDataDetailsSearchVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 显示字段序列号 */
    showFieldSerialNoList?: string[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: ('NONE' | 'EQ' | 'LIKE' | 'RANGE' | 'SELECTOR' | 'IS_NULL' | 'NOT_NULL' | 'NE' | 'REGEXP');
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
