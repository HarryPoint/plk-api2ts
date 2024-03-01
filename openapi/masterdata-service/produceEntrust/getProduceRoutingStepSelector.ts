import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/委外加工管理/getProduceRoutingStepSelectorUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string; EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessPathStepsSelectVO>(
        {
            url: "/masterdata-service/produceEntrust/getProduceRoutingStepSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工艺路径步骤选择VO»» */
export interface IJSONResultListProcessPathStepsSelectVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessPathStepSelectVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺路径步骤选择VO */
export interface IProcessPathStepSelectVO {
    /** id */
    id?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 对应步骤 */
    routingStep?: number;
}
