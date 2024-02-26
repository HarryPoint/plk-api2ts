import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/物料收发汇总报表相关/getBillFlowPathCodeListUsingGET
*/
export default function fetchMethod(options: { params: { masterDataFlowPathCode?: string } }, extraOptions?: any) {
    return http<IJSONResultResponseObjectOfTheBillListForReceivingAndSendingMaterials>(
        {
            url: "/app-enterprise-web/api/app/enterprise/warehouseMaterialStorageInOutReport/getBillFlowPathCodeList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«物料收发单据列表响应对象» */
export interface IJSONResultResponseObjectOfTheBillListForReceivingAndSendingMaterials {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialReceiptAndReceiptListResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 物料收发单据列表响应对象 */
export interface IMaterialReceiptAndReceiptListResponseObject {
    /** 列表单据 */
    billHeadCode?: IMaterialReceiptAndDeliveryDocumentListDocumentResponseObject[];
    /** 选择单据 */
    billSelectCode?: IMaterialReceiptAndDeliveryDocumentListDocumentResponseObject[];
}
/** 物料收发单据列表单据响应对象 */
export interface IMaterialReceiptAndDeliveryDocumentListDocumentResponseObject {
    /** id */
    id?: number;
    /** code */
    code?: string;
    /** 单据名称 */
    name?: string;
    /** 出入库类型 */
    storageLogType?: ('IN' | 'OUT' | 'CHECK' | 'LOCK' | 'SCRAP');
}
