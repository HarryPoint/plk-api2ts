import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/queryMaterialUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingReportMaterialQueryDTO }, extraOptions?: any) {
    return http<IJSONResultPageInformationBaojingReportMaterialResponseDTO>(
        {
            url: "/masterdata-service/baoJingReport/queryMaterial",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶报表物料查询DTO */
export interface IBaojingReportMaterialQueryDTO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 查询参数 */
    commonSearchStr?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«宝晶报表物料响应DTO»» */
export interface IJSONResultPageInformationBaojingReportMaterialResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationBaojingReportMaterialResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«宝晶报表物料响应DTO» */
export interface IPageInformationBaojingReportMaterialResponseDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IBaojingReportMaterialResponseDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationBaojingReportMaterialResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationBaojingReportMaterialResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 宝晶报表物料响应DTO */
export interface IBaojingReportMaterialResponseDTO {
    /** 物料id */
    materialId?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 物料种类 */
    materialType?: string;
    /** 物料种类描述 */
    materialTypeDesc?: string;
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationBaojingReportMaterialResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationBaojingReportMaterialResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
