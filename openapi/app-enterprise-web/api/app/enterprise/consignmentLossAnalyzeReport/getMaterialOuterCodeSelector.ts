import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/宝晶寄售损耗报表相关/getMaterialOuterCodeSelectorUsingPOST_2
*/
export default function fetchMethod(options: { data: IMaterialMasterDataSelectionListSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialMasterDataExternalCodeSelectReturnDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/consignmentLossAnalyzeReport/getMaterialOuterCodeSelector",
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
/** JSONResult«分页信息«物料主数据外部编码选择返回DTO»» */
export interface IJSONResultPagingInformationMaterialMasterDataExternalCodeSelectReturnDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationMaterialMasterDataExternalCodeSelectReturnDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«物料主数据外部编码选择返回DTO» */
export interface IPageInformationMaterialMasterDataExternalCodeSelectReturnDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IMaterialMasterDataExternalCodeSelectReturnDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationMaterialMasterDataExternalCodeSelectReturnDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationMaterialMasterDataExternalCodeSelectReturnDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 物料主数据外部编码选择返回DTO */
export interface IMaterialMasterDataExternalCodeSelectReturnDTO {
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
    hasBom?: EMaterialMasterDataExternalCodeSelectReturnDTO_hasBom;
    /** 外部编码 */
    outsideCode?: string;
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

export enum EPageInformationMaterialMasterDataExternalCodeSelectReturnDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationMaterialMasterDataExternalCodeSelectReturnDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EMaterialMasterDataExternalCodeSelectReturnDTO_hasBom {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
