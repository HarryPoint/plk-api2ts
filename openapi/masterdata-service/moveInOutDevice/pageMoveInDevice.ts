import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料设备相关/pageMoveInDeviceUsingPOST
*/
export default function fetchMethod(options: { data: IFeedEquipmentPagingQuery }, extraOptions?: any) {
    return http<IJSONResultThePagingInformationFeedDeviceRespondsToTheDTO>(
        {
            url: "/masterdata-service/moveInOutDevice/pageMoveInDevice",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料设备分页查询 */
export interface IFeedEquipmentPagingQuery {
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 名称或者编号 */
    nameOrCode?: string;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产任务ids */
    produceTaskIds?: string[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«进料设备响应DTO»» */
export interface IJSONResultThePagingInformationFeedDeviceRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationFeedDeviceRespondsToDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«进料设备响应DTO» */
export interface IPagingInformationFeedDeviceRespondsToDTO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationFeedDeviceRespondsToDTO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationFeedDeviceRespondsToDTO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IFeedEquipmentRespondsToDTO[];
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
/** 进料设备响应DTO */
export interface IFeedEquipmentRespondsToDTO {
    /** 设备编号 */
    code?: string;
    /** 设备id */
    id?: string;
    /** 设备名称 */
    name?: string;
    /** 生产工艺设备id */
    produceTechnologyDeviceId?: string[];
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationFeedDeviceRespondsToDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationFeedDeviceRespondsToDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
