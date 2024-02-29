import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/processMatchStandardTechnologyTaskUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/produceOrder/processMatchStandardTechnologyTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
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
    ts?: string;
}

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}
