import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getMaterialOuterCodeSelectorUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialMasterDataSelectionListSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialMasterDataExternalCodeSelectReturnDTO>(
        {
            url: "/masterdata-service/baoJingReport/getMaterialOuterCodeSelector",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料主数据选择列表搜索VO */
export interface IMaterialMasterDataSelectionListSearchVO {
    /** 物料类型数组 */
    materialTypeList?: EMaterialMasterDataSelectionListSearchVO_materialTypeList_items[];
    /** 物料名称/编号 */
    nameOrCode?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
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
    /** 响应结果 */
    data?: IPageInformationMaterialMasterDataExternalCodeSelectReturnDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«物料主数据外部编码选择返回DTO» */
export interface IPageInformationMaterialMasterDataExternalCodeSelectReturnDTO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationMaterialMasterDataExternalCodeSelectReturnDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationMaterialMasterDataExternalCodeSelectReturnDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IMaterialMasterDataExternalCodeSelectReturnDTO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 物料主数据外部编码选择返回DTO */
export interface IMaterialMasterDataExternalCodeSelectReturnDTO {
    /** 物料编号 */
    code?: string;
    /** 是否有bom */
    hasBom?: EMaterialMasterDataExternalCodeSelectReturnDTO_hasBom;
    /** 物料id */
    id?: string;
    /** 版次号 */
    issueCode?: string;
    /** 物料名称 */
    name?: string;
    /** 外部编码 */
    outsideCode?: string;
    /** 规格 */
    spec?: string;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 物料类型 */
    type?: string;
    /** 物料类型描述 */
    typeDesc?: string;
    /** 单位 */
    unit?: string;
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

export enum EPageInformationMaterialMasterDataExternalCodeSelectReturnDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationMaterialMasterDataExternalCodeSelectReturnDTO_hasPreviousPage {
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
