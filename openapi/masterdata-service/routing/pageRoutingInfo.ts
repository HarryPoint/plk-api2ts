import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺路径相关/pageRoutingInfoUsingPOST
*/
export default function fetchMethod(options: { data: IProcessPathInformationPagingQueryDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProcessPathInformationObject>(
        {
            url: "/masterdata-service/routing/pageRoutingInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺路径信息分页查询DTO */
export interface IProcessPathInformationPagingQueryDTO {
    /** 物料id */
    materialId?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工艺路径名称 */
    routingName?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«工艺路径信息对象»» */
export interface IJSONResultPagingInformationProcessPathInformationObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationProcessPathInformationObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«工艺路径信息对象» */
export interface IPagingInformationProcessPathInformationObject {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationProcessPathInformationObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationProcessPathInformationObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProcessPathInformationObject[];
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
/** 工艺路径信息对象 */
export interface IProcessPathInformationObject {
    /** 工艺路径编号 */
    code?: string;
    /** 工艺路径id */
    id?: string;
    /** 工艺路径名称 */
    name?: string;
    /** 工艺步骤列表 */
    routingStepList?: IProcessStepInformationObject[];
}
/** 工艺步骤信息对象 */
export interface IProcessStepInformationObject {
    /** 工序步骤id */
    id?: string;
    /** 工序编号 */
    processCode?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationProcessPathInformationObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProcessPathInformationObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
