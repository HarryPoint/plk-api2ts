import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产事件管理/getTypeStatusSelectorUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListProductionProcessTypeStatusLevel2LinkageVO>(
        {
            url: "/masterdata-service/produceHandle/getTypeStatusSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产处理类型状态二级联动VO»» */
export interface IJSONResultListProductionProcessTypeStatusLevel2LinkageVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionProcessingTypeStatusSecondLevelLinkageVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产处理类型状态二级联动VO */
export interface IProductionProcessingTypeStatusSecondLevelLinkageVO {
    /** 异常分类 */
    type?: EProductionProcessingTypeStatusSecondLevelLinkageVO_type;
    /** 异常分类描述 */
    typeDesc?: string;
    /** 关联状态集 */
    statusList?: IProductionProcessingStatusVO[];
}
/** 生产处理状态VO */
export interface IProductionProcessingStatusVO {
    /** 异常状态 */
    status?: EProductionProcessingStatusVO_status;
    /** 异常状态描述 */
    statusDesc?: string;
}

export enum EProductionProcessingTypeStatusSecondLevelLinkageVO_type {
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
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 申请质检 */
    QUALITY_APPLY = "QUALITY_APPLY",
    /** 任务下发 */
    TASK_ISSUE = "TASK_ISSUE",
    /** 委外加工 */
    PRODUCE_ENTRUST = "PRODUCE_ENTRUST",
    /** 任务分配 */
    TASK_ASSIGN = "TASK_ASSIGN"
}

export enum EProductionProcessingStatusVO_status {
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
