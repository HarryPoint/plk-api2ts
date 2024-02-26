import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/维联批次打印相关/checkPrintProduceOrderIdsUsingPOST
*/
export default function fetchMethod(options: { data: string }, extraOptions?: any) {
    return http<IJSONResultVirtualizedBatchPrintTemplateResponseObject>(
        {
            url: "/masterdata-service/weiLianLotPrint/checkPrintProduceOrderIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«维联批次打印模板响应对象» */
export interface IJSONResultVirtualizedBatchPrintTemplateResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IVTLBatchPrintsTemplateResponseObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 维联批次打印模板响应对象 */
export interface IVTLBatchPrintsTemplateResponseObjects {
    /** 没有配置打印模板的生产订单编号 */
    notConfigPrintTemplateProduceOrderCodes?: string[];
    /** 没有批次的生产订单编号 */
    notLotProduceOrderCodes?: string[];
    /** 不能生成一维码的生产订单编号 */
    canNotGenerateBarcodeProduceOrderCodes?: string[];
    /** 校验通过的生产订单编号 */
    checkPassProduceOrderCodes?: string[];
}
