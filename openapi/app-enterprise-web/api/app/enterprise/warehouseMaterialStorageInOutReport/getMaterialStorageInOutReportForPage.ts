import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16400/doc.html#/default/物料收发汇总报表相关/getMaterialStorageInOutReportForPageUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPageInformationPageResponseObjectForReceivingAndReceivingMaterials>(
        {
            url: "/app-enterprise-web/api/app/enterprise/warehouseMaterialStorageInOutReport/getMaterialStorageInOutReportForPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«物料收发汇总分页响应对象»» */
export interface IJSONResultPageInformationPageResponseObjectForReceivingAndReceivingMaterials {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationSummaryPageResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«物料收发汇总分页响应对象» */
export interface IPageInformationSummaryPageResponseObject {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IMaterialsReceivingAndReceivingSummaryPageResponseObject[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationSummaryPageResponseObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationSummaryPageResponseObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 物料收发汇总分页响应对象 */
export interface IMaterialsReceivingAndReceivingSummaryPageResponseObject {
    /** 所属主数据id (eg:物料id) */
    masterDataId?: string;
    /** 物料code */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 操作仓库id */
    opStorehouseId?: string;
    /** 操作仓库编号 */
    opStorehouseCode?: string;
    /** 操作仓库名称 */
    opStorehouseName?: string;
    /** 期初库存 */
    startQuantity?: number;
    /** 期末库存 */
    endQuantity?: number;
    /** 入库合计 */
    inTotalQuantity?: number;
    /** 出库合计 */
    outTotalQuantity?: number;
    /** 单据入库出库明细 */
    billItems?: IMaterialReceiptAndReceiptSummaryDocumentItemResponseObject[];
}
/** 物料收发汇总单据项响应对象 */
export interface IMaterialReceiptAndReceiptSummaryDocumentItemResponseObject {
    /** 单据流程code */
    billFlowPathCode?: string;
    /** 出入库数量 */
    quantity?: number;
}

export enum EPageInformationSummaryPageResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationSummaryPageResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
