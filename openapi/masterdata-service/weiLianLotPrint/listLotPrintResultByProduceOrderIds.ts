import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/维联批次打印相关/listLotPrintResultByProduceOrderIdsUsingPOST
*/
export default function fetchMethod(options: { data: string }, extraOptions?: any) {
    return http<IJSONResultListPrintsTemplateResponseObjectsForTheVTLBatch>(
        {
            url: "/masterdata-service/weiLianLotPrint/listLotPrintResultByProduceOrderIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«维联批次打印模板响应对象»» */
export interface IJSONResultListPrintsTemplateResponseObjectsForTheVTLBatch {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IVivBatchPrintTemplateResponseObject1[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 维联批次打印模板响应对象_1 */
export interface IVivBatchPrintTemplateResponseObject1 {
    /** 批次数量 */
    actualTotalCount?: number;
    /** 批次号 */
    lotNo?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 打印次数 */
    printCount?: number;
    /** 打印模板 */
    printTemplate?: string;
    /** id */
    printTemplateId?: string;
    /** 模板类型 */
    type?: EVivBatchPrintTemplateResponseObject1_type;
    /** 条码值 */
    universalCode?: string;
}

export enum EVivBatchPrintTemplateResponseObject1_type {
    /** 一维码 */
    BARCODE = "BARCODE",
    /** 二维码 */
    QRCODE = "QRCODE"
}
