import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/盘盈单相关/queryCanInvalidOrdersUsingPOST_1
*/
export default function fetchMethod(options: { data: IIdCollectionInformation }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/masterdata-service/inventoryProfitOrder/queryCanInvalidOrders",
            method: "post",
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
