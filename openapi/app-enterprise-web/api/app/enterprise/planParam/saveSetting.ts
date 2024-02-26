import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/业务参数相关/saveSettingUsingPOST
*/
export default function fetchMethod(options: { data: ISchedulingParametersDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/planParam/saveSetting",
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
    enableDayCapacity?: ('Y' | 'N');
    /** 日产能数量 */
    capacityDayQuantity?: number;
    /** 每日工作小时数 */
    dayWorkHours?: number;
    /** 是否开启锁定天数 */
    enableLockDay?: ('Y' | 'N');
    /** 锁定天数 */
    lockDay?: number;
    /** 是否展示预估工费/默认不展示 */
    isShowForecastLaborCost?: ('Y' | 'N');
    /** 进出料数量是否大于计划数量 */
    isGtPlannedQuantity?: ('Y' | 'N');
    /** 是否自动进料 */
    isAutoMoveIn?: ('Y' | 'N');
    /** 是否自动下发任务 */
    isRobotIssue?: ('Y' | 'N');
    /** 排产方式 */
    producePlanType?: ('NOT_PLAN' | 'AUTO' | 'HAND' | 'VAGUE');
    /** 排产开始时间订单流程表单字段code */
    producePlanStartTimeFormFieldCode?: string;
    /** 排产开始时间订单流程表单字段序列号 */
    producePlanStartTimeFormFieldSerialNo?: string;
    /** 排产结束时间订单流程表单字段code */
    producePlanEndTimeFormFieldCode?: string;
    /** 排产结束时间订单流程表单字段序列号 */
    producePlanEndTimeFormFieldSerialNo?: string;
    /** 是否入库前先领料 */
    isBeforeStorageIssuanceMaterial?: ('Y' | 'N');
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
