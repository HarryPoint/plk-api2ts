import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据方案相关/getPageUsingPOST_4
*/
export default function fetchMethod(options: { data: IDeviceDataSchemeSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationDeviceDataCollectionSchemeReturnsVO>(
        {
            url: "/masterdata-service/deviceCollectionPlan/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数据方案搜索VO */
export interface IDeviceDataSchemeSearchVO {
    /** 编号 */
    code?: string;
    /** 状态 */
    dataStatus?: number;
    /** 设备id集 */
    deviceIds?: string[];
    /** 名称 */
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
/** JSONResult«分页信息«设备数采方案返回VO»» */
export interface IJSONResultPagingInformationDeviceDataCollectionSchemeReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationDeviceDataCollectionSchemeReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«设备数采方案返回VO» */
export interface IPagingInformationDeviceDataCollectionSchemeReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationDeviceDataCollectionSchemeReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationDeviceDataCollectionSchemeReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IDeviceDataAcquisitionSchemeReturnsVO[];
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
/** 设备数采方案返回VO */
export interface IDeviceDataAcquisitionSchemeReturnsVO {
    /** 方案编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 状态 */
    dataStatus?: number;
    /** 设备集合 */
    deviceList?: IIdNameNumberVO[];
    /** id */
    id?: string;
    /** 版次号 */
    issueCode?: string;
    /** 方案名称 */
    name?: string;
    /** 参数 */
    paramList?: IIdNameNumberVO[];
    /** 备注 */
    remark?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** 编号 */
    code: string;
    /** id */
    id: string;
    /** 名称 */
    name: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationDeviceDataCollectionSchemeReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationDeviceDataCollectionSchemeReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
