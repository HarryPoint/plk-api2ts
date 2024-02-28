import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16400/doc.html#/default/批次方案相关/removeBatchByIdListUsingPOST
*/
export default function fetchMethod(options: { data: ILotSerialNumberPlanBatchRemoveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotSerialNumberPlan/removeBatchByIdList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** LotSerialNumberPlanBatchRemoveRequestDTO */
export interface ILotSerialNumberPlanBatchRemoveRequestDTO {
    /** idList */
    idList?: string[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
