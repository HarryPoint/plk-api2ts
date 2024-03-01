import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/报表模板/addUsingPOST_6
*/
export default function fetchMethod(options: { data: IReportTemplateAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/reportTemplate/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ReportTemplateAddRequestDTO */
export interface IReportTemplateAddRequestDTO {
    /** 开始时间字段编码 */
    beginTimeFieldCode?: string;
    /** 结束时间字段编码 */
    endTimeFieldCode?: string;
    /** 导出参数 */
    exportParam?: Record<string, Record<string, any>>;
    /** 报表类型 */
    report?: EReportTemplateAddRequestDTO_report;
    /** 显示模板条件添加请求列表 */
    showFilterConditionList?: IReportTemplateConditionAddRequestDTO[];
    /** 模板名称 */
    templateName?: string;
    /** 报表统计时间范围添加请求 */
    timeRange?: IReportStatisticsTimeRangeAddRequestDTO;
}
/** ReportTemplateConditionAddRequestDTO */
export interface IReportTemplateConditionAddRequestDTO {
    /** 条件字段编码 */
    code?: string;
    /** 条件字段值的显示名称 */
    showName?: string;
    /** 条件字段值 */
    value?: string;
}
/** ReportStatisticsTimeRangeAddRequestDTO */
export interface IReportStatisticsTimeRangeAddRequestDTO {
    /** 发送邮件前 - 开始天 */
    beginDay?: number;
    /** 开始月份 */
    beginMonth?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 开始周号 */
    beginWeekNo?: number;
    /** 发送邮件前 - 结束天 */
    endDay?: number;
    /** 结束月份 */
    endMonth?: number;
    /** 结束时间 */
    endTime?: string;
    /** 结束周号 */
    endWeekNo?: number;
    /** 截止时间为月末 */
    isDeadlineAtEndOfMonth?: EReportStatisticsTimeRangeAddRequestDTO_isDeadlineAtEndOfMonth;
    /** 截止时间为季度末 */
    isDeadlineAtEndOfQuarter?: EReportStatisticsTimeRangeAddRequestDTO_isDeadlineAtEndOfQuarter;
    /** 起始时间为月末 */
    isStartAtEndOfMonth?: EReportStatisticsTimeRangeAddRequestDTO_isStartAtEndOfMonth;
    /** 起始时间为季度末 */
    isStartAtEndOfQuarter?: EReportStatisticsTimeRangeAddRequestDTO_isStartAtEndOfQuarter;
    /** 发送邮件前 - 开始配置， 如前1天、前1周、前N月、前N季度、前N年 */
    sendingEmailBeforeBegin?: number;
    /** 发送邮件前 - 结束配置， 如前1天、前1周、前N月、前N季度、前N年 */
    sendingEmailBeforeEnd?: number;
    /** 发邮件前的时间模式（只有timeMode = SENDING_EMAIL_BEFORE该配置才是有效配置）- 今天、本周、本月、本季度、本年 */
    sendingEmailBeforeTimeMode?: EReportStatisticsTimeRangeAddRequestDTO_sendingEmailBeforeTimeMode;
    /** 时间模式- 今天、本周、本月、本季度、本年、发邮件前 */
    timeMode?: EReportStatisticsTimeRangeAddRequestDTO_timeMode;
}
/** JSONResult«string»_1 */
export interface IJSONResultString1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString1_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EReportTemplateAddRequestDTO_report {
    /** 生产日报 */
    PRODUCE_DAY_REPORT = "PRODUCE_DAY_REPORT",
    /** 良品报废数据表 */
    QUALITY_GOOD_SCRAP_REPORT = "QUALITY_GOOD_SCRAP_REPORT",
    /** 销售发货分析表 */
    SALES_DELIVER_REPORT = "SALES_DELIVER_REPORT",
    /** 寄售损耗分析表 */
    CONSIGNMENT_LOSS_ANALYZE_REPORT = "CONSIGNMENT_LOSS_ANALYZE_REPORT",
    /** 销售结算分析表 */
    CONSIGNMENT_INBOUND_ANALYZE_REPORT = "CONSIGNMENT_INBOUND_ANALYZE_REPORT",
    /** 应收账款分析表 */
    ACCOUNTS_RECEIVABLE_REPORT = "ACCOUNTS_RECEIVABLE_REPORT",
    /** 收款汇总表 */
    COLLECTION_TOTAL_REPORT = "COLLECTION_TOTAL_REPORT",
    /** 售后质量分析表 */
    AFTER_SALES_QUALITY_REPORT = "AFTER_SALES_QUALITY_REPORT",
    /** 订单进度报表 */
    SALES_ORDER_REPORT = "SALES_ORDER_REPORT",
    /** 采购到货统计表 */
    PURCHASE_ARRIVED_STATISTIC_REPORT = "PURCHASE_ARRIVED_STATISTIC_REPORT",
    /** 库存统计（成品）日报表 */
    PRODUCE_STORAGE_REPORT = "PRODUCE_STORAGE_REPORT",
    /** 库存统计（材料）日报表 */
    RAW_STORAGE_REPORT = "RAW_STORAGE_REPORT",
    /** 仓库报废统计表 */
    SCRAP_STORAGE_REPORT = "SCRAP_STORAGE_REPORT",
    /** 订单生产进度报表 */
    PRODUCE_PROGRESS_STATISTICS_REPORT = "PRODUCE_PROGRESS_STATISTICS_REPORT",
    /** 产能利用率报表 */
    PRODUCE_CAPACITY_REPORT = "PRODUCE_CAPACITY_REPORT",
    /** 产出数据报表 */
    PRODUCE_DATA_REPORT = "PRODUCE_DATA_REPORT",
    /** 按班组统计报表 */
    PRODUCE_CLASS_GROUP_REPORT = "PRODUCE_CLASS_GROUP_REPORT",
    /** 按工序统计报表 */
    PRODUCE_PROCESS_REPORT = "PRODUCE_PROCESS_REPORT",
    /** 按物料统计报表 */
    PRODUCE_MATERIAL_REPORT = "PRODUCE_MATERIAL_REPORT",
    /** 工费统计表-明细表报表 */
    PRODUCE_TIME_FEE_DETAIL_REPORT = "PRODUCE_TIME_FEE_DETAIL_REPORT",
    /** 工费统计表-月度统计表报表 */
    PRODUCE_TIME_FEE_MONTH_REPORT = "PRODUCE_TIME_FEE_MONTH_REPORT",
    /** 委外统计报表 */
    PRODUCE_ENTRUST_MAJOR_DATA_REPORT = "PRODUCE_ENTRUST_MAJOR_DATA_REPORT",
    /** 排产订单报表 */
    PRODUCE_ORDER_SCHEDULE_REPORT = "PRODUCE_ORDER_SCHEDULE_REPORT"
}

export enum EReportStatisticsTimeRangeAddRequestDTO_isDeadlineAtEndOfMonth {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EReportStatisticsTimeRangeAddRequestDTO_isDeadlineAtEndOfQuarter {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EReportStatisticsTimeRangeAddRequestDTO_isStartAtEndOfMonth {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EReportStatisticsTimeRangeAddRequestDTO_isStartAtEndOfQuarter {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EReportStatisticsTimeRangeAddRequestDTO_sendingEmailBeforeTimeMode {
    /** 天 */
    DAY = "DAY",
    /** 周 */
    WEEK = "WEEK",
    /** 月 */
    MONTH = "MONTH",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 年 */
    YEAR = "YEAR"
}

export enum EReportStatisticsTimeRangeAddRequestDTO_timeMode {
    /** 今天 */
    DAY = "DAY",
    /** 本周 */
    WEEK = "WEEK",
    /** 本月 */
    MONTH = "MONTH",
    /** 本季度 */
    QUARTER = "QUARTER",
    /** 本年 */
    YEAR = "YEAR",
    /** 发送邮件前 */
    SEND_EMAIL_BEFORE = "SEND_EMAIL_BEFORE"
}

export enum EJSONResultString1_data {
    Y = "Y",
    N = "N"
}
