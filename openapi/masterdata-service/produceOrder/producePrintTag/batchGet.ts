import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/batchGetProducePrintTagUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListProducePrintTagVO>(
        {
            url: "/masterdata-service/produceOrder/producePrintTag/batchGet",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProducePrintTagVO»» */
export interface IJSONResultListProducePrintTagVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProducePrintTagVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProducePrintTagVO */
export interface IProducePrintTagVO {
    /** 生产订单ID */
    produceOrderId?: string;
    /** 生产订单编码 */
    produceOrderCode?: string;
    /** 打印信息列表 */
    printFieldDataList?: IProducePrintTagFieldDataVO[];
}
/** ProducePrintTagFieldDataVO */
export interface IProducePrintTagFieldDataVO {
    /** 自定义字段编码 */
    code?: string;
    /** 自定义字段名称 */
    name?: string;
    /** 值 */
    value?: string;
}
