import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/盘亏单相关/queryCanInvalidOrdersUsingPOST
*/
export default function fetchMethod(options: { data: IIdCollectionInformation }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/masterdata-service/inventoryLossesOrder/queryCanInvalidOrders",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: string[];
}
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
