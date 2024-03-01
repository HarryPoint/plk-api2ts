import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据参数相关/getPageUsingPOST_3
*/
export default function fetchMethod(options: { data: IDeviceDataParametersOverviewSearchForVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationDeviceDataParameterOverviewReturnsVO>(
        {
            url: "/masterdata-service/deviceCollectionParam/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数据参数概览搜索VO */
export interface IDeviceDataParametersOverviewSearchForVO {
    /** 设备参数编号 */
    code?: string;
    /** 状态 */
    dataStatus?: number;
    /** 设备参数名称 */
    name?: string;
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
/** JSONResult«分页信息«设备数据参数概览返回VO»» */
export interface IJSONResultPagingInformationDeviceDataParameterOverviewReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationDeviceDataParameterOverviewReturnVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«设备数据参数概览返回VO» */
export interface IPageInformationDeviceDataParameterOverviewReturnVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationDeviceDataParameterOverviewReturnVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationDeviceDataParameterOverviewReturnVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IDeviceDataParameterOverviewReturnsVO[];
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
/** 设备数据参数概览返回VO */
export interface IDeviceDataParameterOverviewReturnsVO {
    /** 设备参数编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 状态 */
    dataStatus?: number;
    /** 数据类型(number数字 text文本) */
    dataType?: string;
    /** id */
    id?: string;
    /** 设备参数名称 */
    name?: string;
    /** 备注 */
    remark?: string;
    /** 设备参数单位 */
    unit?: string;
    /** 单位类型(quantity数量 time时间) */
    unitType?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationDeviceDataParameterOverviewReturnVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationDeviceDataParameterOverviewReturnVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
