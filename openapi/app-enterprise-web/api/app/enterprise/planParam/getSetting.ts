import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/业务参数相关/getSettingUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultSchedulingParameterVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/planParam/getSetting",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«排产参数VO» */
export interface IJSONResultSchedulingParameterVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISchedulingParametersVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 排产参数VO */
export interface ISchedulingParametersVO {
    /** 排产方式值 */
    planTypeValue?: number;
    /** 正排考虑因素值 */
    ascFactorValue?: number;
    /** 倒排考虑因素值 */
    descFactorValue?: number;
    /** 是否开启日产能配置 */
    enableDayCapacity?: ESchedulingParametersVO_enableDayCapacity;
    /** 日产能数量 */
    capacityDayQuantity?: number;
    /** 每日工作小时数 */
    dayWorkHours?: number;
    /** 是否开启锁定天数 */
    enableLockDay?: ESchedulingParametersVO_enableLockDay;
    /** 锁定天数 */
    lockDay?: number;
    /** 是否展示预估工费、默认不展示 */
    isShowForecastLaborCost?: ESchedulingParametersVO_isShowForecastLaborCost;
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: ESchedulingParametersVO_isGtPlannedQuantity;
    /** 是否自动进料 */
    isAutoMoveIn?: ESchedulingParametersVO_isAutoMoveIn;
    /** 是否自动下发任务 */
    isRobotIssue?: ESchedulingParametersVO_isRobotIssue;
    /** 排产方式 */
    producePlanType?: ESchedulingParametersVO_producePlanType;
    /** 排产开始时间订单流程表单字段code */
    producePlanStartTimeFormFieldCode?: string;
    /** 排产开始时间订单流程表单字段序列号 */
    producePlanStartTimeFormFieldSerialNo?: string;
    /** 排产结束时间订单流程表单字段code */
    producePlanEndTimeFormFieldCode?: string;
    /** 排产结束时间订单流程表单字段序列号 */
    producePlanEndTimeFormFieldSerialNo?: string;
    /** 是否入库前先领料 */
    isBeforeStorageIssuanceMaterial?: ESchedulingParametersVO_isBeforeStorageIssuanceMaterial;
}

export enum ESchedulingParametersVO_enableDayCapacity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersVO_enableLockDay {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersVO_isShowForecastLaborCost {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersVO_isGtPlannedQuantity {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersVO_isAutoMoveIn {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersVO_isRobotIssue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESchedulingParametersVO_producePlanType {
    /** 未排产 */
    NOT_PLAN = "NOT_PLAN",
    /** 自动排产 */
    AUTO = "AUTO",
    /** 手动排产 */
    HAND = "HAND",
    /** 模糊排产 */
    VAGUE = "VAGUE"
}

export enum ESchedulingParametersVO_isBeforeStorageIssuanceMaterial {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
