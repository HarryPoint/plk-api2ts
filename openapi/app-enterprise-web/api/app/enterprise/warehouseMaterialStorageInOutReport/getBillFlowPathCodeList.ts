import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16400/doc.html#/default/物料收发汇总报表相关/getBillFlowPathCodeListUsingGET
*/
export default function fetchMethod(options: { params: { masterDataFlowPathCode?: string } }, extraOptions?: any) {
    return http<IJSONResultResponseObjectOfTheBillListForReceivingAndSendingMaterials>(
        {
            url: "/app-enterprise-web/api/app/enterprise/warehouseMaterialStorageInOutReport/getBillFlowPathCodeList",
            method: "GET",
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
    ts?: string;
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
    id?: string;
    /** code */
    code?: string;
    /** 单据名称 */
    name?: string;
    /** 出入库类型 */
    storageLogType?: EMaterialReceiptAndDeliveryDocumentListDocumentResponseObject_storageLogType;
}

export enum EMaterialReceiptAndDeliveryDocumentListDocumentResponseObject_storageLogType {
    /** 入库 */
    IN = "IN",
    /** 出库 */
    OUT = "OUT",
    /** 盘点 */
    CHECK = "CHECK",
    /** 库存锁定 */
    LOCK = "LOCK",
    /** 报废 */
    SCRAP = "SCRAP"
}
