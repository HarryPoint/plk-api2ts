import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/维联打印模板相关/listAllUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListVirtualizedBatchPrintTemplateResponseObject1>(
        {
            url: "/masterdata-service/weiLianLotPrintTemplate/listAll",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«维联批次打印模板响应对象»»_1 */
export interface IJSONResultListVirtualizedBatchPrintTemplateResponseObject1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IVivBatchPrintTemplateResponseObject2[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 维联批次打印模板响应对象_2 */
export interface IVivBatchPrintTemplateResponseObject2 {
    /** id */
    id?: number;
    /** 模板名称 */
    name?: string;
    /** 模板类型 */
    type?: EVivBatchPrintTemplateResponseObject2_type;
    /** 打印模板 */
    printTemplate?: string;
}

export enum EVivBatchPrintTemplateResponseObject2_type {
    /** 一维码 */
    BARCODE = "BARCODE",
    /** 二维码 */
    QRCODE = "QRCODE"
}
