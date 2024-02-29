import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/exportProduceTimeFeeDetailReportExcelUsingPOST
*/
export default function fetchMethod(options: { data: IHourlyLaborRateReportSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/rtProductionSnapshot/exportProduceTimeFeeDetailReportExcel",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工时工费报表搜索VO */
export interface IHourlyLaborRateReportSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工序id集 */
    processIds?: string[];
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 员工id集 */
    userIds?: string[];
    /** 物料id集 */
    materialIds?: string[];
    /** 班组id集 */
    classGroupIds?: string[];
    /** 查询开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 查询结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 生产任务编码 */
    produceTaskNo?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
