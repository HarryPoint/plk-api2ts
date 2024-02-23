import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/排产全局参数配置相关/getSettingUsingPOST
export default function fetchMethod(params: { enterpriseId: number }) {
    return post<IJSONResultSchedulingParameterVO>({
      url: "/masterdata-service/planGlobalConfig/getSetting",
      params,
    });
}
// JSONResult«排产参数VO»
export interface IJSONResultSchedulingParameterVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISchedulingParametersVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 排产参数VO
export interface ISchedulingParametersVO {
    // 排产方式值
    planTypeValue: number;
    // 正排考虑因素值
    ascFactorValue: number;
    // 倒排考虑因素值
    descFactorValue: number;
    // 是否开启日产能配置
    enableDayCapacity: string;
    // 日产能数量
    capacityDayQuantity: number;
    // 每日工作小时数
    dayWorkHours: number;
    // 是否开启锁定天数
    enableLockDay: string;
    // 锁定天数
    lockDay: number;
    // 是否展示预估工费、默认不展示
    isShowForecastLaborCost: string;
    // 进出料数量是否大于计划数量
    isGtPlannedQuantity: string;
    // 是否自动进料
    isAutoMoveIn: string;
    // 是否自动下发任务
    isRobotIssue: string;
    // 排产方式
    producePlanType: string;
    // 排产开始时间订单流程表单字段code
    producePlanStartTimeFormFieldCode: string;
    // 排产开始时间订单流程表单字段序列号
    producePlanStartTimeFormFieldSerialNo: string;
    // 排产结束时间订单流程表单字段code
    producePlanEndTimeFormFieldCode: string;
    // 排产结束时间订单流程表单字段序列号
    producePlanEndTimeFormFieldSerialNo: string;
    // 是否入库前先领料
    isBeforeStorageIssuanceMaterial: string;
}
