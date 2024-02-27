import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产事件管理/getProduceAbnormalCategoryCountListUsingPOST
*/
export default function fetchMethod(options: { data: IProductionExceptionTypeStatisticsVO1, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionExceptionTypeStatisticsVO>(
        {
            url: "/masterdata-service/produceHandle/getProduceAbnormalCategoryCountList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产异常类型统计VO_1 */
export interface IProductionExceptionTypeStatisticsVO1 {
    /** 所属分类 */
    type?: EProductionExceptionTypeStatisticsVO1_type;
    /** 处理状态 */
    status?: EProductionExceptionTypeStatisticsVO1_status;
    /** 业务类型 */
    businessType?: EProductionExceptionTypeStatisticsVO1_businessType;
    /** 所属物料ids */
    materialIds?: string[];
    /** 开始时间 */
    startTime?: number;
    /** 结束时间 */
    endTime?: number;
}
/** JSONResult«List«生产异常类型统计VO»» */
export interface IJSONResultListProductionExceptionTypeStatisticsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionExceptionTypeStatisticsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产异常类型统计VO */
export interface IProductionExceptionTypeStatisticsVO {
    /** 异常类型id */
    categoryId?: string;
    /** 异常类型名 */
    categoryName?: string;
    /** 异常类型数量 */
    quantity?: number;
}

export enum EProductionExceptionTypeStatisticsVO1_type {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 扣留 */
    HOLD = "HOLD",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 上报反馈 */
    REPORT = "REPORT",
    /** 返工 */
    BACK = "BACK",
    /** 撤销任务 */
    CANCEL_TASK = "CANCEL_TASK"
}

export enum EProductionExceptionTypeStatisticsVO1_status {
    /** 待处理 */
    CREATED = "CREATED",
    /** 已确认 */
    SURE = "SURE",
    /** 已忽略 */
    IGNORE = "IGNORE",
    /** 放行 */
    RELEASE = "RELEASE",
    /** 返工 */
    BACK = "BACK",
    /** 处理中 */
    HANDING = "HANDING",
    /** 处理完成 */
    ALL_HANDLE = "ALL_HANDLE",
    /** 批准 */
    APPROVAL = "APPROVAL",
    /** 拒绝 */
    REFUSE = "REFUSE",
    /** 撤销 */
    REVOKE = "REVOKE",
    /** 完成 */
    COMPLETE = "COMPLETE",
    /** 取消 */
    CANCEL = "CANCEL"
}

export enum EProductionExceptionTypeStatisticsVO1_businessType {
    /** 进出站 */
    IN_OUT = "IN_OUT",
    /** 质检 */
    QUALITY = "QUALITY",
    /** 异常 */
    ABNORMAL = "ABNORMAL",
    /** 系统 */
    SYSTEM = "SYSTEM"
}
