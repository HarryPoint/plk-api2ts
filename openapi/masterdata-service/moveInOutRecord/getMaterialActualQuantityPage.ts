import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/进出料记录管理/getMaterialActualQuantityPageUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialOutputSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialOutputVO>(
        {
            url: "/masterdata-service/moveInOutRecord/getMaterialActualQuantityPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料产出搜索VO */
export interface IMaterialOutputSearchVO {
    /** 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序步骤ids */
    routingStepIds: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«物料产出VO»» */
export interface IJSONResultPagingInformationMaterialOutputVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationMaterialOutputVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«物料产出VO» */
export interface IPagingInformationMaterialOutputVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationMaterialOutputVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationMaterialOutputVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IMaterialOutputVO[];
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
/** 物料产出VO */
export interface IMaterialOutputVO {
    /** 物料产出(出站总数量) */
    actualQuantity?: number;
    /** 物料id */
    materialId?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationMaterialOutputVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationMaterialOutputVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
