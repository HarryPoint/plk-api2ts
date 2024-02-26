import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/排产全局参数配置相关/saveSettingUsingPOST
*/
export default function fetchMethod(options: { data: ISchedulingParametersDTOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/planGlobalConfig/saveSetting",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 排产参数DTO */
export interface ISchedulingParametersDTO {
    /** 排产方式值 */
    planTypeValue?: number;
    /** 正排考虑因素值 */
    ascFactorValue?: number;
    /** 倒排考虑因素值 */
    descFactorValue?: number;
    /** 是否开启日产能配置 */
    enableDayCapacity?: ESchedulingParametersDTO_enableDayCapacity;
    /** 日产能数量 */
    capacityDayQuantity?: number;
    /** 每日工作小时数 */
    dayWorkHours?: number;
    /** 是否开启锁定天数 */
    enableLockDay?: ESchedulingParametersDTO_enableLockDay;
    /** 锁定天数 */
    lockDay?: number;
    /** 是否展示预估工费/默认不展示 */
    isShowForecastLaborCost?: ESchedulingParametersDTO_isShowForecastLaborCost;
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: ESchedulingParametersDTO_isGtPlannedQuantity;
    /** 是否自动进料 */
    isAutoMoveIn?: ESchedulingParametersDTO_isAutoMoveIn;
    /** 是否自动下发任务 */
    isRobotIssue?: ESchedulingParametersDTO_isRobotIssue;
    /** 排产方式 */
    producePlanType?: ESchedulingParametersDTO_producePlanType;
    /** 排产开始时间订单流程表单字段code */
    producePlanStartTimeFormFieldCode?: string;
    /** 排产开始时间订单流程表单字段序列号 */
    producePlanStartTimeFormFieldSerialNo?: string;
    /** 排产结束时间订单流程表单字段code */
    producePlanEndTimeFormFieldCode?: string;
    /** 排产结束时间订单流程表单字段序列号 */
    producePlanEndTimeFormFieldSerialNo?: string;
    /** 是否入库前先领料 */
    isBeforeStorageIssuanceMaterial?: ESchedulingParametersDTO_isBeforeStorageIssuanceMaterial;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum ESchedulingParametersDTO_enableDayCapacity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersDTO_enableLockDay {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersDTO_isShowForecastLaborCost {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersDTO_isGtPlannedQuantity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersDTO_isAutoMoveIn {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersDTO_isRobotIssue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersDTO_producePlanType {
    /** 未排产 */
    NOT_PLAN = "NOT_PLAN",
    /** 自动排产 */
    AUTO = "AUTO",
    /** 手动排产 */
    HAND = "HAND",
    /** 模糊排产 */
    VAGUE = "VAGUE"
}

export enum ESchedulingParametersDTO_isBeforeStorageIssuanceMaterial {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
