import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/订单排产任务下发相关/robotIssueDataCheckUsingPOST
*/
export default function fetchMethod(data: IAutomaticProductionSchedulingSendsTaskDataVerificationRequestDTO, extraOptions?: any) {
    return http<IJSONResultAutomaticProductionOrderSchedulingTaskDataVerificationReturnDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrderIssue/robotIssueDataCheck",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 生产订单自动排产下发任务数据校验请求DTO */
export interface IAutomaticProductionSchedulingSendsTaskDataVerificationRequestDTO {
    /** 生产订单ids */
    produceOrderIds: number[];
}
/** JSONResult«生产订单自动排产下发任务数据校验返回DTO» */
export interface IJSONResultAutomaticProductionOrderSchedulingTaskDataVerificationReturnDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IAutomaticProductionOrderSchedulingTaskDataVerificationReturnDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 生产订单自动排产下发任务数据校验返回DTO */
export interface IAutomaticProductionOrderSchedulingTaskDataVerificationReturnDTO {
    /** 排产开始时间订单流程表单字段名称 */
    producePlanStartTimeFormFieldName: string;
    /** 排产结束时间订单流程表单字段名称 */
    producePlanEndTimeFormFieldName: string;
    /** 数据校验明细 */
    dataCheckItems: IAutomaticProductionOrderSchedulingTaskDataVerificationDetailsAreReturnedToTheDTO[];
}
/** 生产订单自动排产下发任务数据校验明细返回DTO */
export interface IAutomaticProductionOrderSchedulingTaskDataVerificationDetailsAreReturnedToTheDTO {
    /** 生产订单id */
    produceOrderId: number;
    /** 生产订单编号 */
    produceOrderCode: string;
    /** 物料名称 */
    materialName: string;
    /** 校验失败错误类型 */
    failType: string;
}
