import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/委外加工管理/getProduceRoutingStepSelectorUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessPathStepsSelectVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceEntrust/getProduceRoutingStepSelector",
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
