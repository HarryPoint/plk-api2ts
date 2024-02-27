import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/宝晶报表(销售发货分析)相关/getMajorDataSelectorUsingPOST_6
*/
export default function fetchMethod(options: { data: IMaterialMasterDataSelectionListSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialMasterDataSelectionReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportSalesDeliver/getMajorDataSelector",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 物料主数据选择列表搜索VO */
export interface IMaterialMasterDataSelectionListSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 物料名称/编号 */
    nameOrCode?: string;
    /** 物料类型数组 */
    materialTypeList?: EMaterialMasterDataSelectionListSearchVO_materialTypeList_items[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«物料主数据选择返回VO»» */
export interface IJSONResultPagingInformationMaterialMasterDataSelectionReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationMaterialMasterDataSelectionReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«物料主数据选择返回VO» */
export interface IPageInformationMaterialMasterDataSelectionReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IMaterialMasterDataSelectionIsReturnedToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationMaterialMasterDataSelectionReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationMaterialMasterDataSelectionReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 物料主数据选择返回VO */
export interface IMaterialMasterDataSelectionIsReturnedToVO {
    /** 物料id */
    id?: string;
    /** 物料名称 */
    name?: string;
    /** 物料编号 */
    code?: string;
    /** 物料类型 */
    type?: string;
    /** 物料类型描述 */
    typeDesc?: string;
    /** 单位 */
    unit?: string;
    /** 规格 */
    spec?: string;
    /** 版次号 */
    issueCode?: string;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 是否有bom */
    hasBom?: EMaterialMasterDataSelectionIsReturnedToVO_hasBom;
}

export enum EMaterialMasterDataSelectionListSearchVO_materialTypeList_items {
    RAW = "RAW",
    SEMI_PRODUCT = "SEMI_PRODUCT",
    FINISH_GOODS = "FINISH_GOODS",
    KIT = "KIT",
    PARTS = "PARTS"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationMaterialMasterDataSelectionReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationMaterialMasterDataSelectionReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialMasterDataSelectionIsReturnedToVO_hasBom {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
