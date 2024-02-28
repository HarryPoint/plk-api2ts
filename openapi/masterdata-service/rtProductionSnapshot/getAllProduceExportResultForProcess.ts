import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/getAllProduceExportResultForProcessUsingPOST
*/
export default function fetchMethod(options: { data: IOutputClassReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListExportVOFromTheOutputReport>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getAllProduceExportResultForProcess",
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
/** JSONResult«List«产出报表导出VO»» */
export interface IJSONResultListExportVOFromTheOutputReport {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOutputReportExportVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 产出报表导出VO */
export interface IOutputReportExportVO {
    /** 数据分组名称 */
    groupName?: string;
    /** 数据分组编号 */
    groupCode?: string;
    /** 班组信息集 */
    classGroupList?: string;
    /** 工序信息集 */
    processList?: string;
    /** 物料信息集 */
    majorDataList?: string;
    /** 数据时间 */
    dataTime?: string;
    /** 总产出 */
    totalProduceQuantity?: number;
    /** 产出数量 */
    produceQuantity?: number;
    /** 报废数量 */
    scrapQuantity?: number;
    /** 返工产出 */
    backQuantity?: number;
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
