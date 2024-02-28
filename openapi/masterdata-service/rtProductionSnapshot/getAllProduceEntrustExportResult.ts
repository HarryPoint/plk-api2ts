import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/getAllProduceEntrustExportResultUsingPOST
*/
export default function fetchMethod(options: { data: IOutputClassReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListOutsourcedReportExportVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getAllProduceEntrustExportResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产出类报表搜索VO */
export interface IOutputClassReportSearchVO {
    /** 班组id集 */
    classGroupIds?: string[];
    /** 物料id集 */
    materialIds?: string[];
    /** 工序id集 */
    processIds?: string[];
    /** 日期筛选 - 开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 日期筛选 - 结束 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 查询时间维度类型 */
    timeType?: EOutputClassReportSearchVO_timeType;
}
/** JSONResult«List«委外报表导出VO»» */
export interface IJSONResultListOutsourcedReportExportVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOutsourcingReportExportVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 委外报表导出VO */
export interface IOutsourcingReportExportVO {
    /** 数据分组名称 */
    groupName?: string;
    /** 数据分组编号 */
    groupCode?: string;
    /** 数据时间 */
    dataTime?: string;
    /** 委外总数(委外发出) */
    produceEntrustQuantity?: number;
    /** 委外返回数量(委外返回) */
    produceEntrustBackTotalQuantity?: number;
    /** 委外返回数量(委外合格返回) */
    produceEntrustBackQuantity?: number;
    /** 委外报废数量(委外报废) */
    produceEntrustScrapQuantity?: number;
}

export enum EOutputClassReportSearchVO_timeType {
    /** 时 */
    HOUR = "HOUR",
    /** 日 */
    DAY = "DAY",
    /** 月 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}
