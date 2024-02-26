import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/getBeforeRoutingStepsUsingGET_1
*/
export default function fetchMethod(options: { params: { taskId?: string; enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultListProcessPathStepsSelectVO>(
        {
            url: "/masterdata-service/produceTask/getBeforeRoutingSteps",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工艺路径步骤选择VO»» */
export interface IJSONResultListProcessPathStepsSelectVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessPathStepSelectVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 工艺路径步骤选择VO */
export interface IProcessPathStepSelectVO {
    /** id */
    id?: number;
    /** 对应步骤 */
    routingStep?: number;
    /** 对应工序id */
    processId?: number;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
}
