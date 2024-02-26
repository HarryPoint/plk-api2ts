import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产任务相关/getMaterialSelectorUsingGET
*/
export default function fetchMethod(options: { params: { materialTypeList?: EmaterialTypeList_items[]; nameOrCode?: string; pageNo?: number; pageSize?: number; orders?: { column?: string; isAsc?: Eorders_items_isAsc }[] } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialMasterDataSelectionReturnsVO>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTask/getMaterialSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
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
    ts?: number;
}
/** 分页信息«物料主数据选择返回VO» */
export interface IPageInformationMaterialMasterDataSelectionReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IMaterialMasterDataSelectionIsReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationMaterialMasterDataSelectionReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationMaterialMasterDataSelectionReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 物料主数据选择返回VO */
export interface IMaterialMasterDataSelectionIsReturnedToVO {
    /** 物料id */
    id?: number;
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

export enum EmaterialTypeList_items {
    RAW = "RAW",
    SEMI_PRODUCT = "SEMI_PRODUCT",
    FINISH_GOODS = "FINISH_GOODS",
    KIT = "KIT",
    PARTS = "PARTS"
}

export enum Eorders_items_isAsc {
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
