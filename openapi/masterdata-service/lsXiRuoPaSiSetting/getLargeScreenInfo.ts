import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/西偌帕斯大屏相关/getLsUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultSilopusBigScreenReturnVO>(
        {
            url: "/masterdata-service/lsXiRuoPaSiSetting/getLargeScreenInfo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«西偌帕斯大屏返回VO» */
export interface IJSONResultSilopusBigScreenReturnVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISilopusBigScreenBackToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 西偌帕斯大屏返回VO */
export interface ISilopusBigScreenBackToVO {
    /** 24小时关键指标 */
    dayIndexWork?: ISilopusLargeScreenKeyIndicatorVO;
    /** 14天 直通率 */
    fpyRates?: ISilopusBigScreen14DayPassRateVO[];
    /** 主要产品14天 直通率 */
    majorDataFpyRate?: IOutputLineChartGroupReturnVOPassThroughReportReturnVO[];
    /** 本月关键指标 */
    monthIndexWork?: ISilopusLargeScreenKeyIndicatorVO;
    /** 7天 计划VS实际产出 */
    planProduces?: ISilopusBigScreen7DayPlanVSActualOutputVO[];
    /** 主要工序7天良品率 */
    processGoodProductRate?: IOutputLineChartGroupReturnVOGoodAndScrapReportReturnVO[];
    /** 主要工序24小时产出 */
    processProduces?: ISilopusLargeScreenMainProcess24HoursOutputVO[];
    /** 不良明细前五 */
    scrapTypes?: ISilopusBigScreenBadDetailTopFiveOutputVO[];
}
/** 西偌帕斯大屏关键指标VO */
export interface ISilopusLargeScreenKeyIndicatorVO {
    /** 直通率 */
    fpyRate?: number;
    /** 报废数 */
    scrapQuantity?: number;
}
/** 西偌帕斯大屏14天 直通率VO */
export interface ISilopusBigScreen14DayPassRateVO {
    /** 数据时间（时间戳） */
    dataTime?: number;
    /** 直通率 */
    fpyRate?: number;
}
/** 产出类折线图分组返回VO«直通报表返回VO» */
export interface IOutputLineChartGroupReturnVOPassThroughReportReturnVO {
    /** 数据分组编号 */
    groupCode?: string;
    /** 数据分组id */
    groupId?: string;
    /** 数据分组名称 */
    groupName?: string;
    /** 详细点数据 */
    pointList?: IThePassThroughReportReturnsVO[];
}
/** 直通报表返回VO */
export interface IThePassThroughReportReturnsVO {
    /** 最后工序合格产出 */
    completeProduceQuantity?: number;
    /** 数据时间（时间戳），根据当前选中的时间粒度去转换时间 */
    dataTime?: number;
    /** 直通率 */
    fpyRatio?: number;
    /** 直通率-大屏展示 */
    fpyRatioScale2?: number;
    /** 所有工序报废 */
    scrapQuantity?: number;
}
/** 西偌帕斯大屏7天计划VS实际产出VO */
export interface ISilopusBigScreen7DayPlanVSActualOutputVO {
    /** 数据时间（时间戳） */
    dataTime?: number;
    /** 计划数 */
    planQuantity?: number;
    /** 实际产出数 */
    produceQuantity?: number;
}
/** 产出类折线图分组返回VO«良品与报废报表返回VO» */
export interface IOutputLineChartGroupReturnVOGoodAndScrapReportReturnVO {
    /** 数据分组编号 */
    groupCode?: string;
    /** 数据分组id */
    groupId?: string;
    /** 数据分组名称 */
    groupName?: string;
    /** 详细点数据 */
    pointList?: IGoodAndScrapReportReturnedToVO[];
}
/** 良品与报废报表返回VO */
export interface IGoodAndScrapReportReturnedToVO {
    /** 数据时间（时间戳），根据当前选中的时间粒度去转换时间 */
    dataTime?: number;
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
    /** 合格加报废总量 */
    totalQuantity?: number;
}
/** 西偌帕斯大屏主要工序24小时产出VO */
export interface ISilopusLargeScreenMainProcess24HoursOutputVO {
    /** 工序编号 */
    processCode?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 产出数 */
    produceQuantity?: number;
    /** 产出目标数 */
    produceTargetQuantity?: number;
}
/** 西偌帕斯大屏不良明细前五产出VO */
export interface ISilopusBigScreenBadDetailTopFiveOutputVO {
    /** 异常分类编号 */
    produceAbnormalCategoryCode?: string;
    /** 异常分类id */
    produceAbnormalCategoryId?: string;
    /** 异常分类名称 */
    produceAbnormalCategoryName?: string;
    /** 报废数 */
    scrapQuantity?: number;
}
