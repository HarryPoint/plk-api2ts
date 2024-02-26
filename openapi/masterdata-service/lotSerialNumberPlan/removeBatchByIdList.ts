import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/批次方案相关/removeBatchByIdListUsingPOST
*/
export default function fetchMethod(options: { data: ILotSerialNumberPlanBatchRemoveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/lotSerialNumberPlan/removeBatchByIdList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** LotSerialNumberPlanBatchRemoveRequestDTO */
export interface ILotSerialNumberPlanBatchRemoveRequestDTO {
    /** idList */
    idList?: number[];
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring1_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}
