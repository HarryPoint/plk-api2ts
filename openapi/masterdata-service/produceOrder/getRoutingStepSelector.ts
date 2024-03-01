import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/getRoutingStepSelectorUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionProcessPathStepProcessResponseDTO>(
        {
            url: "/masterdata-service/produceOrder/getRoutingStepSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产工艺路径步骤工序响应 DTO»» */
export interface IJSONResultListProductionProcessPathStepProcessResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionProcessPathStepsProcessResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产工艺路径步骤工序响应 DTO */
export interface IProductionProcessPathStepsProcessResponseDTO {
    /** 工艺路径步骤id */
    id?: string;
    /** 工序 */
    process?: ITheProcessRespondsToTheDTO;
    /** 对应步骤 */
    routingStep?: number;
}
/** 工序响应 DTO */
export interface ITheProcessRespondsToTheDTO {
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
}
