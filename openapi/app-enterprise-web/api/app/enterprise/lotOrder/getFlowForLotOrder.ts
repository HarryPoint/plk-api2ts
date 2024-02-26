import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产批次订单相关/getFlowForLotUsingGET
*/
export default function fetchMethod(options: { params: { flowType?: string; lotOrderId?: number; produceOrderId?: number } }, extraOptions?: any) {
    return http<IJSONResultListBasicInformationAboutBatchOrderFlowRespondsToTheDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotOrder/getFlowForLotOrder",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«批次订单流水基本信息响应DTO»» */
export interface IJSONResultListBasicInformationAboutBatchOrderFlowRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBatchOrderFlowBasicInformationResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 批次订单流水基本信息响应DTO */
export interface IBatchOrderFlowBasicInformationResponseDTO {
    /** id */
    id?: number;
    /** 流水类型 */
    flowType?: string;
    /** 当前流水类型描述 */
    flowTypeDesc?: string;
    /** 操作时间 */
    createTime?: string;
    /** 描述 */
    remark?: string;
}
