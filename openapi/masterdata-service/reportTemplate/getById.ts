import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/报表模板/getByIdUsingPOST_3
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultReportTemplateDTO>(
        {
            url: "/masterdata-service/reportTemplate/getById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ReportTemplateDTO» */
export interface IJSONResultReportTemplateDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IReportTemplateDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ReportTemplateDTO */
export interface IReportTemplateDTO {
    /** 开始时间字段编码 */
    beginTimeFieldCode?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 结束时间字段编码 */
    endTimeFieldCode?: string;
    /** 数据筛选条件 */
    exportParam?: Record<string, Record<string, any>>;
    /** ID */
    id?: string;
    /** 报表类型 */
    report?: EReportTemplateDTO_report;
    /** 报表统计时间描述 */
    reportStatisticsTimeRangeDesc?: string;
    /** 显示模板条件添加请求列表 */
    showFilterConditionList?: IReportTemplateConditionDTO[];
    /** 模板名称 */
    templateName?: string;
    /** 报表统计时间范围添加请求 */
    timeRange?: IReportStatisticsTimeRangeDTO;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}
/** ReportTemplateConditionDTO */
export interface IReportTemplateConditionDTO {
    /** 条件字段编码 */
    code?: string;
    /** ID */
    id?: string;
    /** 条件字段值的显示名称 */
    showName?: string;
    /** 条件字段值 */
    value?: string;
}
/** ReportStatisticsTimeRangeDTO */
export interface IReportStatisticsTimeRangeDTO {
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
    /** ID */
    id?: string;
    /** 截止时间为月末 */
    isDeadlineAtEndOfMonth?: EReportStatisticsTimeRangeDTO_isDeadlineAtEndOfMonth;
    /** 截止时间为季度末 */
    isDeadlineAtEndOfQuarter?: EReportStatisticsTimeRangeDTO_isDeadlineAtEndOfQuarter;
    /** 起始时间为月末 */
    isStartAtEndOfMonth?: EReportStatisticsTimeRangeDTO_isStartAtEndOfMonth;
    /** 起始时间为季度末 */
    isStartAtEndOfQuarter?: EReportStatisticsTimeRangeDTO_isStartAtEndOfQuarter;
    /** 发送邮件前 - 开始配置， 如前1天、前1周、前N月、前N季度、前N年 */
    sendingEmailBeforeBegin?: number;
    /** 发送邮件前 - 结束配置， 如前1天、前1周、前N月、前N季度、前N年 */
    sendingEmailBeforeEnd?: number;
    /** 发邮件前的时间模式（只有timeMode = SENDING_EMAIL_BEFORE该配置才是有效配置）- 今天、本周、本月、本季度、本年 */
    sendingEmailBeforeTimeMode?: EReportStatisticsTimeRangeDTO_sendingEmailBeforeTimeMode;
    /** 时间模式- 今天、本周、本月、本季度、本年、发邮件前 */
    timeMode?: EReportStatisticsTimeRangeDTO_timeMode;
}

export enum EReportTemplateDTO_report {
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

export enum EReportStatisticsTimeRangeDTO_isDeadlineAtEndOfMonth {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EReportStatisticsTimeRangeDTO_isDeadlineAtEndOfQuarter {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EReportStatisticsTimeRangeDTO_isStartAtEndOfMonth {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EReportStatisticsTimeRangeDTO_isStartAtEndOfQuarter {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EReportStatisticsTimeRangeDTO_sendingEmailBeforeTimeMode {
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

export enum EReportStatisticsTimeRangeDTO_timeMode {
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
