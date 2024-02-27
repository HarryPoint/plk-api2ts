import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/getScrapReportProcessUsingPOST
*/
export default function fetchMethod(options: { data: IOutputClassReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultOutputLineChartReturnsVOGoodAndScrapReportReturnsVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getScrapReportProcess",
            method: "post",
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
/** JSONResult«产出类折线图返回VO«良品与报废报表返回VO»» */
export interface IJSONResultOutputLineChartReturnsVOGoodAndScrapReportReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOutputLineChartReturnsVOGoodAndScrapReportReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 产出类折线图返回VO«良品与报废报表返回VO» */
export interface IOutputLineChartReturnsVOGoodAndScrapReportReturnsVO {
    /** 分组数据 */
    groupList?: IOutputLineChartGroupReturnVOGoodAndScrapReportReturnVO[];
    /** 查询班组集 */
    classGroupList?: IIdNameNumberVO[];
    /** 查询工序集 */
    processList?: IIdNameNumberVO[];
    /** 查询物料集 */
    majorDataList?: IIdNameNumberVO[];
    /** 是否和预期查询相符 Y-相符，不显示异常信息；N-不相符，显示异常信息 */
    isConsistent?: EOutputLineChartReturnsVOGoodAndScrapReportReturnsVO_isConsistent;
    /** 实际查询时间 - 开始 */
    actualBeginTime?: number;
    /** 实际查询时间 - 结束 */
    actualEndTime?: number;
    /** 实际数据条数 */
    actualDataCount?: number;
}
/** 产出类折线图分组返回VO«良品与报废报表返回VO» */
export interface IOutputLineChartGroupReturnVOGoodAndScrapReportReturnVO {
    /** 数据分组id */
    groupId?: string;
    /** 数据分组名称 */
    groupName?: string;
    /** 数据分组编号 */
    groupCode?: string;
    /** 详细点数据 */
    pointList?: IGoodAndScrapReportReturnedToVO[];
}
/** 良品与报废报表返回VO */
export interface IGoodAndScrapReportReturnedToVO {
    /** 数据时间（时间戳），根据当前选中的时间粒度去转换时间 */
    dataTime?: number;
    /** 合格加报废总量 */
    totalQuantity?: number;
    /** 合格数量 */
    produceQuantity?: number;
    /** 合格率 */
    produceRatio?: number;
    /** 合格率-大屏展示 */
    produceRatioScale2?: number;
    /** 报废数量 */
    scrapQuantity?: number;
    /** 报废率 */
    scrapRatio?: number;
    /** 报废率-大屏展示 */
    scrapRatioScale2?: number;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
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

export enum EOutputLineChartReturnsVOGoodAndScrapReportReturnsVO_isConsistent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
